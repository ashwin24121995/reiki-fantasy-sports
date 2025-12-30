/**
 * How It Works Page - REIKI ENERGY
 * Detailed step-by-step visual guide explaining the complete platform flow
 */

import { CheckCircle, UserPlus, Trophy, Users, Target, Star, TrendingUp, Shield, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { useAuth } from '@/contexts/AuthContext';

export default function NewHowItWorks() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Complete Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How REIKI ENERGY Works
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn fantasy cricket step-by-step. No experience required. Completely free forever.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">The Journey in 4 Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Register', icon: UserPlus, color: 'bg-blue-500' },
                { num: '2', title: 'Pick Match', icon: Trophy, color: 'bg-green-500' },
                { num: '3', title: 'Build Team', icon: Users, color: 'bg-yellow-500' },
                { num: '4', title: 'Track Results', icon: TrendingUp, color: 'bg-purple-500' },
              ].map((step, index) => (
                <div key={index} className="relative">
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className={`h-16 w-16 mx-auto rounded-full ${step.color} flex items-center justify-center text-white text-2xl font-bold mb-4`}>
                        {step.num}
                      </div>
                      <step.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <h3 className="font-bold">{step.title}</h3>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Registration */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h2 className="text-3xl font-bold">Create Your Free Account</h2>
                <p className="text-muted-foreground">Takes 2 minutes. No payment required.</p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">What You Need:</h3>
                    <ul className="space-y-2">
                      {[
                        'Valid email address',
                        'Phone number',
                        'Date of birth (must be 18+)',
                        'State of residence',
                        'Password (minimum 8 characters)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Age Verification:</strong> You must be 18 years or older to use REIKI ENERGY. 
                      We strictly enforce this requirement.
                    </AlertDescription>
                  </Alert>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>State Restrictions:</strong> Users from Andhra Pradesh, Assam, Odisha, Telangana, 
                      Nagaland, and Sikkim cannot register due to government compliance requirements.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Privacy Promise:</strong> Your personal information is never 
                      sold or shared. We use it only for age verification and account management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 2: Pick a Match */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h2 className="text-3xl font-bold">Select a Cricket Match</h2>
                <p className="text-muted-foreground">Choose from real upcoming matches via Cricket Data API</p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Match Types Available:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        { type: 'T20', desc: 'Fast-paced 20-over matches', icon: Trophy },
                        { type: 'ODI', desc: '50-over international matches', icon: Trophy },
                        { type: 'Test', desc: 'Multi-day test cricket', icon: Trophy },
                      ].map((format, index) => (
                        <div key={index} className="border rounded-lg p-4 text-center">
                          <format.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <h4 className="font-bold">{format.type}</h4>
                          <p className="text-sm text-muted-foreground">{format.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Match Status:</h3>
                    <ul className="space-y-2">
                      {[
                        { status: 'Upcoming', desc: 'Create teams before match starts', color: 'bg-blue-500' },
                        { status: 'Live', desc: 'Match in progress, see real-time scores', color: 'bg-green-500' },
                        { status: 'Completed', desc: 'View final results and leaderboard', color: 'bg-gray-500' },
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className={`h-3 w-3 rounded-full ${item.color}`} />
                          <span><strong>{item.status}:</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm">
                      <strong className="text-foreground">Real Data:</strong> All match information comes directly 
                      from Cricket Data API. No mock or fake data. You're learning with real cricket matches.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Step 3: Build Your Team */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-yellow-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h2 className="text-3xl font-bold">Build Your Fantasy Team</h2>
                <p className="text-muted-foreground">Select 11 players strategically</p>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Team Composition Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Player Categories:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          { role: 'Wicket-Keepers (WK)', range: '1-4 players', icon: Shield },
                          { role: 'Batsmen (BAT)', range: '3-6 players', icon: Target },
                          { role: 'All-Rounders (AR)', range: '1-4 players', icon: Star },
                          { role: 'Bowlers (BOWL)', range: '3-6 players', icon: Trophy },
                        ].map((cat, index) => (
                          <div key={index} className="flex items-center gap-3 border rounded-lg p-3">
                            <cat.icon className="h-6 w-6 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-semibold text-sm">{cat.role}</p>
                              <p className="text-xs text-muted-foreground">{cat.range}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Alert>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Important Rule:</strong> You can select maximum 7 players from one team. 
                        This ensures balanced team selection.
                      </AlertDescription>
                    </Alert>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm font-semibold mb-2">No Budget System</p>
                      <p className="text-sm text-muted-foreground">
                        Unlike paid platforms, REIKI ENERGY has <strong className="text-foreground">no credit/budget limits</strong>. 
                        Select any 11 players based purely on skill and strategy, not artificial constraints.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Captain & Vice-Captain Selection</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border-2 border-primary rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                            C
                          </div>
                          <h4 className="font-bold">Captain</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Earns <strong className="text-foreground">2x points</strong></p>
                        <p className="text-xs text-muted-foreground">
                          Choose your best performer. Captain's points are doubled in final scoring.
                        </p>
                      </div>

                      <div className="border-2 border-blue-500 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                            VC
                          </div>
                          <h4 className="font-bold">Vice-Captain</h4>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Earns <strong className="text-foreground">1.5x points</strong></p>
                        <p className="text-xs text-muted-foreground">
                          Your second-best choice. Vice-Captain's points are multiplied by 1.5.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Strategy Tip:</strong> Captain and Vice-Captain selection is crucial. 
                        Choose players likely to perform well based on form, pitch conditions, and opponent strength.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4: Track Results */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-purple-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h2 className="text-3xl font-bold">Track Your Performance</h2>
                <p className="text-muted-foreground">See results and learn from your choices</p>
              </div>
            </div>

            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Scoring System:</h3>
                    <div className="space-y-3">
                      <div className="border rounded-lg p-3">
                        <h4 className="font-semibold text-sm mb-2">Batting Points</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Run scored: 1 point per run</li>
                          <li>• Boundary (4): 1 bonus point</li>
                          <li>• Six (6): 2 bonus points</li>
                          <li>• Half-century (50): 8 bonus points</li>
                          <li>• Century (100): 16 bonus points</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-3">
                        <h4 className="font-semibold text-sm mb-2">Bowling Points</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Wicket: 25 points</li>
                          <li>• 3 wickets: 8 bonus points</li>
                          <li>• 4 wickets: 16 bonus points</li>
                          <li>• 5 wickets: 32 bonus points</li>
                          <li>• Maiden over: 12 points</li>
                        </ul>
                      </div>

                      <div className="border rounded-lg p-3">
                        <h4 className="font-semibold text-sm mb-2">Fielding Points</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Catch: 8 points</li>
                          <li>• Stumping/Run-out: 12 points</li>
                          <li>• 3 catches: 4 bonus points</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-3">Leaderboard:</h3>
                    <p className="text-muted-foreground mb-4">
                      After the match, see where you rank among all participants. The leaderboard shows:
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Your total points',
                        'Your rank position',
                        'Top performers',
                        'Captain/VC points breakdown',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                    <p className="text-sm font-semibold mb-2">Remember: No Prizes</p>
                    <p className="text-sm text-muted-foreground">
                      REIKI ENERGY is educational only. There are no cash prizes or rewards. 
                      The leaderboard is purely for learning and tracking your improvement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Tips */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Tips for Success</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Study Player Form',
                  desc: 'Check recent performance, averages, and statistics before selecting players.',
                  icon: TrendingUp,
                },
                {
                  title: 'Consider Pitch Conditions',
                  desc: 'Batting-friendly or bowling-friendly? Choose players accordingly.',
                  icon: Target,
                },
                {
                  title: 'Balance Your Team',
                  desc: 'Don\'t overload one category. Maintain good balance across roles.',
                  icon: Shield,
                },
                {
                  title: 'Captain Selection Matters',
                  desc: 'Captain earns 2x points. Choose wisely based on match-up and form.',
                  icon: Star,
                },
              ].map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <tip.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{tip.title}</h3>
                        <p className="text-sm text-muted-foreground">{tip.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join REIKI ENERGY and master fantasy cricket without any financial pressure
          </p>
          {!isAuthenticated && (
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Create Free Account
              </Button>
            </Link>
          )}
        </div>
      </section>

      
    </div>
  );
}
