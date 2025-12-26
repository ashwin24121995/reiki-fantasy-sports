/**
 * Cricket API tRPC Routers
 * Exposes cricket data endpoints to the frontend
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { cricketApi } from "./cricketApi";
import { cricketSync } from "./cricketSync";
import {
  getUpcomingMatches,
  getLiveMatches,
  getCompletedMatches,
  getMatchById,
  getMatchSquadWithPlayers,
  getMatchPoints,
  getAllMatches,
} from "./cricketDb";

export const cricketRouter = router({
  // Get upcoming matches
  upcomingMatches: publicProcedure.query(async () => {
    return await getUpcomingMatches();
  }),

  // Get live matches
  liveMatches: publicProcedure.query(async () => {
    return await getLiveMatches();
  }),

  // Get completed matches
  completedMatches: publicProcedure
    .input(z.object({ limit: z.number().optional().default(20) }))
    .query(async ({ input }) => {
      return await getCompletedMatches(input.limit);
    }),

  // Get all matches
  allMatches: publicProcedure.query(async () => {
    return await getAllMatches();
  }),

  // Get match by ID
  matchById: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      const match = await getMatchById(input.matchId);
      if (!match) {
        throw new Error("Match not found");
      }
      return match;
    }),

  // Get match squad with player details
  matchSquad: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      return await getMatchSquadWithPlayers(input.matchId);
    }),

  // Get match points
  matchPoints: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      return await getMatchPoints(input.matchId);
    }),

  // Manually sync a match (admin only)
  syncMatch: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .mutation(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      const success = await cricketSync.syncMatch(input.matchId);
      return { success };
    }),

  // Manually trigger current matches sync (admin only)
  syncCurrentMatches: protectedProcedure.mutation(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    await cricketSync.syncCurrentMatches();
    return { success: true };
  }),

  // Manually trigger upcoming matches sync (admin only)
  syncUpcomingMatches: protectedProcedure.mutation(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    await cricketSync.syncUpcomingMatches();
    return { success: true };
  }),

  // Get sync status (admin only)
  syncStatus: protectedProcedure.query(async ({ ctx }) => {
    if (ctx.user.role !== "admin") {
      throw new Error("Unauthorized: Admin access required");
    }

    return cricketSync.getStatus();
  }),

  // Get match info directly from API (for testing)
  apiMatchInfo: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      return await cricketApi.getMatchInfo(input.matchId);
    }),

  // Get fantasy squad directly from API (for testing)
  apiFantasySquad: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      return await cricketApi.getFantasySquad(input.matchId);
    }),

  // Get fantasy points directly from API (for testing)
  apiFantasyPoints: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input, ctx }) => {
      if (ctx.user.role !== "admin") {
        throw new Error("Unauthorized: Admin access required");
      }

      return await cricketApi.getFantasyMatchPoints(input.matchId);
    }),
});
