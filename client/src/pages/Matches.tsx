/**
 * Matches Page - REIKI ENERGY
 * Display upcoming, live, and completed cricket matches
 */

import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { Calendar, MapPin, Trophy, Clock, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';

export default function Matches() {
  const [activeTab, setActiveTab] = useState('upcoming');

  // Fetch matches from API
  const { data: matchesData, isLoading, error } = trpc.cricket.getCurrentMatches.useQuery();

  const matches = matchesData || [];

  // Filter matches by status
  const upcomingMatches = matches.filter(
    (m: any) => m.status === 'Match not started' || m.matchStarted === false
  );
  const liveMatches = matches.filter((m: any) => m.matchStarted === true && !m.matchEnded);
  const completedMatches = matches.filter((m: any) => m.matchEnded === true);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading matches...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <p className="text-red-500 mb-4">Failed to load matches</p>
            <p className="text-sm text-muted-foreground">{error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Cricket Matches</h1>
              <p className="text-muted-foreground">
                Select a match to create your fantasy team
              </p>
            </div>
            <Link href="/dashboard">
              <Button variant="outline">Back to Dashboard</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Matches Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="upcoming">
                Upcoming
                {upcomingMatches.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {upcomingMatches.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="live">
                Live
                {liveMatches.length > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {liveMatches.length}
                  </Badge>
                )}
              </TabsTrigger>
              <TabsTrigger value="completed">
                Completed
                {completedMatches.length > 0 && (
                  <Badge variant="outline" className="ml-2">
                    {completedMatches.length}
                  </Badge>
                )}
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Matches */}
            <TabsContent value="upcoming">
              {upcomingMatches.length === 0 ? (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Upcoming Matches</h3>
                  <p className="text-muted-foreground">
                    Check back later for new matches to create your fantasy team
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {upcomingMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="upcoming" />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Live Matches */}
            <TabsContent value="live">
              {liveMatches.length === 0 ? (
                <div className="text-center py-12">
                  <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Live Matches</h3>
                  <p className="text-muted-foreground">
                    No matches are currently in progress
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {liveMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="live" />
                  ))}
                </div>
              )}
            </TabsContent>

            {/* Completed Matches */}
            <TabsContent value="completed">
              {completedMatches.length === 0 ? (
                <div className="text-center py-12">
                  <Clock className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Completed Matches</h3>
                  <p className="text-muted-foreground">
                    Completed matches will appear here
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedMatches.map((match: any) => (
                    <MatchCard key={match.id} match={match} status="completed" />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}

// Match Card Component
function MatchCard({ match, status }: { match: any; status: 'upcoming' | 'live' | 'completed' }) {
  const matchDate = new Date(match.dateTimeGMT);
  const isUpcoming = status === 'upcoming';
  const isLive = status === 'live';

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge
            variant={isLive ? 'destructive' : isUpcoming ? 'default' : 'secondary'}
            className={isLive ? 'animate-pulse' : ''}
          >
            {isLive ? '● LIVE' : isUpcoming ? 'UPCOMING' : 'COMPLETED'}
          </Badge>
          <Badge variant="outline">{match.matchType?.toUpperCase()}</Badge>
        </div>
        <CardTitle className="text-lg">{match.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Teams */}
          <div className="space-y-2">
            {match.teamInfo?.map((team: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between p-2 bg-muted rounded">
                <div className="flex items-center gap-2">
                  {team.img && (
                    <img src={team.img} alt={team.name} className="w-6 h-6 rounded-full" />
                  )}
                  <span className="font-semibold">{team.shortname || team.name}</span>
                </div>
                {match.score && match.score[idx] && (
                  <span className="text-sm font-mono">
                    {match.score[idx].r}/{match.score[idx].w} ({match.score[idx].o})
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Match Info */}
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{format(matchDate, 'PPp')}</span>
            </div>
            {match.venue && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="truncate">{match.venue}</span>
              </div>
            )}
            {match.status && (
              <div className="text-xs p-2 bg-muted rounded">
                {match.status}
              </div>
            )}
          </div>

          {/* Actions */}
          {isUpcoming && (
            <Link href={`/create-team/${match.id}`}>
              <Button className="w-full" size="sm">
                Create Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {isLive && (
            <Link href={`/match/${match.id}`}>
              <Button variant="outline" className="w-full" size="sm">
                View Live Match
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
          {status === 'completed' && (
            <Link href={`/match/${match.id}`}>
              <Button variant="secondary" className="w-full" size="sm">
                View Results
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
