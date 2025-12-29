/**
 * Create Team Page - REIKI ENERGY
 * Select 11 players to build fantasy cricket team (FREE TO PLAY - NO BUDGET)
 */

import { useEffect, useState } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { trpc } from '@/lib/trpc';
import { useAuth } from '@/contexts/AuthContext';
import {
  Users,
  Trophy,
  CheckCircle,
  XCircle,
  ArrowLeft,
  Save,
  AlertCircle,
} from 'lucide-react';
import { toast } from 'sonner';

interface Player {
  id: string;
  name: string;
  role: 'wk' | 'bat' | 'all' | 'bowl';
  team: string;
}

interface TeamComposition {
  wk: number;
  bat: number;
  all: number;
  bowl: number;
}

const COMPOSITION_RULES = {
  wk: { min: 1, max: 4 },
  bat: { min: 3, max: 6 },
  all: { min: 1, max: 4 },
  bowl: { min: 3, max: 6 },
};

export default function CreateTeam() {
  const [, params] = useRoute('/create-team/:matchId');
  const [, setLocation] = useLocation();
  const { user } = useAuth();
  const matchId = params?.matchId;

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captain, setCaptain] = useState<string | null>(null);
  const [viceCaptain, setViceCaptain] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  // Fetch match details and squad
  const { data: matchData, isLoading: matchLoading } = trpc.cricket.getMatchInfo.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId }
  );

  const { data: squadData, isLoading: squadLoading } = trpc.cricket.getFantasySquad.useQuery(
    { matchId: matchId! },
    { enabled: !!matchId }
  );

  const saveTeamMutation = trpc.teams.createTeam.useMutation({
    onSuccess: () => {
      toast.success('Team saved successfully!');
      setLocation('/dashboard');
    },
    onError: (error: any) => {
      toast.error(`Failed to save team: ${error.message}`);
    },
  });

  if (!user) {
    setLocation('/login');
    return null;
  }

  if (!matchId) {
    return <div>Invalid match ID</div>;
  }

  const players: Player[] = squadData?.players || [];
  const match = matchData?.match;

  // Calculate team composition
  const composition: TeamComposition = selectedPlayers.reduce(
    (acc, player) => {
      acc[player.role]++;
      return acc;
    },
    { wk: 0, bat: 0, all: 0, bowl: 0 }
  );

  // Count players from each team
  const teamCounts = selectedPlayers.reduce((acc: Record<string, number>, player) => {
    acc[player.team] = (acc[player.team] || 0) + 1;
    return acc;
  }, {});

  const maxPlayersFromOneTeam = Math.max(...Object.values(teamCounts), 0);

  // Validation
  const isTeamValid = () => {
    if (selectedPlayers.length !== 11) return false;
    if (!captain || !viceCaptain) return false;
    if (captain === viceCaptain) return false;
    if (maxPlayersFromOneTeam > 7) return false;

    // Check composition rules
    for (const [role, count] of Object.entries(composition)) {
      const rules = COMPOSITION_RULES[role as keyof TeamComposition];
      if (count < rules.min || count > rules.max) return false;
    }

    return true;
  };

  const handlePlayerToggle = (player: Player) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);

    if (isSelected) {
      // Remove player
      setSelectedPlayers(selectedPlayers.filter(p => p.id !== player.id));
      if (captain === player.id) setCaptain(null);
      if (viceCaptain === player.id) setViceCaptain(null);
    } else {
      // Add player
      if (selectedPlayers.length >= 11) {
        toast.error('You can only select 11 players');
        return;
      }

      // Check role limits
      const newComposition = { ...composition };
      newComposition[player.role]++;
      const rules = COMPOSITION_RULES[player.role];

      if (newComposition[player.role] > rules.max) {
        toast.error(`Maximum ${rules.max} ${getRoleName(player.role)} allowed`);
        return;
      }

      // Check team limit
      const newTeamCount = (teamCounts[player.team] || 0) + 1;
      if (newTeamCount > 7) {
        toast.error('Maximum 7 players from one team allowed');
        return;
      }

      setSelectedPlayers([...selectedPlayers, player]);
    }
  };

  const handleSetCaptain = (playerId: string) => {
    if (viceCaptain === playerId) {
      toast.error('This player is already vice-captain');
      return;
    }
    setCaptain(playerId);
    toast.success('Captain selected');
  };

  const handleSetViceCaptain = (playerId: string) => {
    if (captain === playerId) {
      toast.error('This player is already captain');
      return;
    }
    setViceCaptain(playerId);
    toast.success('Vice-Captain selected');
  };

  const handleSaveTeam = () => {
    if (!isTeamValid()) {
      toast.error('Please complete your team selection');
      return;
    }

    saveTeamMutation.mutate({
      matchId: matchId!,
      playerIds: selectedPlayers.map(p => p.id),
      captainId: captain!,
      viceCaptainId: viceCaptain!,
    });
  };

  const getRoleName = (role: string) => {
    const names: Record<string, string> = {
      wk: 'Wicket-Keeper',
      bat: 'Batsman',
      all: 'All-Rounder',
      bowl: 'Bowler',
    };
    return names[role] || role;
  };

  const getRoleBadgeColor = (role: string) => {
    const colors: Record<string, string> = {
      wk: 'bg-blue-500',
      bat: 'bg-green-500',
      all: 'bg-purple-500',
      bowl: 'bg-orange-500',
    };
    return colors[role] || 'bg-gray-500';
  };

  // Filter players by role
  const filterPlayers = (role: string) => {
    if (role === 'all') return players;
    return players.filter(p => p.role === role);
  };

  const filteredPlayers = filterPlayers(activeTab);

  if (matchLoading || squadLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading match and players...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" onClick={() => setLocation('/matches')}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <div>
                <h1 className="text-xl font-bold">{match?.name}</h1>
                <p className="text-sm text-muted-foreground">Create Your Fantasy Team</p>
              </div>
            </div>
            <Button
              onClick={handleSaveTeam}
              disabled={!isTeamValid() || saveTeamMutation.isPending}
              size="lg"
            >
              <Save className="mr-2 h-4 w-4" />
              {saveTeamMutation.isPending ? 'Saving...' : 'Save Team'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Team Summary Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            {/* Team Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Team Progress</span>
                  <Badge variant={selectedPlayers.length === 11 ? 'default' : 'secondary'}>
                    {selectedPlayers.length}/11
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Composition */}
                <div className="space-y-2">
                  {Object.entries(COMPOSITION_RULES).map(([role, rules]) => {
                    const count = composition[role as keyof TeamComposition];
                    const isValid = count >= rules.min && count <= rules.max;
                    return (
                      <div key={role} className="flex items-center justify-between text-sm">
                        <span>{getRoleName(role)}</span>
                        <div className="flex items-center gap-2">
                          <span className={isValid ? 'text-green-500' : 'text-muted-foreground'}>
                            {count}
                          </span>
                          <span className="text-muted-foreground">
                            ({rules.min}-{rules.max})
                          </span>
                          {isValid ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Team Limit */}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span>Max from one team</span>
                    <div className="flex items-center gap-2">
                      <span
                        className={
                          maxPlayersFromOneTeam <= 7 ? 'text-green-500' : 'text-red-500'
                        }
                      >
                        {maxPlayersFromOneTeam}/7
                      </span>
                      {maxPlayersFromOneTeam <= 7 ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Captain & VC */}
                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Captain (2x points)</span>
                    {captain ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Vice-Captain (1.5x points)</span>
                    {viceCaptain ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Selected Players */}
            <Card>
              <CardHeader>
                <CardTitle>Selected Players</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedPlayers.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No players selected yet
                  </p>
                ) : (
                  <div className="space-y-2">
                    {selectedPlayers.map(player => (
                      <div
                        key={player.id}
                        className="flex items-center justify-between p-2 bg-muted rounded text-sm"
                      >
                        <div className="flex items-center gap-2">
                          <Badge className={getRoleBadgeColor(player.role)} variant="secondary">
                            {player.role.toUpperCase()}
                          </Badge>
                          <span className="font-medium">{player.name}</span>
                          {captain === player.id && (
                            <Badge variant="default" className="text-xs">
                              C
                            </Badge>
                          )}
                          {viceCaptain === player.id && (
                            <Badge variant="secondary" className="text-xs">
                              VC
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handlePlayerToggle(player)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Player Selection */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Select Players</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Choose 11 players following the composition rules
                </p>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-5 mb-6">
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="wk">WK</TabsTrigger>
                    <TabsTrigger value="bat">BAT</TabsTrigger>
                    <TabsTrigger value="all">AR</TabsTrigger>
                    <TabsTrigger value="bowl">BOWL</TabsTrigger>
                  </TabsList>

                  <div className="space-y-2">
                    {filteredPlayers.length === 0 ? (
                      <div className="text-center py-8">
                        <AlertCircle className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="text-muted-foreground">No players available</p>
                      </div>
                    ) : (
                      filteredPlayers.map(player => {
                        const isSelected = selectedPlayers.some(p => p.id === player.id);
                        const isCaptain = captain === player.id;
                        const isViceCaptain = viceCaptain === player.id;

                        return (
                          <Card
                            key={player.id}
                            className={`cursor-pointer transition-colors ${
                              isSelected ? 'border-primary bg-primary/5' : ''
                            }`}
                          >
                            <CardContent className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <span className="font-semibold">{player.name}</span>
                                      <Badge
                                        className={getRoleBadgeColor(player.role)}
                                        variant="secondary"
                                      >
                                        {player.role.toUpperCase()}
                                      </Badge>
                                    </div>
                                    <p className="text-sm text-muted-foreground">{player.team}</p>
                                  </div>
                                </div>

                                <div className="flex items-center gap-2">
                                  {isSelected && (
                                    <>
                                      {!isCaptain && !isViceCaptain && (
                                        <>
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleSetCaptain(player.id)}
                                          >
                                            Make Captain
                                          </Button>
                                          <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleSetViceCaptain(player.id)}
                                          >
                                            Make VC
                                          </Button>
                                        </>
                                      )}
                                      {isCaptain && (
                                        <Badge variant="default">Captain (2x)</Badge>
                                      )}
                                      {isViceCaptain && (
                                        <Badge variant="secondary">Vice-Captain (1.5x)</Badge>
                                      )}
                                    </>
                                  )}
                                  <Button
                                    variant={isSelected ? 'destructive' : 'default'}
                                    size="sm"
                                    onClick={() => handlePlayerToggle(player)}
                                  >
                                    {isSelected ? 'Remove' : 'Add'}
                                  </Button>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })
                    )}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
