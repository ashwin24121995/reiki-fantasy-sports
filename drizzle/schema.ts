import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, index, unique } from "drizzle-orm/mysql-core";

/**
 * Fantasy Cricket Platform Database Schema
 * Designed for REIKI ENERGY GLOBAL PRIVATE LIMITED
 */

// ============================================
// USER MANAGEMENT
// ============================================

export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  name: text("name").notNull(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 20 }),
  dateOfBirth: varchar("dateOfBirth", { length: 10 }),
  state: varchar("state", { length: 100 }),
  ageVerified: boolean("ageVerified").default(false).notNull(),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn"),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ============================================
// CRICKET DATA CACHING
// ============================================

export const matches = mysqlTable("matches", {
  id: varchar("id", { length: 64 }).primaryKey(), // Cricket API match ID
  name: text("name").notNull(),
  matchType: mysqlEnum("matchType", ["t20", "odi", "test"]).notNull(),
  status: text("status").notNull(),
  venue: text("venue"),
  date: varchar("date", { length: 20 }).notNull(),
  dateTimeGMT: varchar("dateTimeGMT", { length: 30 }).notNull(),
  teams: text("teams").notNull(), // JSON array of team names
  teamInfo: text("teamInfo").notNull(), // JSON array of team objects
  score: text("score"), // JSON array of score objects
  seriesId: varchar("seriesId", { length: 64 }),
  fantasyEnabled: boolean("fantasyEnabled").default(false).notNull(),
  bbbEnabled: boolean("bbbEnabled").default(false).notNull(),
  hasSquad: boolean("hasSquad").default(false).notNull(),
  matchStarted: boolean("matchStarted").default(false).notNull(),
  matchEnded: boolean("matchEnded").default(false).notNull(),
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  matchStatusIdx: index("match_status_idx").on(table.matchStarted, table.matchEnded),
  matchDateIdx: index("match_date_idx").on(table.dateTimeGMT),
}));

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

export const players = mysqlTable("players", {
  id: varchar("id", { length: 64 }).primaryKey(), // Cricket API player ID
  name: text("name").notNull(),
  country: varchar("country", { length: 100 }),
  role: varchar("role", { length: 50 }).notNull(), // Batsman, Bowler, Allrounder, WK-Batsman
  battingStyle: varchar("battingStyle", { length: 100 }),
  bowlingStyle: varchar("bowlingStyle", { length: 100 }),
  playerImg: text("playerImg"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  playerRoleIdx: index("player_role_idx").on(table.role),
}));

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

export const matchSquads = mysqlTable("match_squads", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 64 }).notNull(),
  playerId: varchar("playerId", { length: 64 }).notNull(),
  teamName: varchar("teamName", { length: 100 }).notNull(),
  teamShortName: varchar("teamShortName", { length: 10 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  matchSquadIdx: index("match_squad_idx").on(table.matchId, table.playerId),
  uniqueMatchPlayer: unique("unique_match_player").on(table.matchId, table.playerId),
}));

export type MatchSquad = typeof matchSquads.$inferSelect;
export type InsertMatchSquad = typeof matchSquads.$inferInsert;

export const matchPoints = mysqlTable("match_points", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 64 }).notNull(),
  playerId: varchar("playerId", { length: 64 }).notNull(),
  points: decimal("points", { precision: 10, scale: 2 }).notNull(),
  inning: varchar("inning", { length: 100 }),
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  matchPointsIdx: index("match_points_idx").on(table.matchId, table.playerId),
  uniqueMatchPlayerInning: unique("unique_match_player_inning").on(table.matchId, table.playerId, table.inning),
}));

export type MatchPoint = typeof matchPoints.$inferSelect;
export type InsertMatchPoint = typeof matchPoints.$inferInsert;

// ============================================
// FANTASY TEAMS
// ============================================

export const fantasyTeams = mysqlTable("fantasy_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: varchar("matchId", { length: 64 }).notNull(),
  teamName: varchar("teamName", { length: 100 }).notNull(),
  captainId: varchar("captainId", { length: 64 }).notNull(),
  viceCaptainId: varchar("viceCaptainId", { length: 64 }).notNull(),
  totalCredits: decimal("totalCredits", { precision: 10, scale: 2 }).default("100.00").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  userTeamsIdx: index("user_teams_idx").on(table.userId, table.matchId),
}));

export type FantasyTeam = typeof fantasyTeams.$inferSelect;
export type InsertFantasyTeam = typeof fantasyTeams.$inferInsert;

export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: varchar("playerId", { length: 64 }).notNull(),
  credits: decimal("credits", { precision: 10, scale: 2 }).default("10.00").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  teamPlayersIdx: index("team_players_idx").on(table.teamId, table.playerId),
  uniqueTeamPlayer: unique("unique_team_player").on(table.teamId, table.playerId),
}));

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

// ============================================
// CONTESTS AND LEAGUES
// ============================================

export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 64 }).notNull(),
  contestName: varchar("contestName", { length: 200 }).notNull(),
  contestType: mysqlEnum("contestType", ["public", "private"]).default("public").notNull(),
  entryFee: decimal("entryFee", { precision: 10, scale: 2 }).notNull(),
  prizePool: decimal("prizePool", { precision: 10, scale: 2 }).notNull(),
  maxEntries: int("maxEntries").notNull(),
  currentEntries: int("currentEntries").default(0).notNull(),
  winnerCount: int("winnerCount").notNull(),
  prizeDistribution: text("prizeDistribution").notNull(), // JSON array of prize breakdown
  status: mysqlEnum("status", ["upcoming", "live", "completed", "cancelled"]).default("upcoming").notNull(),
  createdBy: int("createdBy").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  contestMatchIdx: index("contest_match_idx").on(table.matchId, table.status),
}));

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;

export const contestEntries = mysqlTable("contest_entries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  entryFee: decimal("entryFee", { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  contestEntriesIdx: index("contest_entries_idx").on(table.contestId, table.userId),
}));

export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;

// ============================================
// LEADERBOARDS AND RANKINGS
// ============================================

export const leaderboards = mysqlTable("leaderboards", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  totalPoints: decimal("totalPoints", { precision: 10, scale: 2 }).default("0.00").notNull(),
  rank: int("rank"),
  prizeWon: decimal("prizeWon", { precision: 10, scale: 2 }).default("0.00"),
  lastUpdated: timestamp("lastUpdated").defaultNow().onUpdateNow().notNull(),
}, (table) => ({
  leaderboardContestIdx: index("leaderboard_contest_idx").on(table.contestId, table.rank),
  uniqueContestUserTeam: unique("unique_contest_user_team").on(table.contestId, table.userId, table.teamId),
}));

export type Leaderboard = typeof leaderboards.$inferSelect;
export type InsertLeaderboard = typeof leaderboards.$inferInsert;

// ============================================
// TRANSACTIONS AND WALLET
// ============================================

export const transactions = mysqlTable("transactions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  transactionType: mysqlEnum("transactionType", ["deposit", "withdrawal", "contest_entry", "prize_won", "refund"]).notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  balanceBefore: decimal("balanceBefore", { precision: 10, scale: 2 }).notNull(),
  balanceAfter: decimal("balanceAfter", { precision: 10, scale: 2 }).notNull(),
  description: text("description"),
  referenceId: int("referenceId"), // Contest ID or Entry ID
  status: mysqlEnum("status", ["pending", "completed", "failed"]).default("completed").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
}, (table) => ({
  userTransactionsIdx: index("user_transactions_idx").on(table.userId, table.createdAt),
}));

export type Transaction = typeof transactions.$inferSelect;
export type InsertTransaction = typeof transactions.$inferInsert;

// ============================================
// SYSTEM SETTINGS
// ============================================

export const systemSettings = mysqlTable("system_settings", {
  id: int("id").autoincrement().primaryKey(),
  settingKey: varchar("settingKey", { length: 100 }).notNull().unique(),
  settingValue: text("settingValue").notNull(),
  description: text("description"),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SystemSetting = typeof systemSettings.$inferSelect;
export type InsertSystemSetting = typeof systemSettings.$inferInsert;
