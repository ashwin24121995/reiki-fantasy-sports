/**
 * Comprehensive About Us Page - REIKI ENERGY
 * Complete transparency about company, mission, operations, and values
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowLeft, Target, Heart, Shield, Users, BookOpen, Lock, 
  TrendingUp, Award, CheckCircle, AlertCircle, Lightbulb,
  Globe, Code, Database, Zap, FileText, Scale
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
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
      <section className="py-20 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              About REIKI ENERGY
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              India's First 100% Free Fantasy Cricket Platform Built for Education, Skill Development, and Pure Love of the Game
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm font-semibold">🎓 Educational Platform</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm font-semibold">💯 100% Free Forever</p>
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-sm font-semibold">🏏 Real Cricket Data</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              Jump to: <a href="#story" className="text-primary hover:underline">Our Story</a> • 
              <a href="#how-it-works" className="text-primary hover:underline ml-2">How It Works</a> • 
              <a href="#why-free" className="text-primary hover:underline ml-2">Why Free</a> • 
              <a href="#values" className="text-primary hover:underline ml-2">Values</a> • 
              <a href="#legal" className="text-primary hover:underline ml-2">Legal</a> • 
              <a href="#technology" className="text-primary hover:underline ml-2">Technology</a> • 
              <a href="#team" className="text-primary hover:underline ml-2">Team</a>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-20">
          
          {/* Our Story */}
          <section id="story" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Story</h2>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                REIKI ENERGY GLOBAL PRIVATE LIMITED was born from a simple observation: millions of cricket fans in India wanted to play fantasy cricket, but the existing platforms created financial barriers that excluded many passionate enthusiasts. We asked ourselves—<strong>why should fantasy sports require spending money?</strong>
              </p>
              
              <p className="text-lg leading-relaxed">
                Founded in March 2024 and headquartered in Karnal, Haryana, we set out to build something different. Not another pay-to-play platform, but India's first truly free fantasy cricket platform where anyone with a love for cricket could practice and master the art of fantasy sports—<strong>completely free, forever</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                Our founders recognized that fantasy cricket is much more than a game of chance. It's a sophisticated skill that combines statistical analysis, strategic thinking, player psychology, match condition assessment, and real-time decision-making. These are valuable cognitive skills that deserve to be taught and practiced in an accessible environment.
              </p>

              <Card className="my-8 border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold mb-2">Our Core Belief</p>
                  <p className="text-muted-foreground italic">
                    "Fantasy cricket should be about sharpening your mind, not emptying your wallet. Every cricket fan deserves the chance to compete and improve—regardless of their financial situation."
                  </p>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                Today, REIKI ENERGY serves thousands of users across India, providing a safe, transparent, and completely free platform for fantasy cricket. We're backed by investors who share our vision of making fantasy sports accessible to all.
              </p>
            </div>
          </section>

          {/* How It Works - Detailed */}
          <section id="how-it-works" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">How Our Platform Works</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Understanding our platform is simple. Here's a complete walkthrough of how REIKI ENERGY operates from registration to competition:
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Free Registration & Age Verification",
                  description: "Create your account using email or phone number. We verify that you're 18+ years old (legal requirement in India) and confirm your state of residence. No payment information is ever requested or stored.",
                  icon: Users
                },
                {
                  step: "2",
                  title: "Browse Real Cricket Matches",
                  description: "Access live and upcoming matches from international cricket (T20, ODI, Test) powered by real-time Cricket Data API. See match schedules, team lineups, venue information, and historical statistics.",
                  icon: Globe
                },
                {
                  step: "3",
                  title: "Build Your Fantasy Team",
                  description: "Select 11 players from both teams within a 100-credit budget. Each player has a credit value based on their recent performance. Choose 1-4 wicketkeepers, 3-6 batsmen, 1-4 all-rounders, and 3-6 bowlers. Designate a captain (2x points) and vice-captain (1.5x points).",
                  icon: Target
                },
                {
                  step: "4",
                  title: "Join Free Contests",
                  description: "Enter public contests with other users—no entry fees, ever. Compete against thousands of players to test your team selection and strategy. Create private contests to challenge friends.",
                  icon: Award
                },
                {
                  step: "5",
                  title: "Watch Live Scoring",
                  description: "As the match progresses, your players earn points based on their real performance (runs, wickets, catches, etc.). Watch your team's score update in real-time and see your rank on the leaderboard.",
                  icon: TrendingUp
                },
                {
                  step: "6",
                  title: "Learn & Improve",
                  description: "After each match, analyze what worked and what didn't. Study top-performing teams, understand winning strategies, and refine your approach for future contests. Build your fantasy cricket IQ over time.",
                  icon: Lightbulb
                }
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-3xl font-bold text-primary">{item.step}</span>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why 100% Free - Crystal Clear Explanation */}
          <section id="why-free" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Why Is It 100% Free?</h2>
            </div>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20 border-yellow-200 dark:border-yellow-800 mb-8">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold mb-4">The Most Common Question We Get:</p>
                <p className="text-muted-foreground text-lg italic">
                  "If there's no money involved, how does REIKI ENERGY make money? What's the catch?"
                </p>
              </CardContent>
            </Card>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                <strong>The honest answer: We're a free-to-play platform funded by investors who believe in making fantasy sports accessible.</strong> Here's the complete transparency you deserve:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      What We DO
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>✅ Provide 100% free fantasy cricket platform</p>
                    <p>✅ Cover all operational costs through investor funding</p>
                    <p>✅ Focus on skill-based gaming</p>
                    <p>✅ Build a sustainable gaming ecosystem</p>
                    <p>✅ Explore ethical revenue models (future): non-intrusive ads, premium analytics tools, cricket merchandise partnerships</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      What We DON'T Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>❌ Never ask for deposits or payments</p>
                    <p>❌ No withdrawals or cash prizes</p>
                    <p>❌ No hidden charges or fees</p>
                    <p>❌ No selling of user data</p>
                    <p>❌ No gambling or betting mechanics</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Our business model is simple: we're building a large, engaged community of cricket enthusiasts. In the future, we may introduce <strong>optional</strong> premium features like advanced analytics tools, detailed player insights, or cricket merchandise partnerships—but the core platform will <strong>always remain 100% free</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                We're playing the long game, building trust and value for our users before exploring sustainable revenue streams. Our platform prioritizes user experience over profit.
              </p>
            </div>
          </section>

          {/* Our Values & Principles */}
          <section id="values" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Values & Principles</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              These aren't just words on a page—they're the foundation of every decision we make:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: "Skill-Based Gaming",
                  description: "Every feature we build prioritizes strategic gameplay and skill development. We measure success by user engagement and satisfaction, not by revenue metrics."
                },
                {
                  icon: Shield,
                  title: "Complete Transparency",
                  description: "No hidden algorithms, no secret scoring systems, no unclear rules. Everything is documented, explained, and accessible. You deserve to know exactly how the platform works."
                },
                {
                  icon: CheckCircle,
                  title: "Fair Play Always",
                  description: "Everyone plays by the same rules. No pay-to-win mechanics, no advantages for premium users (because there are none), no insider benefits. Pure skill-based competition."
                },
                {
                  icon: Lock,
                  title: "User Safety & Privacy",
                  description: "Your data is protected with industry-standard encryption. We never sell user information. Age verification and state compliance are strictly enforced."
                },
                {
                  icon: Users,
                  title: "Community-Driven",
                  description: "We listen to our users. Feature requests, feedback, and suggestions shape our roadmap. This platform exists for you, built with your input."
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Improvement",
                  description: "We're constantly learning and evolving. Regular updates, new features, better user experience—we're committed to getting better every day."
                }
              ].map((value, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal & Compliance - Complete Transparency */}
          <section id="legal" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Legal & Compliance</h2>
            </div>

            <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800 mb-8">
              <CardContent className="pt-6">
                <p className="text-lg font-semibold mb-2">Important Legal Disclosure</p>
                <p className="text-muted-foreground leading-relaxed">
                  REIKI ENERGY operates as a <strong>skill-based fantasy sports platform</strong>, not a gambling or betting service. We comply with all applicable Indian laws and regulations.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Regulatory Compliance</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">🔞 Age Verification (18+ Only)</h4>
                      <p className="text-muted-foreground">
                        Strict enforcement of 18+ age requirement through document verification. Minors are not permitted to register or use the platform under any circumstances.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">📍 State Compliance</h4>
                      <p className="text-muted-foreground">
                        Platform availability varies by state. We comply with state-specific regulations regarding skill-based gaming. Currently NOT available in Andhra Pradesh, Assam, Odisha, Telangana, Nagaland, and Sikkim.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">🎮 Free-to-Play Gaming</h4>
                      <p className="text-muted-foreground">
                        Classified as a skill-based fantasy sports platform. No real money transactions, deposits, or withdrawals. Purely for practice and competition.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-6">
                      <h4 className="font-semibold mb-2">🔒 Data Protection</h4>
                      <p className="text-muted-foreground">
                        Full compliance with India's data protection regulations. User data is encrypted, securely stored, and never sold to third parties. Read our <Link href="/privacy"><a className="text-primary hover:underline">Privacy Policy</a></Link> for complete details.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Company Registration Details</h3>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <p className="font-semibold mb-2">Legal Entity Name</p>
                    <p className="text-muted-foreground">REIKI ENERGY GLOBAL PRIVATE LIMITED</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Corporate Identity Number (CIN)</p>
                    <p className="text-muted-foreground">U86909HR2024PTC119844</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Permanent Account Number (PAN)</p>
                    <p className="text-muted-foreground">AANCR4715K</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Date of Incorporation</p>
                    <p className="text-muted-foreground">March 14, 2024</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Company Status</p>
                    <p className="text-muted-foreground">Active & Compliant</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Registered with</p>
                    <p className="text-muted-foreground">Ministry of Corporate Affairs (MCA), Government of India</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold mb-2">Registered Office Address</p>
                    <p className="text-muted-foreground">
                      H NO41, RESIDENCIAL COLONY, BAZIDA JATTAN<br />
                      Karnal, Haryana - 132001, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technology & Security */}
          <section id="technology" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Technology & Security</h2>
            </div>

            <p className="text-lg text-muted-foreground mb-8">
              Behind the scenes, REIKI ENERGY is powered by modern, secure technology infrastructure:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Real-Time Cricket Data",
                  description: "Powered by Cricket Data API for accurate live scores, player statistics, and match updates. Data refreshes every few seconds during live matches."
                },
                {
                  icon: Lock,
                  title: "Bank-Grade Security",
                  description: "Industry-standard encryption (TLS/SSL), secure authentication, and protected data storage. Your information is safe with us."
                },
                {
                  icon: Zap,
                  title: "Fast & Reliable",
                  description: "Built on modern cloud infrastructure for 99.9% uptime. Handles thousands of concurrent users during major matches without lag."
                },
                {
                  icon: Shield,
                  title: "Fair Scoring System",
                  description: "Transparent, automated point calculation based on official match data. No manual intervention or bias—pure algorithmic fairness."
                },
                {
                  icon: Code,
                  title: "Open Algorithms",
                  description: "Our scoring formulas are publicly documented. You can verify exactly how points are calculated for every player action."
                },
                {
                  icon: FileText,
                  title: "Regular Backups",
                  description: "Your teams, contest history, and account data are backed up multiple times daily. Data loss is virtually impossible."
                }
              ].map((tech, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <tech.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{tech.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Team & Leadership */}
          <section id="team" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Team</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground mb-12">
              <p className="text-lg leading-relaxed">
                REIKI ENERGY is built by a passionate team of cricket enthusiasts, software engineers, data scientists, and educators who share a common vision: making fantasy cricket accessible to everyone.
              </p>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
                <CardContent className="pt-6">
                  <p className="text-lg font-semibold mb-4">Our Diverse Expertise:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold">🏏 Cricket Analysts</p>
                      <p className="text-sm text-muted-foreground">Former players and statisticians who understand the game inside-out</p>
                    </div>
                    <div>
                      <p className="font-semibold">💻 Software Engineers</p>
                      <p className="text-sm text-muted-foreground">Building scalable, secure, and fast platform infrastructure</p>
                    </div>
                    <div>
                      <p className="font-semibold">📊 Data Scientists</p>
                      <p className="text-sm text-muted-foreground">Creating fair scoring algorithms and predictive analytics</p>
                    </div>
                    <div>
                      <p className="font-semibold">🎮 Game Designers</p>
                      <p className="text-sm text-muted-foreground">Designing gameplay features and user experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="text-lg leading-relaxed">
                We're headquartered in Karnal, Haryana, but our team works remotely across India. We're always looking for talented individuals who share our mission—if you're interested in joining us, reach out through our <Link href="/contact"><a className="text-primary hover:underline">Contact page</a></Link>.
              </p>
            </div>
          </section>

          {/* Future Vision */}
          <section className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">Our Vision for the Future</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We're just getting started. Here's what we're building toward:
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardHeader>
                    <CardTitle>Short-Term (2025)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Expand to all cricket formats (domestic leagues, women's cricket)</p>
                    <p>• Launch mobile apps (iOS & Android)</p>
                    <p>• Add advanced analytics and player insights</p>
                    <p>• Build community features (chat, forums, team sharing)</p>
                    <p>• Introduce strategy guides and gameplay tips</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <CardTitle>Long-Term (2026+)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Expand to other sports (football, kabaddi, basketball)</p>
                    <p>• Partner with cricket academies for talent scouting</p>
                    <p>• Create achievement and ranking systems</p>
                    <p>• Build AI-powered team suggestion tools</p>
                    <p>• Establish REIKI ENERGY as India's #1 free fantasy sports platform</p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-lg leading-relaxed">
                Our ultimate goal? To become the go-to platform where every cricket fan in India learns, practices, and masters fantasy cricket—without ever worrying about money.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of cricket enthusiasts competing on India's most transparent fantasy cricket platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                  Create Free Account →
                </Button>
              </Link>
              <Link href="/faq">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
                  Read FAQ
                </Button>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center py-8">
            <h3 className="text-2xl font-semibold mb-4">Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're here to help. Reach out anytime—we typically respond within 24 hours.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </section>

        </div>
      </div>
    </div>
  );
}
