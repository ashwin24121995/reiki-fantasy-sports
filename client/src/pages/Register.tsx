/**
 * Enhanced Registration Page for REIKI ENERGY
 * Features: Multi-step form, Password strength meter, Age verification, State restrictions
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Loader2, AlertCircle, CheckCircle2, User, Mail, Lock, MapPin, Eye, EyeOff, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const INDIAN_STATES = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
];

const BANNED_STATES = [
  'Andhra Pradesh',
  'Assam',
  'Nagaland',
  'Odisha',
  'Sikkim',
  'Telangana',
];

export default function Register() {
  const [, setLocation] = useLocation();
  const { register: registerUser, isLoading: authLoading } = useAuth();
  const { theme } = useTheme();

  const [step, setStep] = useState(1); // 1: Personal Info, 2: Location, 3: Password, 4: Confirm
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    state: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ageVerified, setAgeVerified] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  // Password strength calculation
  const calculatePasswordStrength = (password: string): { score: number; label: string; color: string } => {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (password.length >= 12) score += 15;
    if (/[a-z]/.test(password)) score += 15;
    if (/[A-Z]/.test(password)) score += 15;
    if (/[0-9]/.test(password)) score += 15;
    if (/[^a-zA-Z0-9]/.test(password)) score += 15;

    if (score < 40) return { score, label: 'Weak', color: 'bg-red-500' };
    if (score < 70) return { score, label: 'Medium', color: 'bg-yellow-500' };
    return { score, label: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = formData.password ? calculatePasswordStrength(formData.password) : null;

  const validateStep = (currentStep: number): boolean => {
    setError('');

    switch (currentStep) {
      case 1:
        if (!formData.name || formData.name.length < 2) {
          setError('Name must be at least 2 characters long');
          return false;
        }
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setError('Please enter a valid email address');
          return false;
        }
        break;

      case 2:
        if (!formData.state) {
          setError('Please select your state');
          return false;
        }
        if (BANNED_STATES.includes(formData.state)) {
          setError(`Sorry, REIKI ENERGY is not available in ${formData.state} due to state regulations.`);
          return false;
        }
        break;

      case 3:
        if (!formData.password || formData.password.length < 8) {
          setError('Password must be at least 8 characters long');
          return false;
        }
        if (passwordStrength && passwordStrength.score < 40) {
          setError('Please choose a stronger password');
          return false;
        }
        if (!formData.confirmPassword) {
          setError('Please confirm your password');
          return false;
        }
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          return false;
        }
        break;

      case 4:
        if (!ageVerified) {
          setError('You must be 18 or older to register');
          return false;
        }
        if (!termsAccepted) {
          setError('Please accept the Terms & Conditions');
          return false;
        }
        if (!privacyAccepted) {
          setError('Please accept the Privacy Policy');
          return false;
        }
        break;
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(4)) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        state: formData.state,
        ageVerified: ageVerified
      });

      if (result.success) {
        setSuccess('Registration successful! Redirecting to dashboard...');
        setTimeout(() => {
          setLocation('/dashboard');
        }, 2000);
      } else {
        setError(result.message || 'Registration failed');
      }
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const progress = (step / 4) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 py-8 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/auth-background.webp"
          alt="Cricket Stadium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
      <Card className="w-full shadow-2xl bg-background/95 backdrop-blur-md border-2">
        <CardHeader className="space-y-1 pb-4">
          <div className="flex items-center justify-center mb-4">
            <img
              src={theme === 'dark' ? '/logo-light.webp' : '/logo-dark.webp'}
              alt="REIKI ENERGY"
              className="h-12"
            />
          </div>
          <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Create Free Account
          </CardTitle>
          <CardDescription className="text-center text-base">
            Join thousands of fantasy cricket enthusiasts
          </CardDescription>
          
          {/* Progress Bar */}
          <div className="pt-4 space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Step {step} of 4</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>

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
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      required
                      className="pl-10 h-11"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="state" className="text-sm font-medium">
                    State / Union Territory
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={formData.state} onValueChange={(value) => handleChange('state', value)}>
                      <SelectTrigger className="pl-10 h-11">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {INDIAN_STATES.map((state) => (
                          <SelectItem
                            key={state}
                            value={state}
                            disabled={BANNED_STATES.includes(state)}
                          >
                            {state}
                            {BANNED_STATES.includes(state) && ' (Not Available)'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    REIKI ENERGY is not available in: {BANNED_STATES.join(', ')}
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Password */}
            {step === 3 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                      required
                      className="pl-10 pr-10 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {passwordStrength && (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Password Strength:</span>
                        <span className={`font-medium ${
                          passwordStrength.label === 'Weak' ? 'text-red-600' :
                          passwordStrength.label === 'Medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${passwordStrength.color} transition-all duration-300`}
                          style={{ width: `${passwordStrength.score}%` }}
                        />
                      </div>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Use 8+ characters with uppercase, lowercase, numbers, and symbols
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Re-enter your password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleChange('confirmPassword', e.target.value)}
                      required
                      className="pl-10 pr-10 h-11"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                  {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <p className="text-xs text-red-600">Passwords do not match</p>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="age"
                      checked={ageVerified}
                      onCheckedChange={(checked) => {
                        setAgeVerified(checked as boolean);
                        setError('');
                      }}
                    />
                    <label
                      htmlFor="age"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I confirm that I am <strong>18 years or older</strong>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="terms"
                      checked={termsAccepted}
                      onCheckedChange={(checked) => {
                        setTermsAccepted(checked as boolean);
                        setError('');
                      }}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I accept the{' '}
                      <Link href="/terms" className="text-emerald-600 hover:underline font-medium">
                        Terms & Conditions
                      </Link>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="privacy"
                      checked={privacyAccepted}
                      onCheckedChange={(checked) => {
                        setPrivacyAccepted(checked as boolean);
                        setError('');
                      }}
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm leading-relaxed cursor-pointer"
                    >
                      I accept the{' '}
                      <Link href="/privacy" className="text-emerald-600 hover:underline font-medium">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </div>

                <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  <p className="text-xs text-center text-muted-foreground leading-relaxed">
                    <strong className="text-emerald-700 dark:text-emerald-400">Educational Platform:</strong> REIKI ENERGY is 100% free with no real money involved. Play to learn fantasy cricket strategies and have fun!
                  </p>
                </div>
              </div>
            )}

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

            {/* Navigation Buttons */}
            <div className="flex gap-3 pt-2">
              {step > 1 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleBack}
                  className="flex-1 h-11"
                  disabled={isLoading}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              )}
              
              {step < 4 ? (
                <Button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 h-11 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="flex-1 h-11 text-base font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  disabled={isLoading || authLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </Button>
              )}
            </div>

            {/* Login Link */}
            <div className="text-center text-sm pt-2">
              <span className="text-muted-foreground">Already have an account?</span>{' '}
              <Link href="/login" className="text-emerald-600 hover:text-emerald-700 hover:underline font-semibold">
                Login Here
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}
