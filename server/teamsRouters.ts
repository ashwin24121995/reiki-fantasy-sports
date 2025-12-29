/**
 * Teams tRPC Router
 * Handles fantasy team creation and management
 */

import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import {
  createTeam,
  getUserTeams,
  getTeamById,
  getTeamPlayers,
  deleteTeam,
  getUserTeamForMatch,
} from "./teamsDb";
import { getPlayersByIds } from "./cricketDb";

export const teamsRouter = router({
  /**
   * Create a new fantasy team
   */
  createTeam: protectedProcedure
    .input(
      z.object({
        matchId: z.string(),
        teamName: z.string().min(1).max(100),
        captainId: z.string(),
        viceCaptainId: z.string(),
        playerIds: z.array(z.string()).length(11), // Must have exactly 11 players
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { matchId, teamName, captainId, viceCaptainId, playerIds } = input;
      const userId = ctx.user.id;

      // Validate captain and vice-captain are in the team
      if (!playerIds.includes(captainId)) {
        throw new Error("Captain must be one of the selected players");
      }
      if (!playerIds.includes(viceCaptainId)) {
        throw new Error("Vice-captain must be one of the selected players");
      }
      if (captainId === viceCaptainId) {
        throw new Error("Captain and vice-captain must be different players");
      }

      // Check if user already has a team for this match
      const existingTeam = await getUserTeamForMatch(userId, matchId);
      if (existingTeam) {
        throw new Error("You already have a team for this match");
      }

      const teamId = await createTeam(
        userId,
        matchId,
        teamName,
        captainId,
        viceCaptainId,
        playerIds
      );

      return { teamId, success: true };
    }),

  /**
   * Get all teams for the current user
   */
  myTeams: protectedProcedure.query(async ({ ctx }) => {
    const teams = await getUserTeams(ctx.user.id);
    return teams;
  }),

  /**
   * Get team details by ID
   */
  teamById: protectedProcedure
    .input(z.object({ teamId: z.number() }))
    .query(async ({ input, ctx }) => {
      const team = await getTeamById(input.teamId);
      
      if (!team) {
        throw new Error("Team not found");
      }

      // Verify team belongs to user
      if (team.userId !== ctx.user.id) {
        throw new Error("Unauthorized");
      }

      // Get team players
      const teamPlayerRecords = await getTeamPlayers(team.id);
      const playerIds = teamPlayerRecords.map((tp) => tp.playerId);
      const players = await getPlayersByIds(playerIds);

      return {
        team,
        players,
      };
    }),

  /**
   * Delete a team
   */
  deleteTeam: protectedProcedure
    .input(z.object({ teamId: z.number() }))
    .mutation(async ({ input, ctx }) => {
      const success = await deleteTeam(input.teamId, ctx.user.id);
      
      if (!success) {
        throw new Error("Failed to delete team or team not found");
      }

      return { success: true };
    }),

  /**
   * Get user's team for a specific match
   */
  myTeamForMatch: protectedProcedure
    .input(z.object({ matchId: z.string() }))
    .query(async ({ input, ctx }) => {
      const team = await getUserTeamForMatch(ctx.user.id, input.matchId);
      
      if (!team) {
        return null;
      }

      // Get team players
      const teamPlayerRecords = await getTeamPlayers(team.id);
      const playerIds = teamPlayerRecords.map((tp) => tp.playerId);
      const players = await getPlayersByIds(playerIds);

      return {
        team,
        players,
      };
    }),
});
