/**
 * About Us Page - REIKI ENERGY
 * Company information and mission
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Target, Heart, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About REIKI ENERGY</h1>
            <p className="text-xl text-muted-foreground">
              India's First Free-to-Play Fantasy Cricket Platform for Education and Skill
              Development
            </p>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Our Story */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  REIKI ENERGY GLOBAL PRIVATE LIMITED was founded with a simple yet powerful
                  vision: to make fantasy cricket accessible to everyone in India, without the
                  financial barriers that often prevent cricket enthusiasts from learning and
                  enjoying the game.
                </p>
                <p className="mb-4">
                  We believe that fantasy cricket is not just about winning money—it's about
                  understanding the game, analyzing player performance, making strategic decisions,
                  and developing critical thinking skills. That's why we created India's first
                  truly free-to-play fantasy cricket platform.
                </p>
                <p>
                  Backed by investors who believe in the power of education and skill development,
                  we offer a platform where users can learn, compete, and improve their fantasy
                  cricket skills without spending a single rupee.
                </p>
              </div>
            </div>

            {/* Our Mission & Values */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To democratize fantasy cricket education and make it accessible to every cricket
                    fan in India, regardless of their financial background.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✓ Education First</li>
                    <li>✓ Complete Transparency</li>
                    <li>✓ Fair Play Always</li>
                    <li>✓ User Safety</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Commitment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We are committed to maintaining a safe, responsible, and educational platform
                    that complies with all Indian regulations and promotes healthy gaming habits.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Community</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Join thousands of cricket enthusiasts learning and competing together in a
                    supportive, educational environment.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* What Makes Us Different */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What Makes Us Different</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">100% Free to Play</h3>
                    <p className="text-muted-foreground">
                      No deposits, no withdrawals, no hidden charges. Completely free forever.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Educational Focus</h3>
                    <p className="text-muted-foreground">
                      Learn player analysis, match strategies, and decision-making skills through
                      practical experience.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Real-Time Data</h3>
                    <p className="text-muted-foreground">
                      Powered by Cricket Data API for accurate, live match data and player
                      statistics.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">Responsible Gaming</h3>
                    <p className="text-muted-foreground">
                      Strict age verification (18+), state compliance, and educational purpose only.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Company Details */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Company Details</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold mb-1">Company Name</p>
                  <p className="text-muted-foreground">REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Corporate Identity Number (CIN)</p>
                  <p className="text-muted-foreground">U86909HR2024PTC119844</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">PAN</p>
                  <p className="text-muted-foreground">AANCR4715K</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Incorporation Date</p>
                  <p className="text-muted-foreground">March 14, 2024</p>
                </div>
                <div className="md:col-span-2">
                  <p className="font-semibold mb-1">Registered Office Address</p>
                  <p className="text-muted-foreground">
                    H NO41, RESIDENCIAL COLONY, BAZIDA JATTAN
                    <br />
                    Karnal, Haryana - 132001, India
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Start Learning?</h2>
              <p className="text-muted-foreground mb-6">
                Join our community of cricket enthusiasts today
              </p>
              <Link href="/register">
                <Button size="lg">Create Free Account</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
