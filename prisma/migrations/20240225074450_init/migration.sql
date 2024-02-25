/*
  Warnings:

  - You are about to drop the column `ip` on the `Team` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Team" (
    "name" TEXT NOT NULL PRIMARY KEY
);
INSERT INTO "new_Team" ("name") SELECT "name" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
