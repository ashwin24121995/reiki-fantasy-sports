import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Trophy, Clock, CheckCircle2, Plus, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contests() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "live" | "completed">("upcoming");
  const { toast } = useToast();
  
  // Fetch all matches to get contests for each
  const { data: matches, isLoading: matchesLoading } = trpc.cricket.allMatches.useQuery();
  const seedContestsMutation = trpc.contests.seedAll.useMutation({
    onSuccess: (data) => {
      toast({
        title: "Contests Created!",
        description: data.message || "Free contests have been created for all matches.",
      });
      // Refresh the page to show new contests
      window.location.reload();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to create contests",
        variant: "destructive",
      });
    },
  });

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
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">Free Contests</h1>
          <p className="text-muted-foreground text-lg">
            Join 100% free contests and compete for rankings! No entry fees, just pure competition.
          </p>
        </div>
        <Button 
          onClick={() => seedContestsMutation.mutate()}
          disabled={seedContestsMutation.isPending}
          size="lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          {seedContestsMutation.isPending ? "Creating..." : "Seed All Contests"}
        </Button>
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
                  No {selectedTab} matches available at the moment
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
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            {/* Team logos and names */}
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-2">
                {team1.img && (
                  <img src={team1.img} alt={team1.name} className="w-8 h-8 object-contain" />
                )}
                <span className="font-semibold text-lg">{team1.name}</span>
              </div>
              <span className="text-muted-foreground font-bold">vs</span>
              <div className="flex items-center gap-2">
                {team2.img && (
                  <img src={team2.img} alt={team2.name} className="w-8 h-8 object-contain" />
                )}
                <span className="font-semibold text-lg">{team2.name}</span>
              </div>
            </div>

            {/* Match details */}
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <Badge variant="outline" className="font-semibold">
                {match.matchType?.toUpperCase() || "T20"}
              </Badge>
              
              {match.matchStarted && !match.matchEnded && (
                <Badge variant="destructive" className="animate-pulse">● LIVE</Badge>
              )}
              
              {match.matchEnded && (
                <Badge variant="secondary">COMPLETED</Badge>
              )}

              <span className="flex items-center gap-1 text-muted-foreground">
                <Clock className="h-3 w-3" />
                {new Date(match.dateTimeGMT).toLocaleDateString()} {new Date(match.dateTimeGMT).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>

              {match.venue && (
                <span className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {match.venue}
                </span>
              )}
            </div>
          </div>

          {!match.matchStarted && (
            <Link href={`/create-team/${match.id}`}>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Create Team
              </Button>
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
          <div className="text-center py-6 bg-muted/30 rounded-lg">
            <Trophy className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground mb-2">No contests available for this match yet</p>
            <p className="text-xs text-muted-foreground">Click "Seed All Contests" button above to create free contests</p>
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
    <Card className="hover:shadow-lg transition-shadow border-2">
      <CardHeader>
        <CardTitle className="text-lg">{contest.contestName}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-green-500/10 text-green-600 font-semibold">
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
