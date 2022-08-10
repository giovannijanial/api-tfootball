-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_teamHomeId_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_teamOutId_fkey";

-- AlterTable
ALTER TABLE "matches" ALTER COLUMN "teamHomeId" DROP NOT NULL,
ALTER COLUMN "teamOutId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "matches-players" (
    "playerId" TEXT NOT NULL,
    "matchId" TEXT NOT NULL,

    CONSTRAINT "matches-players_pkey" PRIMARY KEY ("playerId","matchId")
);

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_teamHomeId_fkey" FOREIGN KEY ("teamHomeId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches" ADD CONSTRAINT "matches_teamOutId_fkey" FOREIGN KEY ("teamOutId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches-players" ADD CONSTRAINT "matches-players_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "players"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matches-players" ADD CONSTRAINT "matches-players_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
