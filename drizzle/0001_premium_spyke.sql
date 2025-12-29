CREATE TABLE `contest_entries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`entryFee` decimal(10,2) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `contest_entries_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `contests` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` varchar(64) NOT NULL,
	`contestName` varchar(200) NOT NULL,
	`contestType` enum('public','private') NOT NULL DEFAULT 'public',
	`entryFee` decimal(10,2) NOT NULL,
	`prizePool` decimal(10,2) NOT NULL,
	`maxEntries` int NOT NULL,
	`currentEntries` int NOT NULL DEFAULT 0,
	`winnerCount` int NOT NULL,
	`prizeDistribution` text NOT NULL,
	`status` enum('upcoming','live','completed','cancelled') NOT NULL DEFAULT 'upcoming',
	`createdBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `contests_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `fantasy_teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` varchar(64) NOT NULL,
	`teamName` varchar(100) NOT NULL,
	`captainId` varchar(64) NOT NULL,
	`viceCaptainId` varchar(64) NOT NULL,
	`totalCredits` decimal(10,2) NOT NULL DEFAULT '100.00',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `fantasy_teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `leaderboards` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contestId` int NOT NULL,
	`userId` int NOT NULL,
	`teamId` int NOT NULL,
	`totalPoints` decimal(10,2) NOT NULL DEFAULT '0.00',
	`rank` int,
	`prizeWon` decimal(10,2) DEFAULT '0.00',
	`lastUpdated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `leaderboards_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_contest_user_team` UNIQUE(`contestId`,`userId`,`teamId`)
);
--> statement-breakpoint
CREATE TABLE `match_points` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` varchar(64) NOT NULL,
	`playerId` varchar(64) NOT NULL,
	`points` decimal(10,2) NOT NULL,
	`inning` varchar(100),
	`lastUpdated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `match_points_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_match_player_inning` UNIQUE(`matchId`,`playerId`,`inning`)
);
--> statement-breakpoint
CREATE TABLE `match_squads` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` varchar(64) NOT NULL,
	`playerId` varchar(64) NOT NULL,
	`teamName` varchar(100) NOT NULL,
	`teamShortName` varchar(10) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `match_squads_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_match_player` UNIQUE(`matchId`,`playerId`)
);
--> statement-breakpoint
CREATE TABLE `matches` (
	`id` varchar(64) NOT NULL,
	`name` text NOT NULL,
	`matchType` enum('t20','odi','test') NOT NULL,
	`status` text NOT NULL,
	`venue` text,
	`date` varchar(20) NOT NULL,
	`dateTimeGMT` varchar(30) NOT NULL,
	`teams` text NOT NULL,
	`teamInfo` text NOT NULL,
	`score` text,
	`seriesId` varchar(64),
	`fantasyEnabled` boolean NOT NULL DEFAULT false,
	`bbbEnabled` boolean NOT NULL DEFAULT false,
	`hasSquad` boolean NOT NULL DEFAULT false,
	`matchStarted` boolean NOT NULL DEFAULT false,
	`matchEnded` boolean NOT NULL DEFAULT false,
	`lastUpdated` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `matches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` varchar(64) NOT NULL,
	`name` text NOT NULL,
	`country` varchar(100),
	`role` varchar(50) NOT NULL,
	`battingStyle` varchar(100),
	`bowlingStyle` varchar(100),
	`playerImg` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `system_settings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`settingKey` varchar(100) NOT NULL,
	`settingValue` text NOT NULL,
	`description` text,
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `system_settings_id` PRIMARY KEY(`id`),
	CONSTRAINT `system_settings_settingKey_unique` UNIQUE(`settingKey`)
);
--> statement-breakpoint
CREATE TABLE `team_players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` varchar(64) NOT NULL,
	`credits` decimal(10,2) NOT NULL DEFAULT '10.00',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `team_players_id` PRIMARY KEY(`id`),
	CONSTRAINT `unique_team_player` UNIQUE(`teamId`,`playerId`)
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`transactionType` enum('deposit','withdrawal','contest_entry','prize_won','refund') NOT NULL,
	`amount` decimal(10,2) NOT NULL,
	`balanceBefore` decimal(10,2) NOT NULL,
	`balanceAfter` decimal(10,2) NOT NULL,
	`description` text,
	`referenceId` int,
	`status` enum('pending','completed','failed') NOT NULL DEFAULT 'completed',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `transactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `walletBalance` decimal(10,2) DEFAULT '0.00' NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `totalEarnings` decimal(10,2) DEFAULT '0.00' NOT NULL;--> statement-breakpoint
CREATE INDEX `contest_entries_idx` ON `contest_entries` (`contestId`,`userId`);--> statement-breakpoint
CREATE INDEX `contest_match_idx` ON `contests` (`matchId`,`status`);--> statement-breakpoint
CREATE INDEX `user_teams_idx` ON `fantasy_teams` (`userId`,`matchId`);--> statement-breakpoint
CREATE INDEX `leaderboard_contest_idx` ON `leaderboards` (`contestId`,`rank`);--> statement-breakpoint
CREATE INDEX `match_points_idx` ON `match_points` (`matchId`,`playerId`);--> statement-breakpoint
CREATE INDEX `match_squad_idx` ON `match_squads` (`matchId`,`playerId`);--> statement-breakpoint
CREATE INDEX `match_status_idx` ON `matches` (`matchStarted`,`matchEnded`);--> statement-breakpoint
CREATE INDEX `match_date_idx` ON `matches` (`dateTimeGMT`);--> statement-breakpoint
CREATE INDEX `player_role_idx` ON `players` (`role`);--> statement-breakpoint
CREATE INDEX `team_players_idx` ON `team_players` (`teamId`,`playerId`);--> statement-breakpoint
CREATE INDEX `user_transactions_idx` ON `transactions` (`userId`,`createdAt`);