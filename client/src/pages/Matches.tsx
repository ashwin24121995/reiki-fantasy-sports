/**
 * Matches Page - REIKI ENERGY
 * Display upcoming, live, and completed cricket matches with advanced filtering
 */

import { useEffect, useState, useMemo } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { trpc } from '@/lib/trpc';
import {
  Calendar,
  MapPin,
  Trophy,
  Clock,
  ArrowRight,
  Search,
  Filter,
  X,
  ChevronDown,
  Users,
  TrendingUp,
} from 'lucide-react';
import { format, isAfter, isBefore, startOfDay, endOfDay } from 'date-fns';

type MatchFormat = 'all' | 't20' | 'odi' | 'test';
type SortOption = 'date-asc' | 'date-desc' | 'format' | 'teams';

export default function Matches() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showFilters, setShowFilters] = useState(false);

  // Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [matchFormat, setMatchFormat] = useState<MatchFormat>('all');
  const [sortBy, setSortBy] = useState<SortOption>('date-asc');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // Fetch all matches from API (upcoming, live, completed)
  const { data: matchesData, isLoading, error } = trpc.cricket.allMatches.useQuery();

  const matches = matchesData || [];

  // Filter and sort matches
  const filteredMatches = useMemo(() => {
    let filtered = [...matches];

    // Filter by search query (team names)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter((match: any) =>
        match.teamInfo?.some((team: any) =>
          team.name?.toLowerCase().includes(query) ||
          team.shortname?.toLowerCase().includes(query)
        ) || match.name?.toLowerCase().includes(query)
      );
    }

    // Filter by match format
    if (matchFormat !== 'all') {
      filtered = filtered.filter((match: any) => {
        const type = match.matchType?.toLowerCase();
        return type === matchFormat;
      });
    }

    // Filter by date range
    if (startDate) {
      const start = startOfDay(new Date(startDate));
      filtered = filtered.filter((match: any) => {
        const matchDate = new Date(match.dateTimeGMT);
        return isAfter(matchDate, start) || matchDate.getTime() === start.getTime();
      });
    }

    if (endDate) {
      const end = endOfDay(new Date(endDate));
      filtered = filtered.filter((match: any) => {
        const matchDate = new Date(match.dateTimeGMT);
        return isBefore(matchDate, end) || matchDate.getTime() === end.getTime();
      });
    }

    // Sort matches
    filtered.sort((a: any, b: any) => {
      switch (sortBy) {
        case 'date-asc':
          return new Date(a.dateTimeGMT).getTime() - new Date(b.dateTimeGMT).getTime();
        case 'date-desc':
          return new Date(b.dateTimeGMT).getTime() - new Date(a.dateTimeGMT).getTime();
        case 'format':
          return (a.matchType || '').localeCompare(b.matchType || '');
        case 'teams':
          return (a.name || '').localeCompare(b.name || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [matches, searchQuery, matchFormat, sortBy, startDate, endDate]);

  // Filter by status
  const upcomingMatches = filteredMatches.filter(
    (m: any) => m.status === 'Match not started' || m.matchStarted === false
  );
  const liveMatches = filteredMatches.filter((m: any) => m.matchStarted === true && !m.matchEnded);
  const completedMatches = filteredMatches.filter((m: any) => m.matchEnded === true);

  // Count active filters
  const activeFilterCount = [
    searchQuery.trim() !== '',
    matchFormat !== 'all',
    startDate !== '',
    endDate !== '',
  ].filter(Boolean).length;

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setMatchFormat('all');
    setSortBy('date-asc');
    setStartDate('');
    setEndDate('');
  };

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
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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

      {/* Search and Filter Bar */}
      <section className="border-b bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search by team name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Filter Toggle Button */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full lg:w-auto"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {activeFilterCount}
                </Badge>
              )}
              <ChevronDown
                className={`h-4 w-4 ml-2 transition-transform ${
                  showFilters ? 'rotate-180' : ''
                }`}
              />
            </Button>
          </div>

          {/* Advanced Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-muted/50 rounded-lg border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Match Format Filter */}
                <div>
                  <Label htmlFor="format-filter" className="text-sm font-medium mb-2 block">
                    Match Format
                  </Label>
                  <Select value={matchFormat} onValueChange={(value) => setMatchFormat(value as MatchFormat)}>
                    <SelectTrigger id="format-filter">
                      <SelectValue placeholder="All Formats" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Formats</SelectItem>
                      <SelectItem value="t20">T20</SelectItem>
                      <SelectItem value="odi">ODI</SelectItem>
                      <SelectItem value="test">Test</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div>
                  <Label htmlFor="sort-filter" className="text-sm font-medium mb-2 block">
                    Sort By
                  </Label>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger id="sort-filter">
                      <SelectValue placeholder="Date (Earliest)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="date-asc">Date (Earliest First)</SelectItem>
                      <SelectItem value="date-desc">Date (Latest First)</SelectItem>
                      <SelectItem value="format">Format</SelectItem>
                      <SelectItem value="teams">Team Names</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Start Date */}
                <div>
                  <Label htmlFor="start-date" className="text-sm font-medium mb-2 block">
                    Start Date
                  </Label>
                  <Input
                    id="start-date"
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>

                {/* End Date */}
                <div>
                  <Label htmlFor="end-date" className="text-sm font-medium mb-2 block">
                    End Date
                  </Label>
                  <Input
                    id="end-date"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
              </div>

              {/* Clear Filters Button */}
              {activeFilterCount > 0 && (
                <div className="mt-4 flex justify-end">
                  <Button variant="ghost" size="sm" onClick={clearFilters}>
                    <X className="h-4 w-4 mr-2" />
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

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
                  <h3 className="text-xl font-semibold mb-2">
                    {activeFilterCount > 0 ? 'No Matches Found' : 'No Upcoming Matches'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {activeFilterCount > 0
                      ? 'Try adjusting your filters to see more matches'
                      : 'Check back later for new matches to create your fantasy team'}
                  </p>
                  {activeFilterCount > 0 && (
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  )}
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
                  <h3 className="text-xl font-semibold mb-2">
                    {activeFilterCount > 0 ? 'No Matches Found' : 'No Live Matches'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {activeFilterCount > 0
                      ? 'Try adjusting your filters to see more matches'
                      : 'No matches are currently in progress'}
                  </p>
                  {activeFilterCount > 0 && (
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  )}
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
                  <h3 className="text-xl font-semibold mb-2">
                    {activeFilterCount > 0 ? 'No Matches Found' : 'No Completed Matches'}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {activeFilterCount > 0
                      ? 'Try adjusting your filters to see more matches'
                      : 'Completed matches will appear here'}
                  </p>
                  {activeFilterCount > 0 && (
                    <Button variant="outline" onClick={clearFilters}>
                      Clear Filters
                    </Button>
                  )}
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

// Enhanced Match Card Component
function MatchCard({ match, status }: { match: any; status: 'upcoming' | 'live' | 'completed' }) {
  const matchDate = new Date(match.dateTimeGMT);
  const isUpcoming = status === 'upcoming';
  const isLive = status === 'live';

  // Fetch contest count for this match
  const { data: contests } = trpc.contests.byMatch.useQuery({ matchId: match.id });
  const contestCount = contests?.length || 0;

  // Calculate time until match starts (for upcoming matches)
  const [timeUntil, setTimeUntil] = useState('');

  useEffect(() => {
    if (!isUpcoming) return;

    const updateCountdown = () => {
      const now = new Date().getTime();
      const matchTime = matchDate.getTime();
      const diff = matchTime - now;

      if (diff <= 0) {
        setTimeUntil('Starting soon');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      if (days > 0) {
        setTimeUntil(`${days}d ${hours}h`);
      } else if (hours > 0) {
        setTimeUntil(`${hours}h ${minutes}m`);
      } else {
        setTimeUntil(`${minutes}m`);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [isUpcoming, matchDate]);

  return (
    <Card className="hover:shadow-lg transition-all hover:scale-[1.02] duration-200">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <Badge
            variant={isLive ? 'destructive' : isUpcoming ? 'default' : 'secondary'}
            className={isLive ? 'animate-pulse' : ''}
          >
            {isLive ? '● LIVE' : isUpcoming ? 'UPCOMING' : 'COMPLETED'}
          </Badge>
          <Badge variant="outline" className="font-semibold">
            {match.matchType?.toUpperCase()}
          </Badge>
        </div>
        <CardTitle className="text-lg leading-tight">{match.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Teams */}
          <div className="space-y-2">
            {match.teamInfo?.map((team: any, idx: number) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  {team.img && (
                    <img
                      src={team.img}
                      alt={team.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-background"
                    />
                  )}
                  <span className="font-semibold text-sm">
                    {team.shortname || team.name}
                  </span>
                </div>
                {match.score && match.score[idx] && (
                  <span className="text-sm font-mono font-semibold">
                    {match.score[idx].r}/{match.score[idx].w} ({match.score[idx].o})
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Match Info */}
          <div className="space-y-2 text-sm">
            {/* Date and Time */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span className="flex-1">{format(matchDate, 'PPp')}</span>
            </div>

            {/* Countdown for upcoming matches */}
            {isUpcoming && timeUntil && (
              <div className="flex items-center gap-2 text-primary font-medium">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Starts in {timeUntil}</span>
              </div>
            )}

            {/* Venue */}
            {match.venue && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="truncate flex-1">{match.venue}</span>
              </div>
            )}

            {/* Contest Count */}
            <Link href="/contests" className="block">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group">
                <Trophy className="h-4 w-4 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-medium">
                  {contestCount > 0 ? (
                    <span className="text-primary">{contestCount} contest{contestCount !== 1 ? 's' : ''} available</span>
                  ) : (
                    <span>No contests yet</span>
                  )}
                </span>
              </div>
            </Link>

            {/* Match Status */}
            {match.status && (
              <div className="text-xs p-2 bg-muted/50 rounded border-l-2 border-primary">
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
                <TrendingUp className="ml-2 h-4 w-4" />
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
