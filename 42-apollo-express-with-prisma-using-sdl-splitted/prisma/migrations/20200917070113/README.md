# Migration `20200917070113`

This migration has been generated by mingyuchoo at 9/17/2020, 4:01:14 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "email" TEXT NOT NULL,
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "age" INTEGER,
    "postCount" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("email", "id", "name", "age") SELECT "email", "id", "name", "age" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200917063816..20200917070113
--- datamodel.dml
+++ datamodel.dml
@@ -1,19 +1,20 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  email String  @unique
-  id    Int     @default(autoincrement()) @id
-  name  String?
-  age   Int?
-  posts Post[]
+  email     String  @unique
+  id        Int     @default(autoincrement()) @id
+  name      String?
+  age       Int?
+  postCount Int     @default(0)
+  posts     Post[]
 }
 model Post {
   authorId  Int?
```

