/**
 * Contests Database Helpers
 * Functions to manage contests, entries, and leaderboards
 * FREE-TO-PLAY: No real money, entry fees are set to 0
 */

import { eq, and, desc, sql } from "drizzle-orm";
import { getDb } from "./db";
import {
  contests,
  contestEntries,
  leaderboards,
  type Contest,
  type InsertContest,
  type ContestEntry,
  type InsertContestEntry,
  type Leaderboard,
  type InsertLeaderboard,
} from "../drizzle/schema";

// ============================================
// CONTEST MANAGEMENT
// ============================================

export async function createContest(
  matchId: string,
  contestName: string,
  maxEntries: number,
  createdBy: number
): Promise<number> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(contests).values({
      matchId,
      contestName,
      contestType: "public",
      entryFee: "0.00", // FREE TO PLAY
      prizePool: "0.00", // FREE TO PLAY - No real money
      maxEntries,
      winnerCount: Math.ceil(maxEntries * 0.3), // Top 30% get recognition
      prizeDistribution: JSON.stringify([]), // No prizes, just rankings
      status: "upcoming",
      createdBy,
    });

    return Number((result as any).insertId);
  } catch (error) {
    console.error("[Database] Failed to create contest:", error);
    throw error;
  }
}

export async function getContestsByMatch(matchId: string): Promise<Contest[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(contests)
    .where(eq(contests.matchId, matchId))
    .orderBy(desc(contests.createdAt));
}

export async function getContestById(contestId: number): Promise<Contest | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(contests)
    .where(eq(contests.id, contestId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============================================
// CONTEST ENTRIES
// ============================================

export async function joinContest(
  contestId: number,
  userId: number,
  teamId: number
): Promise<number> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    // Check if contest is full
    const contest = await getContestById(contestId);
    if (!contest) {
      throw new Error("Contest not found");
    }

    if (contest.currentEntries >= contest.maxEntries) {
      throw new Error("Contest is full");
    }

    // Check if user already joined with this team
    const existingEntry = await db
      .select()
      .from(contestEntries)
      .where(
        and(
          eq(contestEntries.contestId, contestId),
          eq(contestEntries.userId, userId),
          eq(contestEntries.teamId, teamId)
        )
      )
      .limit(1);

    if (existingEntry.length > 0) {
      throw new Error("You have already joined this contest with this team");
    }

    // Insert entry
    const result = await db.insert(contestEntries).values({
      contestId,
      userId,
      teamId,
      entryFee: "0.00", // FREE TO PLAY
    });

    // Update contest entry count
    await db
      .update(contests)
      .set({
        currentEntries: sql`${contests.currentEntries} + 1`,
      })
      .where(eq(contests.id, contestId));

    // Create leaderboard entry
    await db.insert(leaderboards).values({
      contestId,
      userId,
      teamId,
      totalPoints: "0.00",
    });

    return Number((result as any).insertId);
  } catch (error) {
    console.error("[Database] Failed to join contest:", error);
    throw error;
  }
}

export async function getUserContestEntries(userId: number): Promise<ContestEntry[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(contestEntries)
    .where(eq(contestEntries.userId, userId))
    .orderBy(desc(contestEntries.createdAt));
}

export async function getContestEntries(contestId: number): Promise<ContestEntry[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(contestEntries)
    .where(eq(contestEntries.contestId, contestId));
}

// ============================================
// LEADERBOARDS
// ============================================

export async function getLeaderboard(contestId: number): Promise<Leaderboard[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(leaderboards)
    .where(eq(leaderboards.contestId, contestId))
    .orderBy(desc(leaderboards.totalPoints));
}

export async function updateLeaderboardPoints(
  contestId: number,
  teamId: number,
  points: number
): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    await db
      .update(leaderboards)
      .set({
        totalPoints: points.toString(),
      })
      .where(
        and(
          eq(leaderboards.contestId, contestId),
          eq(leaderboards.teamId, teamId)
        )
      );

    // Recalculate ranks
    await recalculateRanks(contestId);
  } catch (error) {
    console.error("[Database] Failed to update leaderboard points:", error);
  }
}

async function recalculateRanks(contestId: number): Promise<void> {
  const db = await getDb();
  if (!db) return;

  try {
    const leaderboardEntries = await getLeaderboard(contestId);
    
    // Sort by points descending
    leaderboardEntries.sort((a, b) => {
      const pointsA = parseFloat(a.totalPoints);
      const pointsB = parseFloat(b.totalPoints);
      return pointsB - pointsA;
    });

    // Update ranks
    for (let i = 0; i < leaderboardEntries.length; i++) {
      await db
        .update(leaderboards)
        .set({ rank: i + 1 })
        .where(eq(leaderboards.id, leaderboardEntries[i].id));
    }
  } catch (error) {
    console.error("[Database] Failed to recalculate ranks:", error);
  }
}

export async function getUserRankInContest(
  contestId: number,
  userId: number
): Promise<number | null> {
  const db = await getDb();
  if (!db) return null;

  const result = await db
    .select()
    .from(leaderboards)
    .where(
      and(
        eq(leaderboards.contestId, contestId),
        eq(leaderboards.userId, userId)
      )
    )
    .limit(1);

  return result.length > 0 && result[0].rank ? result[0].rank : null;
}
