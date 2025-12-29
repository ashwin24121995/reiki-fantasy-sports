/**
 * Contests tRPC Router
 * Handles contest creation, joining, and leaderboards
 * FREE-TO-PLAY: No real money involved
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  createContest,
  getContestsByMatch,
  getContestById,
  joinContest,
  getUserContestEntries,
  getContestEntries,
  getLeaderboard,
  getUserRankInContest,
} from "./contestsDb";

export const contestsRouter = router({
  /**
   * Get all contests for a match
   */
  byMatch: publicProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input }) => {
      const contests = await getContestsByMatch(input.matchId);
      return contests;
    }),

  /**
   * Get contest details by ID
   */
  byId: publicProcedure
    .input(z.object({ contestId: z.number() }))
    .query(async ({ input }) => {
      const contest = await getContestById(input.contestId);
      if (!contest) {
        throw new Error("Contest not found");
      }
      return contest;
    }),

  /**
   * Create a new contest (admin or match creator)
   */
  create: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
        contestName: z.string().min(3).max(200),
        maxEntries: z.number().min(2).max(10000),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const contestId = await createContest(
        input.matchId,
        input.contestName,
        input.maxEntries,
        ctx.user.id
      );

      return { contestId, success: true };
    }),

  /**
   * Join a contest with a team
   */
  join: protectedProcedure
    .input(
      z.object({
        contestId: z.number(),
        teamId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const entryId = await joinContest(
        input.contestId,
        ctx.user.id,
        input.teamId
      );

      return { entryId, success: true };
    }),

  /**
   * Get user's contest entries
   */
  myEntries: protectedProcedure.query(async ({ ctx }) => {
    const entries = await getUserContestEntries(ctx.user.id);
    return entries;
  }),

  /**
   * Get all entries for a contest
   */
  entries: publicProcedure
    .input(z.object({ contestId: z.number() }))
    .query(async ({ input }) => {
      const entries = await getContestEntries(input.contestId);
      return entries;
    }),

  /**
   * Get leaderboard for a contest
   */
  leaderboard: publicProcedure
    .input(z.object({ contestId: z.number() }))
    .query(async ({ input }) => {
      const leaderboard = await getLeaderboard(input.contestId);
      return leaderboard;
    }),

  /**
   * Get user's rank in a contest
   */
  myRank: protectedProcedure
    .input(z.object({ contestId: z.number() }))
    .query(async ({ input, ctx }) => {
      const rank = await getUserRankInContest(input.contestId, ctx.user.id);
      return { rank };
    }),
});
