/**
 * Homepage - REIKI ENERGY
 * Redesigned with modern design, animations, gradients, and clear messaging
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Users, Shield, TrendingUp, BookOpen, Trophy, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { trpc } from '@/lib/trpc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewHome() {
  const { isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());

  // Fetch real matches from Cricket API
  const { data: matches, isLoading: matchesLoading } = trpc.cricket.getCurrentMatches.useQuery();

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = parseInt(entry.target.getAttribute('data-section') || '0');
            setVisibleSections(prev => new Set(prev).add(sectionId));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getSectionClass = (id: number) =>
    `transition-all duration-700 ${
      visibleSections.has(id)
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'
    }`;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Section 1: Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center overflow-hidden"
        data-section="1"
      >
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-primary/10 animate-gradient-xy" />
        
        {/* Cricket Stadium Image Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/hero-cricket.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Content */}
        <div className={`container relative z-10 px-4 text-center ${getSectionClass(1)}`}>
          {/* Badges */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/18plus-badge.png" alt="18+" className="h-16 w-16 object-contain" />
            <img src="/fair-play-badge.png" alt="Fair Play" className="h-16 w-16 object-contain" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t('home.hero.title')}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!isAuthenticated ? (
              <>
                <Link href="/register">
                  <Button size="lg" className="text-lg px-8">
                    {t('home.hero.cta')} <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {t('home.hero.learnMore')}
                  </Button>
                </Link>
              </>
            ) : (
              <Link href="/matches">
                <Button size="lg" className="text-lg px-8">
                  Browse Matches <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: Trust Indicators */}
      <section className="py-16 bg-muted/30" data-section="2">
        <div className={`container px-4 ${getSectionClass(2)}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">100% Free Forever</h3>
                <p className="text-muted-foreground">
                  No hidden costs. No entry fees. No tricks. Completely free to play, learn, and compete.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Educational Only</h3>
                <p className="text-muted-foreground">
                  Learn fantasy cricket skills without financial risk. Knowledge is the only reward.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Legally Compliant</h3>
                <p className="text-muted-foreground">
                  18+ verified. State restrictions enforced. Fully transparent and legal operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: What is REIKI ENERGY? */}
      <section className="py-20" data-section="3">
        <div className={`container px-4 ${getSectionClass(3)}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What is REIKI ENERGY?
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">REIKI ENERGY</strong> is a free-to-play fantasy cricket platform designed for education and skill development.
                </p>
                <p>
                  We help cricket fans learn fantasy cricket strategies without any financial pressure or risk.
                </p>
                <p>
                  Backed by investors who believe in sports education, we provide a safe environment where learning is the only goal.
                </p>
                <p className="text-primary font-semibold">
                  No prizes. No money. Just pure learning and fun.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/dashboard-illustration.png"
                alt="REIKI ENERGY Platform"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Who Is This For? */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background" data-section="4">
        <div className={`container px-4 ${getSectionClass(4)}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who Is This For?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: 'Cricket Fans',
                desc: 'Learn fantasy cricket basics and understand how professional platforms work',
              },
              {
                icon: BookOpen,
                title: 'Beginners',
                desc: 'Practice team building and strategy without any financial pressure',
              },
              {
                icon: TrendingUp,
                title: 'Students',
                desc: 'Understand sports analytics, statistics, and strategic thinking',
              },
              {
                icon: Trophy,
                title: 'Enthusiasts',
                desc: 'Improve your fantasy cricket skills and test different strategies',
              },
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="h-14 w-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How It Works (Quick Overview) */}
      <section className="py-20" data-section="5">
        <div className={`container px-4 ${getSectionClass(5)}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How It Works
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Start learning fantasy cricket in 4 simple steps
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Register',
                desc: 'Create your free account in 2 minutes. No payment required.',
                icon: Users,
              },
              {
                step: '2',
                title: 'Pick a Match',
                desc: 'Choose from real upcoming cricket matches from our API.',
                icon: Trophy,
              },
              {
                step: '3',
                title: 'Build Your Team',
                desc: 'Select 11 players, set captain and vice-captain strategically.',
                icon: Shield,
              },
              {
                step: '4',
                title: 'Track & Learn',
                desc: 'See your results on the leaderboard and improve your skills.',
                icon: TrendingUp,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-4">
                    <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-3xl font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/how-to-play">
              <Button variant="outline" size="lg">
                See Detailed Guide <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Why We're Different */}
      <section className="py-20 bg-muted/30" data-section="6">
        <div className={`container px-4 ${getSectionClass(6)}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why We're Different
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Entry Fees', us: 'Free', others: '₹25 - ₹10,000' },
                { label: 'Prizes', us: 'None (Educational)', others: 'Cash Prizes' },
                { label: 'Purpose', us: 'Learning & Skill Development', others: 'Winning Money' },
                { label: 'Age Verification', us: '18+ Strictly Enforced', others: 'Often Unclear' },
                { label: 'State Compliance', us: 'Fully Compliant', others: 'Gray Areas' },
                { label: 'Transparency', us: '100% Transparent', others: 'Hidden Terms' },
              ].map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{item.label}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">
                          <strong>REIKI ENERGY:</strong> {item.us}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-5 w-5 flex-shrink-0 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs">?</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          <strong>Others:</strong> {item.others}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Live Matches (Real Cricket API Data) */}
      <section className="py-20" data-section="7">
        <div className={`container px-4 ${getSectionClass(7)}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Current Cricket Matches
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Real-time data from Cricket Data API - No mock data
          </p>

          {matchesLoading ? (
            <div className="text-center py-12">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent" />
              <p className="mt-4 text-muted-foreground">Loading matches...</p>
            </div>
          ) : matches && matches.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.slice(0, 6).map((match: any) => (
                <Card key={match.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant={match.matchStatus === 'Live' ? 'default' : 'secondary'}>
                        {match.matchStatus === 'Live' && (
                          <span className="animate-pulse mr-1">●</span>
                        )}
                        {match.matchStatus}
                      </Badge>
                      <Badge variant="outline">{match.matchType}</Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{match.team1}</span>
                        <span className="text-sm text-muted-foreground">{match.team1Score || 'TBD'}</span>
                      </div>
                      <div className="text-center text-xs text-muted-foreground">vs</div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{match.team2}</span>
                        <span className="text-sm text-muted-foreground">{match.team2Score || 'TBD'}</span>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {match.venue}
                      </div>
                    </div>

                    {isAuthenticated ? (
                      <Link href={`/create-team/${match.id}`}>
                        <Button className="w-full" size="sm">
                          Create Team
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/register">
                        <Button className="w-full" size="sm" variant="outline">
                          Register to Play
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No matches available at the moment. Check back soon!</p>
            </div>
          )}

          <div className="text-center mt-8">
            <Link href="/matches">
              <Button variant="outline" size="lg">
                View All Matches <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section
        className="py-20 bg-gradient-to-r from-primary/10 via-blue-500/10 to-primary/10"
        data-section="8"
      >
        <div className={`container px-4 text-center ${getSectionClass(8)}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn Fantasy Cricket?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands learning cricket strategy - completely free, no financial pressure
          </p>
          {!isAuthenticated && (
            <Link href="/register">
              <Button size="lg" className="text-lg px-8">
                Create Free Account <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          )}
          <p className="text-xs text-muted-foreground mt-4">
            18+ only. Not available in AP, Assam, Odisha, Telangana, Nagaland, Sikkim
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
