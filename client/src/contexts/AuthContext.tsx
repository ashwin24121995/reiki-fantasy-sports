/**
 * Authentication Context for REIKI ENERGY
 * Manages user authentication state and provides auth methods
 */

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { trpc, trpcClient } from '@/lib/trpc';

interface User {
  id: number;
  name: string;
  email: string;
  state?: string | null;
  ageVerified: boolean;
  role: 'user' | 'admin';
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
  state?: string;
  ageVerified: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loginMutation = trpc.auth.login.useMutation();
  const registerMutation = trpc.auth.register.useMutation();
  const logoutMutation = trpc.auth.logout.useMutation();

  // Check auth status on mount (cookie-based)
  useEffect(() => {
    fetchUser();
  }, []);

  // Fetch user data from cookie-based session
  const fetchUser = async () => {
    try {
      // The auth.me procedure reads from cookie automatically
      const userData = await trpcClient.auth.me.query();
      
      if (userData) {
        setUser(userData as User);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Failed to fetch user:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Refresh user data
  const refreshUser = async () => {
    await fetchUser();
  };

  // Login function (cookie-based, no token storage needed)
  const login = async (email: string, password: string) => {
    try {
      const result = await loginMutation.mutateAsync({ email, password });

      if (result.success && result.user) {
        setUser(result.user as User);
        return { success: true, message: result.message };
      }

      return { success: false, message: result.message || 'Login failed' };
    } catch (error: any) {
      return { success: false, message: error.message || 'Login failed' };
    }
  };

  // Register function
  const register = async (data: RegisterData) => {
    try {
      const result = await registerMutation.mutateAsync(data);

      if (result.success) {
        return { success: true, message: result.message };
      }

      return { success: false, message: result.message || 'Registration failed' };
    } catch (error: any) {
      return { success: false, message: error.message || 'Registration failed' };
    }
  };

  // Logout function
  const logout = () => {
    logoutMutation.mutate();
    setUser(null);
    setToken(null);
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
