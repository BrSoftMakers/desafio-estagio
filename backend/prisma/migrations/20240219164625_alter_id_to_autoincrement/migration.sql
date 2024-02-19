/*
  Warnings:

  - You are about to drop the `PetModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "PetModel";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Pet" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "ownerPhone" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL
);
