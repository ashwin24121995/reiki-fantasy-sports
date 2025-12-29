/**
 * My Teams Page - REIKI ENERGY
 * View all fantasy teams created by the user
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  Trophy,
  Calendar,
  ArrowLeft,
  Eye,
  Trash2,
  Crown,
  Star,
} from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';

export default function MyTeams() {
  const { user } = useAuth();

  // Fetch user's teams
  const { data: teamsData, isLoading, refetch } = trpc.cricket.getMyTeams.useQuery(
    undefined,
    { enabled: !!user }
  );

  const deleteTeamMutation = trpc.cricket.deleteTeam.useMutation({
    onSuccess: () => {
      toast.success('Team deleted successfully');
      refetch();
    },
    onError: (error) => {
      toast.error(`Failed to delete team: ${error.message}`);
    },
  });

  const teams = teamsData?.teams || [];

  const handleDeleteTeam = (teamId: string) => {
    if (confirm('Are you sure you want to delete this team?')) {
      deleteTeamMutation.mutate({ teamId });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your teams...</p>
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
              <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
                <Users className="h-8 w-8 text-primary" />
                My Teams
              </h1>
              <p className="text-muted-foreground">
                View and manage your fantasy cricket teams
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/matches">
                <Button>Create New Team</Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {teams.length === 0 ? (
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="pt-12 pb-12 text-center">
                  <Users className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <h3 className="text-xl font-semibold mb-2">No Teams Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    You haven't created any fantasy teams yet. Start by selecting a match and
                    building your first team!
                  </p>
                  <Link href="/matches">
                    <Button size="lg">
                      <Calendar className="mr-2 h-5 w-5" />
                      Browse Matches
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team: any) => (
                <Card key={team.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">
                          {team.teamName || 'Unnamed Team'}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{team.matchName}</p>
                      </div>
                      <Badge
                        variant={
                          team.matchStatus === 'live'
                            ? 'destructive'
                            : team.matchStatus === 'upcoming'
                            ? 'default'
                            : 'secondary'
                        }
                      >
                        {team.matchStatus?.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Team Stats */}
                      <div className="grid grid-cols-2 gap-4 p-3 bg-muted rounded-lg">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{team.totalPoints || 0}</p>
                          <p className="text-xs text-muted-foreground">Total Points</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{team.rank || '-'}</p>
                          <p className="text-xs text-muted-foreground">Rank</p>
                        </div>
                      </div>

                      {/* Captain & VC */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Crown className="h-4 w-4 text-yellow-500" />
                            <span className="text-muted-foreground">Captain:</span>
                          </div>
                          <span className="font-semibold">{team.captainName}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-gray-400" />
                            <span className="text-muted-foreground">Vice-Captain:</span>
                          </div>
                          <span className="font-semibold">{team.viceCaptainName}</span>
                        </div>
                      </div>

                      {/* Team Composition */}
                      <div className="flex items-center justify-between text-xs text-muted-foreground p-2 bg-muted/50 rounded">
                        <span>WK: {team.composition?.wk || 0}</span>
                        <span>BAT: {team.composition?.bat || 0}</span>
                        <span>AR: {team.composition?.all || 0}</span>
                        <span>BOWL: {team.composition?.bowl || 0}</span>
                      </div>

                      {/* Created Date */}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Created {format(new Date(team.createdAt), 'PPp')}</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Link href={`/team/${team.id}`} className="flex-1">
                          <Button variant="outline" size="sm" className="w-full">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDeleteTeam(team.id)}
                          disabled={deleteTeamMutation.isPending}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
