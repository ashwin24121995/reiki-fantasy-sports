/**
 * Homepage for REIKI ENERGY Fantasy Cricket Platform
 * Professional design with hero section, features, and theme toggle
 */

import { useAuth } from '@/contexts/AuthContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'wouter';
import {
  Trophy,
  Users,
  TrendingUp,
  Shield,
  BookOpen,
  Zap,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const { isAuthenticated, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Trophy,
      title: 'Free to Play',
      description: 'No real money involved. Play for fun, learning, and glory on the leaderboard.',
    },
    {
      icon: Users,
      title: 'Build Your Team',
      description: 'Select 11 players from real cricket matches and compete with other users.',
    },
    {
      icon: TrendingUp,
      title: 'Live Scoring',
      description: 'Real-time points updates based on actual match performance from Cricket Data API.',
    },
    {
      icon: Shield,
      title: 'Fair Play',
      description: 'Skill-based platform with transparent rules and educational focus.',
    },
    {
      icon: BookOpen,
      title: 'Learn Cricket',
      description: 'Understand player strategies, match dynamics, and fantasy cricket skills.',
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'See your rank and performance immediately after each match ends.',
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Register & Verify',
      description: 'Create your free account and verify you are 18+ years old.',
    },
    {
      step: '2',
      title: 'Select Match',
      description: 'Choose from upcoming T20, ODI, or Test matches.',
    },
    {
      step: '3',
      title: 'Build Team',
      description: 'Pick 11 players within budget and assign captain & vice-captain.',
    },
    {
      step: '4',
      title: 'Track & Learn',
      description: 'Watch live scores, track your rank, and improve your skills.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img src="/logo.png" alt="REIKI ENERGY" className="h-10" />
                <span className="font-bold text-xl hidden sm:inline">REIKI ENERGY</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/how-to-play">
                <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
                  How to Play
                </span>
              </Link>
              <Link href="/about">
                <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
                  About Us
                </span>
              </Link>
              <Link href="/faq">
                <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
                  FAQ
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-sm font-medium hover:text-primary cursor-pointer transition-colors">
                  Contact
                </span>
              </Link>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* Auth Buttons */}
              {isAuthenticated ? (
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
              ) : (
                <div className="flex items-center space-x-2">
                  <Link href="/login">
                    <Button variant="ghost">Login</Button>
                  </Link>
                  <Link href="/register">
                    <Button>Register</Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full"
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <Link href="/how-to-play">
                  <span className="block py-2 text-sm font-medium hover:text-primary cursor-pointer">
                    How to Play
                  </span>
                </Link>
                <Link href="/about">
                  <span className="block py-2 text-sm font-medium hover:text-primary cursor-pointer">
                    About Us
                  </span>
                </Link>
                <Link href="/faq">
                  <span className="block py-2 text-sm font-medium hover:text-primary cursor-pointer">
                    FAQ
                  </span>
                </Link>
                <Link href="/contact">
                  <span className="block py-2 text-sm font-medium hover:text-primary cursor-pointer">
                    Contact
                  </span>
                </Link>
                {isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button className="w-full">Dashboard</Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/login">
                      <Button variant="outline" className="w-full">
                        Login
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full">Register</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <img src="/18plus-badge.png" alt="18+" className="h-12" />
                <img src="/fair-play-badge.png" alt="Fair Play" className="h-12" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Master Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Fantasy Cricket Skills
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Free-to-play fantasy cricket platform for learning and entertainment. Build teams,
                compete with others, and climb the leaderboard - all without spending a rupee!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {isAuthenticated ? (
                  <Link href="/dashboard">
                    <Button size="lg" className="w-full sm:w-auto">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link href="/register">
                      <Button size="lg" className="w-full sm:w-auto">
                        Get Started Free
                      </Button>
                    </Link>
                    <Link href="/how-to-play">
                      <Button size="lg" variant="outline" className="w-full sm:w-auto">
                        Learn How to Play
                      </Button>
                    </Link>
                  </>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                ✓ No Real Money ✓ Educational Purpose ✓ 18+ Only
              </p>
            </div>
            <div className="relative">
              <img
                src="/hero-cricket.png"
                alt="Fantasy Cricket"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose REIKI ENERGY?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              India's first truly free fantasy cricket platform focused on education and skill
              development
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in 4 simple steps
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {!isAuthenticated && (
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of cricket fans mastering fantasy cricket skills on India's first
              free-to-play educational platform
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Create Free Account
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img src="/logo.png" alt="REIKI ENERGY" className="h-12 mb-4" />
              <p className="text-sm text-muted-foreground">
                REIKI ENERGY GLOBAL PRIVATE LIMITED
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                CIN: U86909HR2024PTC119844
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      About Us
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/how-to-play">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      How to Play
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      FAQ
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/terms">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      Terms & Conditions
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      Fair Play Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">
                    <span className="text-muted-foreground hover:text-primary cursor-pointer">
                      Responsible Gaming
                    </span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Compliance Badges */}
            <div>
              <h4 className="font-semibold mb-4">Compliance</h4>
              <div className="flex flex-col space-y-3">
                <img src="/18plus-badge.png" alt="18+" className="h-12 w-12" />
                <img src="/fair-play-badge.png" alt="Fair Play" className="h-12 w-12" />
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t pt-8">
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-4">
              <p className="text-xs text-center">
                <strong>Legal Disclaimer:</strong> This platform is NOT available in Andhra
                Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim. Only users 18 years and
                older are permitted. This is a skill-based, free-to-play platform with no real
                money involved. For educational and entertainment purposes only.
              </p>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © 2024 REIKI ENERGY GLOBAL PRIVATE LIMITED. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
