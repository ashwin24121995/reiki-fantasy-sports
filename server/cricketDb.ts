/**
 * Cricket Data Database Helpers
 * Functions to store and retrieve cricket data from the database
 */

import { eq, and, desc, inArray } from "drizzle-orm";
import { getDb } from "./db";
import {
  matches,
  players,
  matchSquads,
  matchPoints,
  type Match,
  type InsertMatch,
  type Player,
  type InsertPlayer,
  type MatchSquad,
  type InsertMatchSquad,
  type MatchPoint,
  type InsertMatchPoint,
} from "../drizzle/schema";
import type { MatchData, PlayerData, SquadData, MatchPointsData } from "./cricketApi";

// ============================================
// MATCH MANAGEMENT
// ============================================

export async function upsertMatch(matchData: MatchData): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert match: database not available");
    return;
  }

  try {
    const matchRecord: InsertMatch = {
      id: matchData.id,
      name: matchData.name,
      matchType: matchData.matchType,
      status: matchData.status,
      venue: matchData.venue || null,
      date: matchData.date,
      dateTimeGMT: matchData.dateTimeGMT,
      teams: JSON.stringify(matchData.teams),
      teamInfo: JSON.stringify(matchData.teamInfo),
      score: matchData.score ? JSON.stringify(matchData.score) : null,
      seriesId: matchData.series_id || null,
      fantasyEnabled: matchData.fantasyEnabled,
      bbbEnabled: matchData.bbbEnabled,
      hasSquad: matchData.hasSquad,
      matchStarted: matchData.matchStarted,
      matchEnded: matchData.matchEnded,
    };

    await db.insert(matches).values(matchRecord).onDuplicateKeyUpdate({
      set: {
        status: matchRecord.status,
        score: matchRecord.score,
        matchStarted: matchRecord.matchStarted,
        matchEnded: matchRecord.matchEnded,
        lastUpdated: new Date(),
      },
    });
  } catch (error) {
    console.error("[Database] Failed to upsert match:", error);
    throw error;
  }
}

export async function getMatchById(matchId: string): Promise<Match | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(matches).where(eq(matches.id, matchId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUpcomingMatches(): Promise<Match[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(and(eq(matches.matchStarted, false), eq(matches.matchEnded, false)))
    .orderBy(matches.dateTimeGMT);
}

export async function getLiveMatches(): Promise<Match[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(and(eq(matches.matchStarted, true), eq(matches.matchEnded, false)))
    .orderBy(desc(matches.lastUpdated));
}

export async function getCompletedMatches(limit: number = 20): Promise<Match[]> {
  const db = await getDb();
  if (!db) return [];

  return await db
    .select()
    .from(matches)
    .where(eq(matches.matchEnded, true))
    .orderBy(desc(matches.dateTimeGMT))
    .limit(limit);
}

export async function getAllMatches(): Promise<Match[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(matches).orderBy(desc(matches.dateTimeGMT));
}

// ============================================
// PLAYER MANAGEMENT
// ============================================

export async function upsertPlayer(playerData: PlayerData): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert player: database not available");
    return;
  }

  try {
    const playerRecord: InsertPlayer = {
      id: playerData.id,
      name: playerData.name,
      country: playerData.country || null,
      role: playerData.role,
      battingStyle: playerData.battingStyle || null,
      bowlingStyle: playerData.bowlingStyle || null,
      playerImg: playerData.playerImg || null,
    };

    await db.insert(players).values(playerRecord).onDuplicateKeyUpdate({
      set: {
        name: playerRecord.name,
        role: playerRecord.role,
        battingStyle: playerRecord.battingStyle,
        bowlingStyle: playerRecord.bowlingStyle,
        playerImg: playerRecord.playerImg,
        updatedAt: new Date(),
      },
    });
  } catch (error) {
    console.error("[Database] Failed to upsert player:", error);
    throw error;
  }
}

export async function getPlayerById(playerId: string): Promise<Player | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getPlayersByIds(playerIds: string[]): Promise<Player[]> {
  const db = await getDb();
  if (!db || playerIds.length === 0) return [];

  return await db.select().from(players).where(inArray(players.id, playerIds));
}

export async function getAllPlayers(): Promise<Player[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(players);
}

// ============================================
// MATCH SQUAD MANAGEMENT
// ============================================

export async function upsertMatchSquad(
  matchId: string,
  squadData: SquadData[]
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert match squad: database not available");
    return;
  }

  try {
    // First, upsert all players
    for (const squad of squadData) {
      for (const player of squad.players) {
        await upsertPlayer(player);
      }
    }

    // Then, insert squad entries
    for (const squad of squadData) {
      for (const player of squad.players) {
        const squadRecord: InsertMatchSquad = {
          matchId,
          playerId: player.id,
          teamName: squad.teamName,
          teamShortName: squad.shortName || squad.teamName.substring(0, 3).toUpperCase(), // Fallback if shortName is missing
        };

        await db.insert(matchSquads).values(squadRecord).onDuplicateKeyUpdate({
          set: {
            teamName: squadRecord.teamName,
            teamShortName: squadRecord.teamShortName,
          },
        });
      }
    }
  } catch (error) {
    console.error("[Database] Failed to upsert match squad:", error);
    throw error;
  }
}

export async function getMatchSquad(matchId: string): Promise<MatchSquad[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(matchSquads).where(eq(matchSquads.matchId, matchId));
}

export async function getMatchSquadWithPlayers(matchId: string): Promise<
  Array<MatchSquad & { player: Player }>
> {
  const db = await getDb();
  if (!db) return [];

  const squads = await db.select().from(matchSquads).where(eq(matchSquads.matchId, matchId));

  const playerIds = squads.map((s) => s.playerId);
  const playersData = await getPlayersByIds(playerIds);

  const playerMap = new Map(playersData.map((p) => [p.id, p]));

  return squads
    .map((squad) => {
      const player = playerMap.get(squad.playerId);
      if (!player) return null;
      return { ...squad, player };
    })
    .filter((item): item is MatchSquad & { player: Player } => item !== null);
}

// ============================================
// MATCH POINTS MANAGEMENT
// ============================================

export async function upsertMatchPoints(
  matchId: string,
  pointsData: MatchPointsData
): Promise<void> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert match points: database not available");
    return;
  }

  try {
    for (const inning of pointsData.innings) {
      // Insert batting points
      for (const battingPlayer of inning.batting) {
        const pointRecord: InsertMatchPoint = {
          matchId,
          playerId: battingPlayer.id,
          points: battingPlayer.points.toString(),
          inning: inning.inning,
        };

        await db.insert(matchPoints).values(pointRecord).onDuplicateKeyUpdate({
          set: {
            points: pointRecord.points,
            lastUpdated: new Date(),
          },
        });
      }

      // Insert bowling points
      for (const bowlingPlayer of inning.bowling) {
        const pointRecord: InsertMatchPoint = {
          matchId,
          playerId: bowlingPlayer.id,
          points: bowlingPlayer.points.toString(),
          inning: inning.inning,
        };

        await db.insert(matchPoints).values(pointRecord).onDuplicateKeyUpdate({
          set: {
            points: pointRecord.points,
            lastUpdated: new Date(),
          },
        });
      }
    }
  } catch (error) {
    console.error("[Database] Failed to upsert match points:", error);
    throw error;
  }
}

export async function getMatchPoints(matchId: string): Promise<MatchPoint[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(matchPoints).where(eq(matchPoints.matchId, matchId));
}

export async function getPlayerPointsForMatch(
  matchId: string,
  playerId: string
): Promise<number> {
  const db = await getDb();
  if (!db) return 0;

  const points = await db
    .select()
    .from(matchPoints)
    .where(and(eq(matchPoints.matchId, matchId), eq(matchPoints.playerId, playerId)));

  return points.reduce((total, point) => total + parseFloat(point.points), 0);
}
