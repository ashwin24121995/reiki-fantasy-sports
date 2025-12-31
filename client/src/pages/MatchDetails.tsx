/**
 * Match Details Page - REIKI ENERGY
 * Display detailed match information, scores, and results
 */

import { useEffect } from 'react';
import { useParams, Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { trpc } from '@/lib/trpc';
import {
  Calendar,
  MapPin,
  Trophy,
  ArrowLeft,
  Users,
  Target,
  TrendingUp,
} from 'lucide-react';
import { format } from 'date-fns';

export default function MatchDetails() {
  const { id } = useParams<{ id: string }>();
  
  const { data: match, isLoading, error } = trpc.cricket.matchById.useQuery(
    { matchId: id || '' },
    { enabled: !!id }
  );

  const { data: contests } = trpc.contests.byMatch.useQuery(
    { matchId: id || '' },
    { enabled: !!id }
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading match details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="container py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Match Not Found</h2>
            <p className="text-muted-foreground mb-6">
              The match you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/matches">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Matches
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const teamInfo = match.teamInfo || [];
  const team1 = teamInfo[0] || { name: 'Team 1', shortname: 'T1', img: '' };
  const team2 = teamInfo[1] || { name: 'Team 2', shortname: 'T2', img: '' };
  
  const scores = match.score || [];
  const team1Score = scores[0] || { r: 0, w: 0, o: 0 };
  const team2Score = scores[1] || { r: 0, w: 0, o: 0 };

  const matchDate = match.dateTimeGMT ? new Date(match.dateTimeGMT) : null;
  const isCompleted = match.matchEnded;
  const isLive = match.matchStarted && !match.matchEnded;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-background border-b">
        <div className="container py-6">
          <Link href="/matches">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Matches
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={isLive ? 'default' : 'secondary'} className="text-sm">
              {match.matchType || 'T20'}
            </Badge>
            {isLive && (
              <Badge className="bg-red-500 text-white animate-pulse">
                LIVE
              </Badge>
            )}
            {isCompleted && (
              <Badge variant="outline" className="border-orange-500 text-orange-500">
                COMPLETED
              </Badge>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-2">{match.name}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {matchDate && (
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{format(matchDate, 'PPP, p')}</span>
              </div>
            )}
            {match.venue && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{match.venue}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Match Score Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Match Scorecard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Team 1 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    {team1.img && (
                      <img
                        src={team1.img}
                        alt={team1.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{team1.name}</h3>
                      <p className="text-sm text-muted-foreground">{team1.shortname}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {team1Score.r}/{team1Score.w}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ({team1Score.o} overs)
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Team 2 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    {team2.img && (
                      <img
                        src={team2.img}
                        alt={team2.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{team2.name}</h3>
                      <p className="text-sm text-muted-foreground">{team2.shortname}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        {team2Score.r}/{team2Score.w}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        ({team2Score.o} overs)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Match Result */}
                {isCompleted && match.status && (
                  <>
                    <Separator />
                    <div className="bg-primary/10 rounded-lg p-4 text-center">
                      <p className="font-semibold text-lg">{match.status}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Match Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Match Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Format</p>
                    <p className="font-semibold">{match.matchType || 'T20'}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold">
                      {isLive ? 'In Progress' : isCompleted ? 'Completed' : 'Upcoming'}
                    </p>
                  </div>
                  {match.venue && (
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Venue</p>
                      <p className="font-semibold">{match.venue}</p>
                    </div>
                  )}
                  {matchDate && (
                    <div className="col-span-2">
                      <p className="text-sm text-muted-foreground mb-1">Date & Time</p>
                      <p className="font-semibold">{format(matchDate, 'PPP, p')}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contests */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Available Contests
                </CardTitle>
              </CardHeader>
              <CardContent>
                {contests && contests.length > 0 ? (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground mb-3">
                      {contests.length} contest{contests.length !== 1 ? 's' : ''} available for this match
                    </p>
                    <Link href={`/contests?match=${id}`}>
                      <Button className="w-full">
                        <Trophy className="mr-2 h-4 w-4" />
                        View All Contests
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <Trophy className="h-12 w-12 mx-auto mb-3 text-muted-foreground opacity-50" />
                    <p className="text-sm text-muted-foreground mb-4">
                      No contests available for this match yet
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            {!isCompleted && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {match.fantasyEnabled && (
                    <Link href={`/create-team/${id}`}>
                      <Button variant="outline" className="w-full">
                        Create Fantasy Team
                      </Button>
                    </Link>
                  )}
                  <Link href="/matches">
                    <Button variant="outline" className="w-full">
                      Browse Other Matches
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
