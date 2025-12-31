import React from "react";
import { Link } from "wouter";
import { useAuth } from "@/contexts/AuthContext";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, Users, Target, TrendingUp, Zap, Shield, 
  CheckCircle2, ArrowRight, Play, Star, Award,
  Activity, BarChart3, Clock, MapPin, ChevronLeft, ChevronRight
} from "lucide-react";

export default function NewHome() {
  const { user } = useAuth();
  const { data: matches, isLoading } = trpc.cricket.getCurrentMatches.useQuery();
  
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const carouselImages = [
    '/cricket-stadium-1.webp',
    '/cricket-stadium-2.webp',
    '/cricket-action-1.webp',
    '/cricket-action-2.webp',
  ];

  // Auto-play carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section - Full Height */}
      <section className="section-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-semibold">
                  <Shield className="w-4 h-4 mr-2" />
                  100% Free to Play
                </Badge>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 px-4 py-2 text-sm font-semibold">
                  <Trophy className="w-4 h-4 mr-2" />
                  Educational Platform
                </Badge>
                <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                  18+ Only
                </Badge>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Master Your{" "}
                  <span className="gradient-text">
                    Fantasy Cricket
                  </span>{" "}
                  Skills
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl">
                  Learn fantasy cricket strategies without spending a rupee. Build teams, join contests, and compete with thousands of players.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">No Real Money</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Pure skill-based learning</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Real Cricket Data</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Live scores & updates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Fair Play Certified</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Transparent scoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Legal & Compliant</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">Age & state verified</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {user ? (
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto" asChild>
                    <Link href="/dashboard">
                      Go to Dashboard
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                ) : (
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto" asChild>
                    <Link href="/register">
                      Start Learning Free
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                )}

              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 group">
                {/* Carousel Images */}
                <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
                  {carouselImages.map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`Cricket ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Carousel Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Carousel Indicators */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-primary w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <Card className="glass border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-muted-foreground">Live Matches</div>
                          <div className="text-2xl font-bold">{matches?.length || 0}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-accent rounded-full pulse-live" />
                          <span className="text-sm font-semibold text-accent">LIVE</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section className="section bg-gradient-to-br from-accent/5 to-background">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Live Matches</h2>
              <p className="text-muted-foreground text-lg">Join contests for ongoing matches</p>
            </div>
            <Link href="/matches">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="animate-pulse">
                  <CardContent className="p-6">
                    <div className="h-24 bg-muted rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : matches && matches.filter((m: any) => m.matchStarted && !m.matchEnded).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.filter((m: any) => m.matchStarted && !m.matchEnded).slice(0, 3).map((match: any) => {
                const teamInfo = typeof match.teamInfo === 'string' ? JSON.parse(match.teamInfo) : match.teamInfo;
                const team1 = teamInfo?.[0] || {};
                const team2 = teamInfo?.[1] || {};
                const scores = typeof match.score === 'string' ? JSON.parse(match.score) : match.score;
                const score1 = scores?.[0]?.r ? `${scores[0].r}/${scores[0].w} (${scores[0].o})` : '0/0';
                const score2 = scores?.[1]?.r ? `${scores[1].r}/${scores[1].w} (${scores[1].o})` : '0/0';
                
                return (
                  <Card key={match.id} className="hover:shadow-lg transition-all hover:scale-105 border-2 border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-accent/10 text-accent">
                          <Activity className="w-3 h-3 mr-1" />
                          LIVE
                        </Badge>
                        <Badge variant="outline">{match.matchType || 'T20'}</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center overflow-hidden">
                              {team1.img ? (
                                <img src={team1.img} alt={team1.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="font-bold text-primary text-xs">{team1.shortname || 'T1'}</span>
                              )}
                            </div>
                            <span className="font-semibold text-sm">{team1.name || 'Team 1'}</span>
                          </div>
                          <span className="text-lg font-bold">{score1}</span>
                        </div>
                        
                        <div className="flex items-center justify-center text-muted-foreground text-sm">
                          vs
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center overflow-hidden">
                              {team2.img ? (
                                <img src={team2.img} alt={team2.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="font-bold text-secondary text-xs">{team2.shortname || 'T2'}</span>
                              )}
                            </div>
                            <span className="font-semibold text-sm">{team2.name || 'Team 2'}</span>
                          </div>
                          <span className="text-lg font-bold">{score2}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{match.venue || 'Stadium'}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {match.contestCount || 0} contests
                        </div>
                      </div>

                      <Link href={`/matches/${match.id}`}>
                        <Button className="w-full mt-4" variant="outline">
                          View Details
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <Activity className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No live matches running</h3>
                <p className="text-muted-foreground">Check back soon for live cricket action!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section className="section bg-gradient-to-br from-primary/5 to-background">
        <div className="container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Upcoming Matches</h2>
              <p className="text-muted-foreground text-lg">Plan your fantasy teams in advance</p>
            </div>
            <Link href="/matches">
              <Button variant="outline" className="gap-2">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {matches && matches.filter((m: any) => !m.matchStarted).length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {matches.filter((m: any) => !m.matchStarted).slice(0, 4).map((match: any) => {
                const teamInfo = typeof match.teamInfo === 'string' ? JSON.parse(match.teamInfo) : match.teamInfo;
                const team1 = teamInfo?.[0] || {};
                const team2 = teamInfo?.[1] || {};
                const matchDate = new Date(match.dateTimeGMT);
                const now = new Date();
                const hoursUntil = Math.max(0, Math.round((matchDate.getTime() - now.getTime()) / (1000 * 60 * 60)));
                
                return (
                  <Card key={match.id} className="hover:shadow-lg transition-all hover:scale-105 border-2 border-primary/20">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className="bg-primary/10 text-primary">
                          <Clock className="w-3 h-3 mr-1" />
                          Upcoming
                        </Badge>
                        <Badge variant="outline">{match.matchType || 'T20'}</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            {team1.img ? (
                              <img src={team1.img} alt={team1.name} className="w-8 h-8 rounded-full object-cover" />
                            ) : (
                              <span className="font-bold text-primary text-xs">{team1.shortname || 'T1'}</span>
                            )}
                          </div>
                          <span className="font-semibold text-sm">{team1.name || 'Team 1'}</span>
                        </div>
                        
                        <div className="flex items-center justify-center text-muted-foreground text-sm">
                          vs
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                            {team2.img ? (
                              <img src={team2.img} alt={team2.name} className="w-8 h-8 rounded-full object-cover" />
                            ) : (
                              <span className="font-bold text-secondary text-xs">{team2.shortname || 'T2'}</span>
                            )}
                          </div>
                          <span className="font-semibold text-sm">{team2.name || 'Team 2'}</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t space-y-2 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{hoursUntil > 0 ? `Starts in ${hoursUntil}h` : 'Starting soon'}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate">{match.venue || 'Stadium'}</span>
                        </div>
                      </div>

                      <Link href={`/matches/${match.id}`}>
                        <Button className="w-full mt-4" size="sm">
                          Create Team
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="border-dashed">
              <CardContent className="p-12 text-center">
                <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No upcoming matches scheduled yet</h3>
                <p className="text-muted-foreground">Check back soon for new matches!</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              How <span className="gradient-text">REIKI ENERGY</span> Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Start your fantasy cricket journey in 4 simple steps. No payment required, just pure skill and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-black text-muted/10 group-hover:text-primary/20 transition-colors">
                    01
                  </div>
                </div>
                <CardTitle className="text-xl">Create Account</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Sign up for free with email. Verify your age (18+) and state. No credit card needed.
                </CardDescription>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </Card>

            <Card className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-secondary/10 group-hover:scale-110 transition-transform">
                    <Target className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-6xl font-black text-muted/10 group-hover:text-primary/20 transition-colors">
                    02
                  </div>
                </div>
                <CardTitle className="text-xl">Select Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Browse live and upcoming cricket matches. Choose from T20, ODI, and Test formats.
                </CardDescription>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </Card>

            <Card className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-accent/10 group-hover:scale-110 transition-transform">
                    <Trophy className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-6xl font-black text-muted/10 group-hover:text-primary/20 transition-colors">
                    03
                  </div>
                </div>
                <CardTitle className="text-xl">Build Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Select 11 players within credit budget. Choose captain (2x points) and vice-captain (1.5x points).
                </CardDescription>
              </CardContent>
              <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
            </Card>

            <Card className="relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-4 rounded-2xl bg-primary/10 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-6xl font-black text-muted/10 group-hover:text-primary/20 transition-colors">
                    04
                  </div>
                </div>
                <CardTitle className="text-xl">Join Contest</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Enter free contests and compete. Watch live scores and climb the leaderboard.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fantasy Points System Section */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge className="bg-secondary/10 text-secondary px-4 py-2">
              Scoring System
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Fantasy <span className="gradient-text">Points System</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Understand how players earn points in real-time based on their actual match performance.
            </p>
          </div>

          {/* Batting Points */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-primary/10">
                <Activity className="w-10 h-10 text-primary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Batting Points</h3>
                <p className="text-muted-foreground">Points earned for runs, boundaries, and strike rate</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { action: "Run Scored", points: "+1", detail: "Every run adds 1 point" },
                { action: "Boundary (4s)", points: "+1", detail: "Bonus point for boundary" },
                { action: "Six (6s)", points: "+2", detail: "Bonus points for six" },
                { action: "Half Century (50)", points: "+8", detail: "Milestone bonus" },
                { action: "Century (100)", points: "+16", detail: "Double century bonus" },
                { action: "Strike Rate > 170", points: "+6", detail: "T20: Aggressive batting" },
                { action: "Strike Rate 150-170", points: "+4", detail: "T20: Good strike rate" },
                { action: "Strike Rate 130-150", points: "+2", detail: "T20: Decent strike rate" },
                { action: "Strike Rate < 70", points: "-2", detail: "T20: Slow batting penalty" },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-primary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{item.action}</h4>
                      <Badge className="bg-accent/10 text-accent text-lg font-bold px-3 py-1">
                        {item.points}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bowling Points */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-secondary/10">
                <Zap className="w-10 h-10 text-secondary" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Bowling Points</h3>
                <p className="text-muted-foreground">Points for wickets, maidens, and economy rate</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { action: "Wicket", points: "+25", detail: "Every wicket taken" },
                { action: "LBW / Bowled", points: "+8", detail: "Bonus for clean wicket" },
                { action: "3 Wickets", points: "+4", detail: "Milestone bonus" },
                { action: "4 Wickets", points: "+8", detail: "Four-wicket haul" },
                { action: "5 Wickets", points: "+16", detail: "Five-wicket haul" },
                { action: "Maiden Over", points: "+12", detail: "No runs conceded" },
                { action: "Economy < 5", points: "+6", detail: "T20: Excellent economy" },
                { action: "Economy 5-6", points: "+4", detail: "T20: Good economy" },
                { action: "Economy > 10", points: "-2", detail: "T20: Expensive bowling" },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-secondary/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-lg">{item.action}</h4>
                      <Badge className="bg-secondary/10 text-secondary text-lg font-bold px-3 py-1">
                        {item.points}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Fielding Points */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-accent/10">
                <Target className="w-10 h-10 text-accent" />
              </div>
              <div>
                <h3 className="text-3xl font-bold">Fielding Points</h3>
                <p className="text-muted-foreground">Points for catches, run-outs, and stumpings</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { action: "Catch", points: "+8", detail: "Every catch taken" },
                { action: "3 Catches", points: "+4", detail: "Bonus for 3 catches" },
                { action: "Stumping", points: "+12", detail: "Wicket-keeper stumping" },
                { action: "Run Out (Direct)", points: "+12", detail: "Direct hit run-out" },
                { action: "Run Out (Assist)", points: "+6", detail: "Throw + stumping" },
              ].map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all hover:border-accent/50">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{item.action}</h4>
                      <Badge className="bg-primary/10 text-primary text-lg font-bold px-3 py-1">
                        {item.points}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Captain & Vice-Captain Section */}
      <section className="section bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary px-4 py-2">
                Multiplier Boost
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Captain & <span className="gradient-text">Vice-Captain</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Strategic selection of captain and vice-captain can double or triple your points. Choose wisely based on form, pitch conditions, and match-ups.
              </p>

              <div className="space-y-4">
                <Card className="border-2 border-primary/50 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-primary/20">
                        <Star className="w-12 h-12 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-1">Captain</h4>
                        <p className="text-muted-foreground mb-2">Your captain earns double points</p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-primary text-primary-foreground text-lg px-4 py-1">
                            2x Points
                          </Badge>
                          <span className="text-sm text-muted-foreground">Example: 50 pts → 100 pts</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-secondary/50 bg-secondary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-4 rounded-2xl bg-secondary/20">
                        <Award className="w-12 h-12 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold mb-1">Vice-Captain</h4>
                        <p className="text-muted-foreground mb-2">Your vice-captain earns 1.5x points</p>
                        <div className="flex items-center gap-2">
                          <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-1">
                            1.5x Points
                          </Badge>
                          <span className="text-sm text-muted-foreground">Example: 50 pts → 75 pts</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="p-6 rounded-2xl bg-accent/10 border-2 border-accent/20">
                <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-accent" />
                  Pro Tip
                </h4>
                <p className="text-muted-foreground">
                  Choose players in form as captain/vice-captain. Analyze recent performances, head-to-head records, and pitch conditions before making your selection.
                </p>
              </div>
            </div>

            <div className="relative">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle>Example Calculation</CardTitle>
                  <CardDescription>See how multipliers boost your score</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">Regular Player</span>
                      <Badge variant="outline">No Multiplier</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Scored 60 runs + 2 catches
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      68 points
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-primary/10 border-2 border-primary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">As Captain</span>
                      <Badge className="bg-primary text-primary-foreground">2x Multiplier</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Same performance × 2
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      136 points
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary/10 border-2 border-secondary/30">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold">As Vice-Captain</span>
                      <Badge className="bg-secondary text-secondary-foreground">1.5x Multiplier</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Same performance × 1.5
                    </div>
                    <div className="text-3xl font-bold text-secondary">
                      102 points
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-accent/10 border-2 border-accent/30">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Potential Gain</span>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">+68 pts</div>
                        <div className="text-xs text-muted-foreground">With captain choice</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      {matches && matches.length > 0 && (
        <section className="section relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />
          
          <div className="container relative">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge className="bg-accent/10 text-accent px-4 py-2">
                <Activity className="w-4 h-4 mr-2 inline" />
                Live Now
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Current <span className="gradient-text">Cricket Matches</span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Join ongoing contests or create your team for upcoming matches
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {matches.slice(0, 6).map((match: any) => (
                <Card key={match.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={match.status === 'live' ? 'bg-accent text-accent-foreground' : 'bg-muted text-muted-foreground'}>
                        {match.status === 'live' && <div className="w-2 h-2 bg-accent-foreground rounded-full mr-2 pulse-live" />}
                        {match.status === 'live' ? 'LIVE' : 'UPCOMING'}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{match.matchType}</span>
                    </div>
                    <CardTitle className="text-lg">{match.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{match.teamA}</span>
                        <span className="text-lg font-bold">{match.scoreA || '-'}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold">{match.teamB}</span>
                        <span className="text-lg font-bold">{match.scoreB || '-'}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{match.venue}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{new Date(match.dateTimeGMT).toLocaleString()}</span>
                    </div>

                    {user ? (
                      <Link href={`/create-team/${match.id}`}>
                        <Button className="w-full bg-primary hover:bg-primary/90 group-hover:scale-105 transition-transform">
                          Create Team
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Link href="/register">
                        <Button className="w-full bg-secondary hover:bg-secondary/90 group-hover:scale-105 transition-transform">
                          Register to Play
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {matches.length > 6 && (
              <div className="text-center mt-12">
                <Link href="/matches">
                  <Button size="lg" variant="outline" className="border-2 px-8 py-6 text-lg rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                    View All Matches
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Final CTA Section - Redesigned */}
      <section className="section relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white rounded-full" />
          <div className="absolute top-20 right-20 w-16 h-16 border-4 border-white rounded-lg rotate-45" />
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border-4 border-white rounded-full" />
          <div className="absolute bottom-10 right-1/4 w-12 h-12 border-4 border-white rounded-lg rotate-12" />
        </div>

        <div className="container relative text-center">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
              <Trophy className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Join the Fantasy Cricket Revolution</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              Ready to Master{" "}
              <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Fantasy Cricket?
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of learners who are improving their fantasy cricket skills every day. No payment required, just pure strategy and fun.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              {user ? (
                <Link href="/dashboard">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                    Go to Dashboard
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 px-10 py-7 text-lg font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                      Start Learning Free
                      <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline" className="border-3 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-emerald-600 px-10 py-7 text-lg font-bold rounded-full transition-all">
                      Learn More
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Stats Cards */}
            <div className="grid sm:grid-cols-3 gap-6 pt-12">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-5xl font-black text-white mb-2">100%</div>
                <div className="text-lg text-white/90 font-semibold">Free Forever</div>
                <p className="text-sm text-white/70 mt-2">No hidden charges, ever</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-5xl font-black text-white mb-2">18+</div>
                <div className="text-lg text-white/90 font-semibold">Age Verified</div>
                <p className="text-sm text-white/70 mt-2">Safe & compliant platform</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                <div className="text-5xl font-black text-white mb-2">24/7</div>
                <div className="text-lg text-white/90 font-semibold">Support Available</div>
                <p className="text-sm text-white/70 mt-2">We're here to help anytime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
