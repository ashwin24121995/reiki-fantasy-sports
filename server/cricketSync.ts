/**
 * Cricket Data Synchronization Service
 * Handles real-time data synchronization from Cricket Data API to database
 */

import { cricketApi } from "./cricketApi";
import {
  upsertMatch,
  upsertMatchSquad,
  upsertMatchPoints,
  getLiveMatches,
  getUpcomingMatches,
} from "./cricketDb";

class CricketSyncService {
  private syncInterval: NodeJS.Timeout | null = null;
  private liveMatchInterval: NodeJS.Timeout | null = null;
  private isSyncing: boolean = false;

  /**
   * Start automatic synchronization
   */
  start() {
    console.log("[Cricket Sync] Starting synchronization service...");

    // Sync current matches every 30 seconds
    this.syncInterval = setInterval(() => {
      this.syncCurrentMatches();
    }, 30000);

    // Sync live match points every 60 seconds
    this.liveMatchInterval = setInterval(() => {
      this.syncLiveMatchPoints();
    }, 60000);

    // Initial sync
    this.syncCurrentMatches();
    this.syncLiveMatchPoints();
  }

  /**
   * Stop automatic synchronization
   */
  stop() {
    console.log("[Cricket Sync] Stopping synchronization service...");

    if (this.syncInterval) {
      clearInterval(this.syncInterval);
      this.syncInterval = null;
    }

    if (this.liveMatchInterval) {
      clearInterval(this.liveMatchInterval);
      this.liveMatchInterval = null;
    }
  }

  /**
   * Sync current matches from API to database
   */
  async syncCurrentMatches() {
    if (this.isSyncing) {
      console.log("[Cricket Sync] Already syncing, skipping...");
      return;
    }

    this.isSyncing = true;

    try {
      console.log("[Cricket Sync] Fetching current matches...");
      const matches = await cricketApi.getCurrentMatches();

      console.log(`[Cricket Sync] Found ${matches.length} current matches`);

      for (const match of matches) {
        await upsertMatch(match);

        // Fetch and store squad if available
        if (match.hasSquad && match.fantasyEnabled) {
          try {
            const squad = await cricketApi.getFantasySquad(match.id);
            await upsertMatchSquad(match.id, squad);
            console.log(`[Cricket Sync] Synced squad for match: ${match.name}`);
          } catch (error) {
            console.error(`[Cricket Sync] Failed to sync squad for ${match.id}:`, error);
          }
        }
      }

      console.log("[Cricket Sync] Current matches sync completed");
    } catch (error) {
      console.error("[Cricket Sync] Failed to sync current matches:", error);
    } finally {
      this.isSyncing = false;
    }
  }

  /**
   * Sync live match points
   */
  async syncLiveMatchPoints() {
    try {
      const liveMatches = await getLiveMatches();

      if (liveMatches.length === 0) {
        console.log("[Cricket Sync] No live matches to sync");
        return;
      }

      console.log(`[Cricket Sync] Syncing points for ${liveMatches.length} live matches`);

      for (const match of liveMatches) {
        if (!match.fantasyEnabled) continue;

        try {
          // Fetch latest match info
          const matchInfo = await cricketApi.getMatchInfo(match.id);
          await upsertMatch(matchInfo);

          // Fetch latest fantasy points
          const points = await cricketApi.getFantasyMatchPoints(match.id);
          await upsertMatchPoints(match.id, points);

          console.log(`[Cricket Sync] Synced points for match: ${match.name}`);
        } catch (error) {
          console.error(`[Cricket Sync] Failed to sync points for ${match.id}:`, error);
        }

        // Add delay to avoid rate limiting
        await this.delay(1000);
      }

      console.log("[Cricket Sync] Live match points sync completed");
    } catch (error) {
      console.error("[Cricket Sync] Failed to sync live match points:", error);
    }
  }

  /**
   * Manually sync a specific match
   */
  async syncMatch(matchId: string) {
    try {
      console.log(`[Cricket Sync] Manually syncing match: ${matchId}`);

      const matchInfo = await cricketApi.getMatchInfo(matchId);
      await upsertMatch(matchInfo);

      if (matchInfo.hasSquad && matchInfo.fantasyEnabled) {
        const squad = await cricketApi.getFantasySquad(matchId);
        await upsertMatchSquad(matchId, squad);
      }

      if (matchInfo.fantasyEnabled && matchInfo.matchStarted) {
        const points = await cricketApi.getFantasyMatchPoints(matchId);
        await upsertMatchPoints(matchId, points);
      }

      console.log(`[Cricket Sync] Match sync completed: ${matchId}`);
      return true;
    } catch (error) {
      console.error(`[Cricket Sync] Failed to sync match ${matchId}:`, error);
      return false;
    }
  }

  /**
   * Sync upcoming matches for the next 7 days
   */
  async syncUpcomingMatches() {
    try {
      console.log("[Cricket Sync] Fetching upcoming matches...");

      // Get all matches (paginated)
      let offset = 0;
      let hasMore = true;
      let totalSynced = 0;

      while (hasMore && offset < 100) {
        const matches = await cricketApi.getAllMatches(offset);

        if (matches.length === 0) {
          hasMore = false;
          break;
        }

        // Filter for upcoming matches only
        const now = new Date();
        const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

        const upcomingMatches = matches.filter((match) => {
          const matchDate = new Date(match.dateTimeGMT);
          return matchDate >= now && matchDate <= sevenDaysFromNow;
        });

        for (const match of upcomingMatches) {
          await upsertMatch(match);
          totalSynced++;
        }

        offset += 25; // API returns 25 items per page
        await this.delay(1000); // Rate limiting
      }

      console.log(`[Cricket Sync] Synced ${totalSynced} upcoming matches`);
    } catch (error) {
      console.error("[Cricket Sync] Failed to sync upcoming matches:", error);
    }
  }

  /**
   * Utility function to add delay
   */
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Get sync status
   */
  getStatus() {
    return {
      isRunning: this.syncInterval !== null,
      isSyncing: this.isSyncing,
      usageStats: cricketApi.getUsageStats(),
    };
  }
}

// Export singleton instance
export const cricketSync = new CricketSyncService();
