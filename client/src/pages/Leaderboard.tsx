/**
 * Leaderboard Page - REIKI ENERGY
 * Display fantasy cricket rankings and scores
 */

import { useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { trpc } from '@/lib/trpc';
import { Trophy, Medal, Award, TrendingUp, ArrowLeft, Crown } from 'lucide-react';

export default function Leaderboard() {
  const [selectedContest, setSelectedContest] = useState<number | null>(null);

  // Fetch leaderboard data
  const { data: leaderboard, isLoading } = trpc.contests.leaderboard.useQuery(
    { contestId: selectedContest! },
    { enabled: !!selectedContest }
  );

  const { data: matches } = trpc.cricket.getCurrentMatches.useQuery();

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="h-5 w-5 text-gray-400" />;
    if (rank === 3) return <Award className="h-5 w-5 text-orange-600" />;
    return null;
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return 'default';
    if (rank === 2) return 'secondary';
    if (rank === 3) return 'outline';
    return 'outline';
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Trophy className="h-8 w-8 text-primary" />
                Leaderboard
              </h1>
              <p className="text-muted-foreground">
                See how you rank against other players
              </p>
            </div>
            <Link href="/dashboard">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Match Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Select Match</CardTitle>
              </CardHeader>
              <CardContent>
                {!matches || matches.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No matches available
                  </p>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {matches?.map((match: any) => (
                      <Card
                        key={match.id}
                        className={`cursor-pointer transition-colors ${
                          selectedContest === match.id ? 'border-primary bg-primary/5' : ''
                        }`}
                        onClick={() => setSelectedContest(match.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant={match.matchStarted ? 'destructive' : 'default'}>
                              {match.matchStarted ? 'LIVE' : 'UPCOMING'}
                            </Badge>
                            <Badge variant="outline">{match.matchType?.toUpperCase()}</Badge>
                          </div>
                          <p className="font-semibold text-sm">{match.name}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Leaderboard */}
            {selectedContest && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Rankings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-sm text-muted-foreground">Loading leaderboard...</p>
                    </div>
                  ) : !leaderboard || leaderboard.length === 0 ? (
                    <div className="text-center py-12">
                      <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                      <h3 className="text-lg font-semibold mb-2">No Rankings Yet</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Be the first to create a team for this match!
                      </p>
                      <Link href="/matches">
                        <Button>Create Team</Button>
                      </Link>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {leaderboard?.map((entry: any, index: number) => {
                        const rank = index + 1;
                        const isTopThree = rank <= 3;

                        return (
                          <div
                            key={entry.id}
                            className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                              isTopThree
                                ? 'bg-gradient-to-r from-primary/10 to-transparent'
                                : 'bg-muted/50'
                            }`}
                          >
                            <div className="flex items-center gap-4">
                              {/* Rank */}
                              <div className="w-12 text-center">
                                {getRankIcon(rank) || (
                                  <span className="text-2xl font-bold text-muted-foreground">
                                    {rank}
                                  </span>
                                )}
                              </div>

                              {/* User Info */}
                              <Avatar>
                                <AvatarFallback>{getInitials(entry.userName)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="font-semibold">{entry.userName}</p>
                                <p className="text-sm text-muted-foreground">
                                  Team: {entry.teamName || 'Unnamed Team'}
                                </p>
                              </div>
                            </div>

                            {/* Score */}
                            <div className="text-right">
                              <div className="flex items-center gap-2">
                                <Badge variant={getRankBadge(rank)} className="text-lg px-3 py-1">
                                  {entry.totalPoints} pts
                                </Badge>
                              </div>
                              {entry.captainPoints && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  Captain: {entry.captainPoints} pts
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Info Card */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <Trophy className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold mb-2 text-blue-900 dark:text-blue-100">
                      Educational Platform - No Prizes
                    </p>
                    <p className="text-blue-800 dark:text-blue-200">
                      REIKI ENERGY is a free-to-play educational platform. Rankings are displayed
                      for learning and skill recognition only. There are no cash prizes or rewards.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
