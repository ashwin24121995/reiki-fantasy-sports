/**
 * Live Scoring System
 * Automatically calculates and updates fantasy points during live matches
 * Based on Cricket API fantasy points data
 */

import { cricketApi } from "./cricketApi";
import { getDb } from "./db";
import { matches, fantasyTeams, teamPlayers, leaderboards } from "../drizzle/schema";
import { eq, and, inArray } from "drizzle-orm";
import { updateLeaderboardPoints } from "./contestsDb";

// ============================================
// FANTASY POINTS CALCULATION
// ============================================

/**
 * Calculate total points for a fantasy team based on player performances
 */
async function calculateTeamPoints(
  teamId: number,
  matchId: string
): Promise<number> {
  const db = await getDb();
  if (!db) return 0;

  try {
    // Get team players
    const players = await db
      .select()
      .from(teamPlayers)
      .where(eq(teamPlayers.teamId, teamId));

    if (players.length === 0) return 0;

    // Get fantasy points from Cricket API
    const fantasyPoints = await cricketApi.getFantasyMatchPoints(matchId);
    if (!fantasyPoints || !fantasyPoints.points) return 0;

    // Get team details for captain/vice-captain
    const teamDetails = await db
      .select()
      .from(fantasyTeams)
      .where(eq(fantasyTeams.id, teamId))
      .limit(1);

    if (teamDetails.length === 0) return 0;

    const team = teamDetails[0];
    const captainId = team.captainId;
    const viceCaptainId = team.viceCaptainId;

    let totalPoints = 0;

    // Calculate points for each player
    for (const player of players) {
      const playerId = player.playerId;
      const playerPoints = fantasyPoints.points[playerId] || 0;

      // Captain gets 2x points
      if (playerId === captainId) {
        totalPoints += playerPoints * 2;
      }
      // Vice-captain gets 1.5x points
      else if (playerId === viceCaptainId) {
        totalPoints += playerPoints * 1.5;
      }
      // Regular player gets 1x points
      else {
        totalPoints += playerPoints;
      }
    }

    return Math.round(totalPoints * 100) / 100; // Round to 2 decimal places
  } catch (error) {
    console.error(`[Live Scoring] Error calculating team points:`, error);
    return 0;
  }
}

/**
 * Update points for all teams in a match's contests
 */
async function updateMatchPoints(matchId: string): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    console.log(`[Live Scoring] Updating points for match ${matchId}`);

    // Get all leaderboard entries for this match's contests
    const leaderboardEntries = await db
      .select({
        id: leaderboards.id,
        contestId: leaderboards.contestId,
        teamId: leaderboards.teamId,
      })
      .from(leaderboards)
      .innerJoin(
        fantasyTeams,
        eq(leaderboards.teamId, fantasyTeams.id)
      )
      .where(eq(fantasyTeams.matchId, matchId));

    console.log(`[Live Scoring] Found ${leaderboardEntries.length} teams to update`);

    // Update points for each team
    for (const entry of leaderboardEntries) {
      const points = await calculateTeamPoints(entry.teamId, matchId);
      await updateLeaderboardPoints(entry.contestId, entry.teamId, points);
    }

    console.log(`[Live Scoring] Points updated for match ${matchId}`);
  } catch (error) {
    console.error(`[Live Scoring] Error updating match points:`, error);
  }
}

// ============================================
// LIVE SCORING SERVICE
// ============================================

export class LiveScoringService {
  private intervalId: NodeJS.Timeout | null = null;
  private isRunning = false;

  /**
   * Start the live scoring service
   * Updates points every 2 minutes for live matches
   */
  start() {
    if (this.isRunning) {
      console.log("[Live Scoring] Service already running");
      return;
    }

    console.log("[Live Scoring] Starting live scoring service...");
    this.isRunning = true;

    // Run immediately
    this.updateLiveMatches();

    // Then run every 2 minutes
    this.intervalId = setInterval(() => {
      this.updateLiveMatches();
    }, 2 * 60 * 1000); // 2 minutes
  }

  /**
   * Stop the live scoring service
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.isRunning = false;
    console.log("[Live Scoring] Service stopped");
  }

  /**
   * Update points for all live matches
   */
  private async updateLiveMatches() {
    try {
      const db = await getDb();
      if (!db) return;

      // Get all live matches
      const liveMatches = await db
        .select()
        .from(matches)
        .where(eq(matches.matchStarted, true));

      if (liveMatches.length === 0) {
        console.log("[Live Scoring] No live matches found");
        return;
      }

      console.log(`[Live Scoring] Updating ${liveMatches.length} live matches`);

      // Update points for each live match
      for (const match of liveMatches) {
        await updateMatchPoints(match.id);
      }
    } catch (error) {
      console.error("[Live Scoring] Error in updateLiveMatches:", error);
    }
  }

  /**
   * Manually trigger point update for a specific match
   */
  async updateMatch(matchId: string) {
    console.log(`[Live Scoring] Manual update triggered for match ${matchId}`);
    await updateMatchPoints(matchId);
  }
}

// Export singleton instance
export const liveScoringService = new LiveScoringService();
