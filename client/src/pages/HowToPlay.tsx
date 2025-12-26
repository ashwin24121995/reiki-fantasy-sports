/**
 * How to Play Page - REIKI ENERGY
 * Comprehensive guide to playing fantasy cricket
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  UserPlus,
  Calendar,
  Users,
  Trophy,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';

export default function HowToPlay() {
  const steps = [
    {
      icon: UserPlus,
      title: 'Step 1: Register & Verify',
      description: 'Create your free account',
      details: [
        'Provide your name, email, and create a password',
        'Enter your date of birth (must be 18+ years old)',
        'Select your state (some states are restricted)',
        'Verify your age by checking the 18+ confirmation',
        'Accept our terms and conditions',
      ],
    },
    {
      icon: Calendar,
      title: 'Step 2: Select a Match',
      description: 'Choose from upcoming cricket matches',
      details: [
        'Browse upcoming T20, ODI, and Test matches',
        'Check match details: teams, venue, and start time',
        'View player lists for both teams',
        'Select a match to create your fantasy team',
      ],
    },
    {
      icon: Users,
      title: 'Step 3: Build Your Team',
      description: 'Select 11 players strategically',
      details: [
        'Choose 11 players from both teams combined',
        'Follow team composition rules (see below)',
        'Stay within the virtual budget (100 credits)',
        'Select 1 Captain (2x points) and 1 Vice-Captain (1.5x points)',
        'Save your team before match starts',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Step 4: Track Performance',
      description: 'Watch live scores and rankings',
      details: [
        'Monitor live match scores and player performance',
        'See your fantasy points update in real-time',
        'Check your rank on the leaderboard',
        'Learn from top-performing teams',
      ],
    },
  ];

  const teamRules = [
    {
      category: 'Wicket-Keepers',
      min: 1,
      max: 4,
      description: 'Players who keep wickets',
    },
    {
      category: 'Batsmen',
      min: 3,
      max: 6,
      description: 'Specialist batsmen',
    },
    {
      category: 'All-Rounders',
      min: 1,
      max: 4,
      description: 'Players who bat and bowl',
    },
    {
      category: 'Bowlers',
      min: 3,
      max: 6,
      description: 'Specialist bowlers',
    },
  ];

  const scoringRules = [
    { action: 'Run scored', points: '+1 point per run' },
    { action: 'Boundary (4)', points: '+1 bonus point' },
    { action: 'Six (6)', points: '+2 bonus points' },
    { action: 'Half-century (50)', points: '+8 bonus points' },
    { action: 'Century (100)', points: '+16 bonus points' },
    { action: 'Wicket taken', points: '+25 points' },
    { action: 'Catch taken', points: '+8 points' },
    { action: 'Stumping', points: '+12 points' },
    { action: 'Run-out', points: '+6 points' },
    { action: 'Maiden over', points: '+12 points' },
    { action: 'Duck (out for 0)', points: '-2 points' },
  ];

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

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How to Play</h1>
            <p className="text-xl text-muted-foreground">
              Learn how to play fantasy cricket on REIKI ENERGY in 4 simple steps
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white flex items-center justify-center flex-shrink-0">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{step.title}</CardTitle>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Team Composition Rules */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Team Composition Rules</h2>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground mb-4">
                      Your 11-player team must follow these composition rules:
                    </p>
                    {teamRules.map((rule, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                        <div>
                          <p className="font-semibold">{rule.category}</p>
                          <p className="text-sm text-muted-foreground">{rule.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">
                            {rule.min} - {rule.max}
                          </p>
                          <p className="text-xs text-muted-foreground">players</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <p className="text-sm">
                        <strong>Important:</strong> You can select a maximum of 7 players from any
                        one team.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Scoring System */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Scoring System</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground mb-4">
                    Your players earn points based on their real match performance:
                  </p>
                  <div className="space-y-2">
                    {scoringRules.map((rule, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 border-b last:border-0"
                      >
                        <span className="text-muted-foreground">{rule.action}</span>
                        <span className="font-semibold">{rule.points}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                    <p className="text-sm">
                      <strong>Captain & Vice-Captain Bonus:</strong>
                      <br />
                      • Captain earns 2x points
                      <br />• Vice-Captain earns 1.5x points
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tips for Beginners */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Tips for Beginners</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✓ Research Players</h3>
                    <p className="text-sm text-muted-foreground">
                      Check recent form, venue stats, and head-to-head records before selecting
                      players.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✓ Balance Your Team</h3>
                    <p className="text-sm text-muted-foreground">
                      Don't pick all batsmen or all bowlers. A balanced team performs better.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✓ Choose Captain Wisely</h3>
                    <p className="text-sm text-muted-foreground">
                      Your captain gets 2x points, so choose a player likely to perform well.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">✓ Learn from Others</h3>
                    <p className="text-sm text-muted-foreground">
                      Check leaderboard top teams to understand winning strategies.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg">
              <Trophy className="h-16 w-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Play?</h2>
              <p className="mb-6 opacity-90">
                Create your free account and start building your first fantasy cricket team!
              </p>
              <Link href="/register">
                <Button size="lg" variant="secondary">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
