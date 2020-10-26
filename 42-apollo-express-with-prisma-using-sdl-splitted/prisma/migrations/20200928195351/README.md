# Migration `20200928195351`

This migration has been generated by mingyuchoo at 9/29/2020, 4:53:51 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `root`.`Comment` DROP FOREIGN KEY `Comment_ibfk_1`

ALTER TABLE `root`.`Post` DROP FOREIGN KEY `Post_ibfk_1`

ALTER TABLE `root`.`Profile` DROP FOREIGN KEY `Profile_ibfk_1`

ALTER TABLE `root`.`Tag` DROP FOREIGN KEY `Tag_ibfk_1`

ALTER TABLE `root`.`_CategoryToPost` DROP FOREIGN KEY `_CategoryToPost_ibfk_1`

ALTER TABLE `root`.`_CategoryToPost` DROP FOREIGN KEY `_CategoryToPost_ibfk_2`

CREATE TABLE `root`.`users` (
`id` int  NOT NULL  AUTO_INCREMENT,
`username` varchar(191)  NOT NULL ,
`email` varchar(191)  NOT NULL ,
`firstName` varchar(191)  ,
`lastName` varchar(191)  ,
`isAdmin` boolean  NOT NULL DEFAULT false,
`role` ENUM('ADMIN', 'USER', 'CUSTOMER')  NOT NULL DEFAULT 'USER',
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
UNIQUE Index `users.username_unique`(`username`),
UNIQUE Index `users.email_unique`(`email`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `root`.`profiles` (
`id` int  NOT NULL  AUTO_INCREMENT,
`bio` varchar(191)  NOT NULL ,
`userId` int  NOT NULL ,
UNIQUE Index `profiles_userId_unique`(`userId`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `root`.`posts` (
`id` int  NOT NULL  AUTO_INCREMENT,
`title` varchar(191)  NOT NULL ,
`content` varchar(191)  ,
`published` boolean  NOT NULL DEFAULT false,
`createdAt` datetime(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3)  NOT NULL ,
`authorId` int  ,
UNIQUE Index `posts.authorId_title_unique`(`authorId`,
`title`),
Index `posts.title_content_index`(`title`,
`content`),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `root`.`categories` (
`id` int  NOT NULL  AUTO_INCREMENT,
`name` varchar(191)  NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `root`.`comments` (
`id` int  NOT NULL ,
`title` varchar(191)  NOT NULL ,
`content` varchar(191)  NOT NULL ,
`postId` int  ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `root`.`tags` (
`name` varchar(191)  NOT NULL ,
`postId` int  ,
PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

ALTER TABLE `root`.`profiles` ADD FOREIGN KEY (`userId`) REFERENCES `root`.`users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `root`.`posts` ADD FOREIGN KEY (`authorId`) REFERENCES `root`.`users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `root`.`comments` ADD FOREIGN KEY (`postId`) REFERENCES `root`.`posts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `root`.`tags` ADD FOREIGN KEY (`postId`) REFERENCES `root`.`posts`(`id`) ON DELETE SET NULL ON UPDATE CASCADE

ALTER TABLE `root`.`_CategoryToPost` ADD FOREIGN KEY (`A`) REFERENCES `root`.`categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `root`.`_CategoryToPost` ADD FOREIGN KEY (`B`) REFERENCES `root`.`posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

DROP TABLE `root`.`Category`

DROP TABLE `root`.`Comment`

DROP TABLE `root`.`Post`

DROP TABLE `root`.`Profile`

DROP TABLE `root`.`Tag`

DROP TABLE `root`.`User`
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200928194259..20200928195351
--- datamodel.dml
+++ datamodel.dml
@@ -1,16 +1,17 @@
 datasource db {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 enum Role {
+  ADMIN
   USER
-  ADMIN
+  CUSTOMER
 }
 model User {
   id        Int      @id @default(autoincrement())
@@ -23,15 +24,17 @@
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   posts     Post[]
   profile   Profile?
+  @@map("users")
 }
 model Profile {
   id     Int    @id @default(autoincrement())
   bio    String
   user   User   @relation(fields: [userId], references: [id])
   userId Int
+  @@map("profiles")
 }
 model Post {
   id         Int        @id @default(autoincrement())
@@ -46,25 +49,29 @@
   comments   Comment[]
   tags       Tag[]
   @@unique([authorId, title])
   @@index([title, content])
+  @@map("posts")
 }
 model Category {
   id    Int    @id @default(autoincrement())
   name  String
   posts Post[] @relation(references: [id])
+  @@map("categories")
 }
 model Comment {
   id      Int    @id
   title   String
   content String
   Post    Post?  @relation(fields: [postId], references: [id])
   postId  Int?
+  @@map("comments")
 }
 model Tag {
   name   String @id
   Post   Post?  @relation(fields: [postId], references: [id])
   postId Int?
+  @@map("tags")
 }
```

