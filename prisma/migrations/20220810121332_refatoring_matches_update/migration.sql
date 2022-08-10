/*
  Warnings:

  - You are about to drop the column `teamId` on the `players` table. All the data in the column will be lost.
  - Added the required column `playerCaptainId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_teamId_fkey";

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "playerCaptainId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "players" DROP COLUMN "teamId";

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_playerCaptainId_fkey" FOREIGN KEY ("playerCaptainId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
