ALTER TABLE `users` ADD `openId` varchar(255);--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_openId_unique` UNIQUE(`openId`);