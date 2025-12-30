import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Trophy, Clock, CheckCircle2 } from "lucide-react";

export default function Contests() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "live" | "completed">("upcoming");
  
  // Fetch all matches to get contests for each
  const { data: matches, isLoading: matchesLoading } = trpc.cricket.allMatches.useQuery();

  if (matchesLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading contests...</p>
          </div>
        </div>
      </div>
    );
  }

  // Filter matches by status
  const upcomingMatches = matches?.filter((m: any) => !m.matchStarted) || [];
  const liveMatches = matches?.filter((m: any) => m.matchStarted && !m.matchEnded) || [];
  const completedMatches = matches?.filter((m: any) => m.matchEnded) || [];

  const currentMatches = selectedTab === "upcoming" ? upcomingMatches : 
                         selectedTab === "live" ? liveMatches : 
                         completedMatches;

  return (
    <div className="container py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Free Contests</h1>
        <p className="text-muted-foreground text-lg">
          Join 100% free contests and compete for rankings! No entry fees, just pure competition.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={selectedTab} onValueChange={(v) => setSelectedTab(v as any)} className="mb-8">
        <TabsList>
          <TabsTrigger value="upcoming">
            Upcoming ({upcomingMatches.length})
          </TabsTrigger>
          <TabsTrigger value="live">
            Live ({liveMatches.length})
          </TabsTrigger>
          <TabsTrigger value="completed">
            Completed ({completedMatches.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value={selectedTab} className="mt-6">
          {currentMatches.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg text-muted-foreground">
                  No {selectedTab} contests available at the moment
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {currentMatches.map((match: any) => (
                <MatchContests key={match.id} match={match} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MatchContests({ match }: { match: any }) {
  const { data: contests, isLoading } = trpc.contests.byMatch.useQuery({ matchId: match.id });

  // Parse teamInfo
  const teamInfo = typeof match.teamInfo === "string" 
    ? JSON.parse(match.teamInfo) 
    : match.teamInfo || [];

  const team1 = teamInfo[0] || { name: "Team 1", img: "" };
  const team2 = teamInfo[1] || { name: "Team 2", img: "" };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl mb-2">
              {team1.name} vs {team2.name}
            </CardTitle>
            <CardDescription className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(match.dateTimeGMT).toLocaleString()}
              </span>
              <Badge variant="outline">{match.matchType?.toUpperCase()}</Badge>
              {match.matchStarted && !match.matchEnded && (
                <Badge variant="destructive" className="animate-pulse">● LIVE</Badge>
              )}
            </CardDescription>
          </div>
          {!match.matchStarted && (
            <Link href={`/create-team/${match.id}`}>
              <Button>Create Team</Button>
            </Link>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {isLoading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : !contests || contests.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">No contests available for this match yet</p>
            <Button variant="outline" onClick={() => {
              // Seed contests for this match
              window.location.reload();
            }}>
              Create Contests
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contests.map((contest: any) => (
              <ContestCard key={contest.id} contest={contest} matchId={match.id} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function ContestCard({ contest, matchId }: { contest: any; matchId: string }) {
  const fillPercentage = (contest.currentEntries / contest.maxEntries) * 100;
  const isFull = contest.currentEntries >= contest.maxEntries;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{contest.contestName}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-500/10 text-green-600">
            100% FREE
          </Badge>
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Spots</span>
          <span className="font-semibold">
            {contest.currentEntries} / {contest.maxEntries}
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <div 
            className={`h-full transition-all ${
              fillPercentage > 80 ? "bg-red-500" : 
              fillPercentage > 50 ? "bg-yellow-500" : 
              "bg-green-500"
            }`}
            style={{ width: `${fillPercentage}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground flex items-center gap-1">
            <Trophy className="h-4 w-4" />
            Winners
          </span>
          <span className="font-semibold">{contest.winnerCount}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Users className="h-3 w-3" />
          <span>{contest.currentEntries} joined</span>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/contests/${contest.id}`} className="w-full">
          <Button 
            className="w-full" 
            disabled={isFull}
            variant={isFull ? "outline" : "default"}
          >
            {isFull ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Contest Full
              </>
            ) : (
              "View Contest"
            )}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
