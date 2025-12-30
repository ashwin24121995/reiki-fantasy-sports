/**
 * What We Do Page - REIKI ENERGY
 * Comprehensive explanation of platform features and functionality
 */

import { Trophy, Users, TrendingUp, Shield, Database, Zap, BookOpen, Lock, Globe, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function NewWhatWeDo() {
  return (
    <div className="min-h-screen flex flex-col">
      

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-500/10 to-primary/5">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">Platform Features</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What We Do
            </h1>
            <p className="text-xl text-muted-foreground">
              A complete educational fantasy cricket platform with real-time data, strategic gameplay, and zero financial risk.
            </p>
          </div>
        </div>
      </section>

      {/* Core Purpose */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Core Purpose</h2>
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  REIKI ENERGY provides a <strong className="text-foreground">free-to-play fantasy cricket platform</strong> where 
                  users can learn cricket strategy, player analysis, and team management without any financial pressure or risk.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We bridge the gap between casual cricket fans and strategic thinking by offering a safe environment to practice 
                  fantasy sports skills, understand player performance metrics, and improve cricket knowledge—all without spending a single rupee.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Database,
                title: 'Real Cricket Data',
                desc: 'Live match data from Cricket Data API. No mock or fake information. All matches, players, and scores are real and updated in real-time.',
                color: 'bg-blue-500',
              },
              {
                icon: Trophy,
                title: 'Fantasy Team Creation',
                desc: 'Select 11 players from real cricket matches. Choose captain and vice-captain. Follow strategic composition rules without budget constraints.',
                color: 'bg-green-500',
              },
              {
                icon: TrendingUp,
                title: 'Live Score Tracking',
                desc: 'Watch your team\'s performance in real-time during live matches. See points accumulate as players perform on the field.',
                color: 'bg-yellow-500',
              },
              {
                icon: Users,
                title: 'Leaderboard System',
                desc: 'Compare your performance with other users. Track your rank and see top performers. Learn from successful strategies.',
                color: 'bg-purple-500',
              },
              {
                icon: BookOpen,
                title: 'Educational Focus',
                desc: 'Learn player analysis, pitch conditions, team balance, and strategic thinking. Improve your cricket knowledge with every match.',
                color: 'bg-pink-500',
              },
              {
                icon: Shield,
                title: 'Safe & Compliant',
                desc: 'Age verification (18+), state restrictions, no real money, no gambling. Fully compliant with Indian regulations.',
                color: 'bg-red-500',
              },
            ].map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className={`h-16 w-16 rounded-full ${feature.color}/10 flex items-center justify-center mb-4`}>
                    <feature.icon className={`h-8 w-8 text-${feature.color.replace('bg-', '')}`} style={{color: `var(--${feature.color.replace('bg-', '')})`}} />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How Features Work */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How Our Features Work</h2>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    Real-Time Match Data Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We integrate directly with <strong className="text-foreground">Cricket Data API</strong> (paid subscription) 
                      to provide accurate, real-time cricket information:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Match Information</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Upcoming matches (today and future)</li>
                          <li>• Live matches with current scores</li>
                          <li>• Completed matches with final results</li>
                          <li>• Match type (T20, ODI, Test)</li>
                          <li>• Venue and timing details</li>
                        </ul>
                      </div>
                      <div className="border rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Player Data</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Complete squad lists</li>
                          <li>• Player roles (WK, BAT, AR, BOWL)</li>
                          <li>• Live performance statistics</li>
                          <li>• Fantasy points calculation</li>
                          <li>• Match-by-match updates</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <p className="text-sm">
                        <strong>Why This Matters:</strong> You're learning with real cricket data, not simulations. 
                        This prepares you for understanding actual match dynamics and player performance patterns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    Strategic Team Building System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Our team creation system teaches strategic thinking and player analysis:
                    </p>
                    <div className="space-y-3">
                      <div className="border-l-4 border-primary pl-4">
                        <h4 className="font-semibold mb-1">Composition Rules</h4>
                        <p className="text-sm text-muted-foreground">
                          Learn to balance your team across 4 player categories (WK, BAT, AR, BOWL) while following 
                          minimum and maximum limits. Understand why team balance matters in cricket.
                        </p>
                      </div>
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold mb-1">No Budget Constraints</h4>
                        <p className="text-sm text-muted-foreground">
                          Unlike paid platforms, we don't use artificial budget systems. Select players based purely on 
                          skill and strategy, not arbitrary credit limits. This focuses learning on cricket knowledge, not math.
                        </p>
                      </div>
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold mb-1">Captain & Vice-Captain Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Choose your captain (2x points) and vice-captain (1.5x points) wisely. Learn to identify 
                          match-winners based on form, conditions, and opponent strength.
                        </p>
                      </div>
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold mb-1">Team Diversity Rule</h4>
                        <p className="text-sm text-muted-foreground">
                          Maximum 7 players from one team ensures you analyze both sides. This teaches balanced 
                          assessment and prevents one-sided thinking.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    Performance Tracking & Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Track your team's performance and learn from results:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4 text-center">
                        <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                        <h4 className="font-semibold mb-2">Live Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Watch points accumulate in real-time as your players perform during live matches
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-500" />
                        <h4 className="font-semibold mb-2">Leaderboard Rank</h4>
                        <p className="text-sm text-muted-foreground">
                          See where you stand among all participants and learn from top performers
                        </p>
                      </div>
                      <div className="border rounded-lg p-4 text-center">
                        <BookOpen className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                        <h4 className="font-semibold mb-2">Team History</h4>
                        <p className="text-sm text-muted-foreground">
                          Review past teams and decisions to understand what worked and what didn't
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 4 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
                      4
                    </div>
                    Educational Learning Environment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Everything is designed to maximize learning, not profit:
                    </p>
                    <div className="space-y-3">
                      {[
                        {
                          title: 'No Financial Pressure',
                          desc: 'Learn without worrying about losing money. Make mistakes, experiment, and improve your strategy freely.',
                        },
                        {
                          title: 'Scoring System Transparency',
                          desc: 'Complete breakdown of how points are calculated. Understand why certain players score more than others.',
                        },
                        {
                          title: 'Strategy Tips & Guides',
                          desc: 'Built-in tips for player selection, pitch analysis, and team balance. Learn best practices from the platform itself.',
                        },
                        {
                          title: 'Performance Feedback',
                          desc: 'See exactly how your captain and vice-captain choices impacted your total score. Learn from every match.',
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 border rounded-lg p-4">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Feature 5 */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
                      5
                    </div>
                    Safety & Compliance Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      We take user safety and legal compliance seriously:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border rounded-lg p-4">
                        <Lock className="h-6 w-6 text-red-500 mb-2" />
                        <h4 className="font-semibold mb-2">Age Verification</h4>
                        <p className="text-sm text-muted-foreground">
                          Mandatory 18+ age verification during registration. Date of birth is validated and stored securely.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <Shield className="h-6 w-6 text-blue-500 mb-2" />
                        <h4 className="font-semibold mb-2">State Restrictions</h4>
                        <p className="text-sm text-muted-foreground">
                          Users from 6 restricted states (AP, Assam, Odisha, Telangana, Nagaland, Sikkim) cannot register.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <Globe className="h-6 w-6 text-green-500 mb-2" />
                        <h4 className="font-semibold mb-2">No Real Money</h4>
                        <p className="text-sm text-muted-foreground">
                          Zero financial transactions. No entry fees, no prizes, no hidden costs. Purely educational.
                        </p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <BookOpen className="h-6 w-6 text-purple-500 mb-2" />
                        <h4 className="font-semibold mb-2">Skill-Based Platform</h4>
                        <p className="text-sm text-muted-foreground">
                          Classified as educational skill-based platform, not gambling. Compliant with Indian gaming laws.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What We Don't Do</h2>
            <Card className="border-2 border-red-500/20">
              <CardContent className="pt-8">
                <p className="text-muted-foreground mb-6">
                  To be completely transparent, here's what REIKI ENERGY does <strong className="text-foreground">NOT</strong> offer:
                </p>
                <div className="space-y-3">
                  {[
                    'No cash prizes or monetary rewards',
                    'No entry fees or paid contests',
                    'No real money transactions of any kind',
                    'No data selling or third-party marketing',
                    'No gambling mechanics or addictive features',
                    'No hidden costs or surprise charges',
                    'No artificial budget/credit systems',
                    'No pressure to upgrade or pay',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="h-6 w-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-500 font-bold text-sm">✗</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Our Commitment:</strong> REIKI ENERGY will remain 100% free forever. 
                    This is not a temporary promotional offer—it's our permanent business model backed by investors who believe 
                    in sports education.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Summary */}
      <section className="py-20">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Education Through Cricket
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              REIKI ENERGY provides everything you need to learn fantasy cricket—real data, strategic gameplay, 
              performance tracking, and a safe environment—without any financial risk or pressure.
            </p>
            <div className="flex items-center justify-center gap-4">
              <img src="/18plus-badge.png" alt="18+" className="h-16 w-16 object-contain" />
              <img src="/fair-play-badge.png" alt="Fair Play" className="h-16 w-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
