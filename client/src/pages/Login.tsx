/**
 * Enhanced Login Page for REIKI ENERGY
 * Features: Remember Me, Password visibility toggle, Forgot password, Enhanced UX
 */

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, AlertCircle, CheckCircle2, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function Login() {
  const [, setLocation] = useLocation();
  const { login, isLoading: authLoading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [forgotPasswordSent, setForgotPasswordSent] = useState(false);

  // Load remembered email on mount
  useEffect(() => {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
      setEmail(rememberedEmail);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const result = await login(email, password);

      if (result.success) {
        // Handle Remember Me
        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
        } else {
          localStorage.removeItem('rememberedEmail');
        }

        setSuccess('Login successful! Redirecting to dashboard...');
        
        // Smooth redirect with animation
        setTimeout(() => {
          setLocation('/dashboard');
        }, 1500);
      } else {
        setError(result.message || 'Invalid email or password');
      }
    } catch (err: any) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!forgotPasswordEmail) {
      return;
    }

    // TODO: Implement forgot password API call
    // For now, just show success message
    setForgotPasswordSent(true);
    setTimeout(() => {
      setForgotPasswordSent(false);
      setForgotPasswordEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative">
      {/* Auth Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/auth-background.webp"
          alt="Cricket Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <Card className="w-full max-w-md shadow-2xl relative z-10 bg-background/95 backdrop-blur-md border-2">
        <CardHeader className="space-y-1 pb-6">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo-light.webp" alt="REIKI ENERGY" className="h-12 dark:hidden" />
            <img src="/logo-dark.webp" alt="REIKI ENERGY" className="h-12 hidden dark:block" />
          </div>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Welcome Back!
          </CardTitle>
          <CardDescription className="text-center text-base">
            Login to continue your fantasy cricket journey
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  required
                  autoComplete="email"
                  className="pl-10 h-11"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <Dialog>
                  <DialogTrigger asChild>
                    <button type="button" className="text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-medium">
                      Forgot password?
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Reset Password</DialogTitle>
                      <DialogDescription>
                        Enter your email address and we'll send you a link to reset your password.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div className="space-y-2">
                        <Label htmlFor="forgot-email">Email Address</Label>
                        <Input
                          id="forgot-email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={forgotPasswordEmail}
                          onChange={(e) => setForgotPasswordEmail(e.target.value)}
                        />
                      </div>
                      {forgotPasswordSent && (
                        <Alert className="bg-green-50 text-green-900 border-green-200">
                          <CheckCircle2 className="h-4 w-4" />
                          <AlertDescription>
                            Password reset link sent! Check your email.
                          </AlertDescription>
                        </Alert>
                      )}
                      <Button
                        onClick={handleForgotPassword}
                        disabled={!forgotPasswordEmail || forgotPasswordSent}
                        className="w-full"
                      >
                        {forgotPasswordSent ? 'Email Sent!' : 'Send Reset Link'}
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError('');
                  }}
                  required
                  autoComplete="current-password"
                  className="pl-10 pr-10 h-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Remember me
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <Alert variant="destructive" className="animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Success Message */}
            {success && (
              <Alert className="bg-green-50 text-green-900 border-green-200 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>{success}</AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 text-base font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300"
              disabled={isLoading || authLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login to Dashboard'
              )}
            </Button>

            {/* Register Link */}
            <div className="text-center text-sm pt-2">
              <span className="text-muted-foreground">Don't have an account?</span>{' '}
              <Link href="/register" className="text-emerald-600 hover:text-emerald-700 hover:underline font-semibold">
                Create Free Account
              </Link>
            </div>
          </form>

          {/* Info Box */}
          <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              <strong className="text-emerald-700 dark:text-emerald-400">100% Free to Play:</strong> REIKI ENERGY is an educational fantasy cricket platform with no real money involved. Play for fun, learn strategies, and compete with thousands of players!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
