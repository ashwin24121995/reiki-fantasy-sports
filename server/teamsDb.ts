/**
 * Fantasy Teams Database Helpers
 * Functions to manage fantasy teams and team players
 */

import { eq, and, desc } from "drizzle-orm";
import { getDb } from "./db";
import {
  fantasyTeams,
  teamPlayers,
  type FantasyTeam,
  type InsertFantasyTeam,
  type TeamPlayer,
  type InsertTeamPlayer,
} from "../drizzle/schema";

// ============================================
// TEAM MANAGEMENT
// ============================================

export async function createTeam(
  userId: number,
  matchId: string,
  teamName: string,
  captainId: string,
  viceCaptainId: string,
  playerIds: string[]
): Promise<number> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    // Insert team
    const result = await db.insert(fantasyTeams).values({
      userId,
      matchId,
      teamName,
      captainId,
      viceCaptainId,
      totalCredits: 100, // Free to play - no budget system
    });

    const teamId = Number((result as any).insertId);

    // Insert team players
    const teamPlayerRecords: InsertTeamPlayer[] = playerIds.map((playerId) => ({
      teamId,
      playerId,
      credits: "10", // Equal credits for all players (free to play) - stored as string
    }));

    await db.insert(teamPlayers).values(teamPlayerRecords);

    return teamId;
  } catch (error) {
    console.error("[Database] Failed to create team:", error);
    throw error;
  }
}

export async function getUserTeams(userId: number): Promise<FantasyTeam[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(fantasyTeams)
    .where(eq(fantasyTeams.userId, userId))
    .orderBy(desc(fantasyTeams.createdAt));
}

export async function getTeamById(teamId: number): Promise<FantasyTeam | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(fantasyTeams)
    .where(eq(fantasyTeams.id, teamId))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getTeamPlayers(teamId: number): Promise<TeamPlayer[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, teamId));
}

export async function deleteTeam(teamId: number, userId: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return false;

  try {
    // Verify team belongs to user
    const team = await getTeamById(teamId);
    if (!team || team.userId !== userId) {
      return false;
    }

    // Delete team players first (foreign key constraint)
    await db.delete(teamPlayers).where(eq(teamPlayers.teamId, teamId));

    // Delete team
    await db.delete(fantasyTeams).where(eq(fantasyTeams.id, teamId));

    return true;
  } catch (error) {
    console.error("[Database] Failed to delete team:", error);
    return false;
  }
}

export async function getTeamsByMatch(matchId: string): Promise<FantasyTeam[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(fantasyTeams)
    .where(eq(fantasyTeams.matchId, matchId))
    .orderBy(desc(fantasyTeams.createdAt));
}

export async function getUserTeamForMatch(
  userId: number,
  matchId: string
): Promise<FantasyTeam | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(fantasyTeams)
    .where(and(eq(fantasyTeams.userId, userId), eq(fantasyTeams.matchId, matchId)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}
