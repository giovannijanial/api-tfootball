/*
  Warnings:

  - You are about to drop the `matches_teams` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamHomeId` to the `matches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamOutId` to the `matches` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "matches_teams" DROP CONSTRAINT "matches_teams_matchId_fkey";

-- DropForeignKey
ALTER TABLE "matches_teams" DROP CONSTRAINT "matches_teams_teamId_fkey";

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "teamHomeId" TEXT NOT NULL,
ADD COLUMN     "teamOutId" TEXT NOT NULL;

-- DropTable
DROP TABLE "matches_teams";

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_teamHomeId_fkey" FOREIGN KEY ("teamHomeId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_teamOutId_fkey" FOREIGN KEY ("teamOutId") REFERENCES "teams"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
