/*
  Warnings:

  - Added the required column `age` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `positionId` to the `players` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "players" ADD COLUMN     "age" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "positionId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Position_name_key" ON "Position"("name");

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
