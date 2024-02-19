-- CreateTable
CREATE TABLE "PetModel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "ownerPhone" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "dateOfBirth" DATETIME NOT NULL
);
