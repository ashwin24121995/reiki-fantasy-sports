import { useState } from "react";
import { Link, useParams, useLocation } from "wouter";
import { trpc } from "@/lib/trpc";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trophy, Users, ArrowLeft, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContestDetails() {
  const { id } = useParams();
  const [, navigate] = useLocation();
  const { user } = useAuth();
  const { toast } = useToast();
  const [showJoinDialog, setShowJoinDialog] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string>("");

  const contestId = parseInt(id || "0");

  // Fetch contest details
  const { data: contest, isLoading: contestLoading } = trpc.contests.byId.useQuery({ contestId });
  
  // Fetch leaderboard
  const { data: leaderboard, isLoading: leaderboardLoading } = trpc.contests.leaderboard.useQuery({ contestId });
  
  // Fetch user's teams (for joining)
  const { data: myTeams } = trpc.teams.myTeams.useQuery(undefined, {
    enabled: !!user,
  });

  // Join contest mutation
  const joinMutation = trpc.contests.join.useMutation({
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've joined the contest successfully!",
      });
      setShowJoinDialog(false);
      window.location.reload(); // Refresh to show updated data
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  if (contestLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  if (!contest) {
    return (
      <div className="container py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-lg text-muted-foreground">Contest not found</p>
            <Button className="mt-4" onClick={() => navigate("/contests")}>
              Back to Contests
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const fillPercentage = (contest.currentEntries / contest.maxEntries) * 100;
  const isFull = contest.currentEntries >= contest.maxEntries;

  const handleJoinContest = () => {
    if (!user) {
      toast({
        title: "Login Required",
        description: "Please login to join contests",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!myTeams || myTeams.length === 0) {
      toast({
        title: "No Teams",
        description: "Please create a team first",
        variant: "destructive",
      });
      return;
    }

    setShowJoinDialog(true);
  };

  const confirmJoin = () => {
    if (!selectedTeamId) {
      toast({
        title: "Select a Team",
        description: "Please select a team to join the contest",
        variant: "destructive",
      });
      return;
    }

    joinMutation.mutate({
      contestId,
      teamId: parseInt(selectedTeamId),
    });
  };

  return (
    <div className="container py-8">
      {/* Back Button */}
      <Button variant="ghost" className="mb-4" onClick={() => navigate("/contests")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Contests
      </Button>

      {/* Contest Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl mb-2">{contest.contestName}</CardTitle>
              <CardDescription className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                  100% FREE
                </Badge>
                <Badge variant="outline">{contest.status.toUpperCase()}</Badge>
              </CardDescription>
            </div>
            {!isFull && contest.status === "upcoming" && (
              <Button size="lg" onClick={handleJoinContest}>
                Join Contest
              </Button>
            )}
            {isFull && (
              <Badge variant="destructive" className="text-lg px-4 py-2">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Contest Full
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-secondary rounded-lg">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{contest.currentEntries}</div>
              <div className="text-sm text-muted-foreground">Entries</div>
            </div>

            <div className="text-center p-4 bg-secondary rounded-lg">
              <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{contest.maxEntries}</div>
              <div className="text-sm text-muted-foreground">Max Spots</div>
            </div>

            <div className="text-center p-4 bg-secondary rounded-lg">
              <Trophy className="h-6 w-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold">{contest.winnerCount}</div>
              <div className="text-sm text-muted-foreground">Winners</div>
            </div>

            <div className="text-center p-4 bg-secondary rounded-lg">
              <div className="text-2xl font-bold">{fillPercentage.toFixed(0)}%</div>
              <div className="text-sm text-muted-foreground">Filled</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
              <div 
                className={`h-full transition-all ${
                  fillPercentage > 80 ? "bg-red-500" : 
                  fillPercentage > 50 ? "bg-yellow-500" : 
                  "bg-green-500"
                }`}
                style={{ width: `${fillPercentage}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>
            Top performers in this contest
          </CardDescription>
        </CardHeader>

        <CardContent>
          {leaderboardLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : !leaderboard || leaderboard.length === 0 ? (
            <div className="text-center py-8">
              <Trophy className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">No entries yet. Be the first to join!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {leaderboard.map((entry: any, index: number) => (
                <div 
                  key={entry.id} 
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    index < 3 ? "bg-primary/10" : "bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`font-bold text-lg ${
                      index === 0 ? "text-yellow-500" :
                      index === 1 ? "text-gray-400" :
                      index === 2 ? "text-orange-600" :
                      ""
                    }`}>
                      #{entry.rank || index + 1}
                    </div>
                    <div>
                      <div className="font-semibold">User #{entry.userId}</div>
                      <div className="text-sm text-muted-foreground">Team #{entry.teamId}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{parseFloat(entry.totalPoints).toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Join Contest Dialog */}
      <Dialog open={showJoinDialog} onOpenChange={setShowJoinDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Contest</DialogTitle>
            <DialogDescription>
              Select a team to join this contest
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <Select value={selectedTeamId} onValueChange={setSelectedTeamId}>
              <SelectTrigger>
                <SelectValue placeholder="Select a team" />
              </SelectTrigger>
              <SelectContent>
                {myTeams?.map((team: any) => (
                  <SelectItem key={team.id} value={team.id.toString()}>
                    {team.teamName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowJoinDialog(false)}>
              Cancel
            </Button>
            <Button onClick={confirmJoin} disabled={joinMutation.isPending}>
              {joinMutation.isPending ? "Joining..." : "Join Contest"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
