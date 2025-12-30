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
import { getMatchById, getAllMatches } from "./cricketDb";

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
   * Seed contests for ALL matches (bulk operation)
   * Creates default free contests for all matches that don't have contests yet
   */
  seedAll: publicProcedure.mutation(async () => {
    const allMatches = await getAllMatches();
    let totalCreated = 0;
    let totalSkipped = 0;
    const errors = [];

    for (const match of allMatches) {
      try {
        // Check if contests already exist
        const existingContests = await getContestsByMatch(match.id);
        if (existingContests.length > 0) {
          totalSkipped++;
          continue;
        }

        // Create 3 free contests with different sizes
        const contestsToCreate = [
          { name: "Mega Contest", maxEntries: 10000 },
          { name: "Practice Contest", maxEntries: 1000 },
          { name: "Beginner Contest", maxEntries: 100 },
        ];

        for (const contest of contestsToCreate) {
          try {
            await createContest(
              match.id,
              `${contest.name} - ${match.name}`,
              contest.maxEntries,
              1 // System user ID
            );
            totalCreated++;
          } catch (error) {
            console.error(`Failed to create ${contest.name} for match ${match.id}:`, error);
          }
        }
      } catch (error) {
        errors.push({ matchId: match.id, error: String(error) });
      }
    }

    return {
      success: true,
      message: `Seeded ${totalCreated} contests across ${allMatches.length} matches (${totalSkipped} matches already had contests)`,
      totalMatches: allMatches.length,
      totalCreated,
      totalSkipped,
      errors: errors.length > 0 ? errors : undefined,
    };
  }),

  /**
   * Seed contests for a match (create default free contests)
   * Called automatically when new matches are synced
   */
  seed: publicProcedure
    .input(
      z.object({
        matchId: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const match = await getMatchById(input.matchId);
      if (!match) {
        throw new Error("Match not found");
      }

      // Check if contests already exist for this match
      const existingContests = await getContestsByMatch(input.matchId);
      if (existingContests.length > 0) {
        return {
          success: true,
          message: "Contests already exist for this match",
          contests: existingContests,
        };
      }

      // Create 3 free contests with different sizes
      const contestsToCreate = [
        { name: "Mega Contest", maxEntries: 10000 },
        { name: "Practice Contest", maxEntries: 1000 },
        { name: "Beginner Contest", maxEntries: 100 },
      ];

      const createdContests = [];
      for (const contest of contestsToCreate) {
        try {
          const contestId = await createContest(
            input.matchId,
            `${contest.name} - ${match.name}`,
            contest.maxEntries,
            1 // System user ID
          );
          const newContest = await getContestById(contestId);
          if (newContest) {
            createdContests.push(newContest);
          }
        } catch (error) {
          console.error(`Failed to create ${contest.name}:`, error);
        }
      }

      return {
        success: true,
        message: `Created ${createdContests.length} contests`,
        contests: createdContests,
      };
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
