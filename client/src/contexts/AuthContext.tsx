/**
 * Authentication Context for REIKI ENERGY
 * Manages user authentication state and provides auth methods
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { trpc } from '@/lib/trpc';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
  dateOfBirth?: string | null;
  state?: string | null;
  ageVerified: boolean;
  role: 'user' | 'admin';
  createdAt: Date;
  updatedAt: Date;
  lastSignedIn?: Date | null;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; message: string }>;
  register: (data: RegisterData) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
  dateOfBirth: string;
  state: string;
  ageVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loginMutation = trpc.customAuth.login.useMutation();
  const registerMutation = trpc.customAuth.register.useMutation();
  const logoutMutation = trpc.customAuth.logout.useMutation();

  // Load token from localStorage on mount
  useEffect(() => {
    const storedToken = localStorage.getItem('auth_token');
    if (storedToken) {
      setToken(storedToken);
      fetchUser(storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  // Fetch user data with token
  const fetchUser = async (authToken: string) => {
    try {
      const response = await fetch('/api/trpc/customAuth.me', {
        headers: {
          'Authorization': `Bearer ${authToken}`,
        },
      });

      const data = await response.json();

      if (data.result?.data?.user) {
        setUser(data.result.data.user);
      } else {
        // Token invalid, clear it
        localStorage.removeItem('auth_token');
        setToken(null);
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      localStorage.removeItem('auth_token');
      setToken(null);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    if (token) {
      await fetchUser(token);
    }
  };

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const result = await loginMutation.mutateAsync({ email, password });

      if (result.success && result.token && result.user) {
        setToken(result.token);
        setUser(result.user as User);
        localStorage.setItem('auth_token', result.token);
        return { success: true, message: result.message };
      }

      return { success: false, message: result.message };
    } catch (error: any) {
      return { success: false, message: error.message || 'Login failed' };
    }
  };

  // Register function
  const register = async (data: RegisterData) => {
    try {
      const result = await registerMutation.mutateAsync(data);

      if (result.success && result.token && result.user) {
        setToken(result.token);
        setUser(result.user as User);
        localStorage.setItem('auth_token', result.token);
        return { success: true, message: result.message };
      }

      return { success: false, message: result.message };
    } catch (error: any) {
      return { success: false, message: error.message || 'Registration failed' };
    }
  };

  // Logout function
  const logout = () => {
    logoutMutation.mutate();
    setUser(null);
    setToken(null);
    localStorage.removeItem('auth_token');
  };

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
