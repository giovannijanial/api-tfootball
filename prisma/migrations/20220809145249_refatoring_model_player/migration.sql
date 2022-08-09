-- DropForeignKey
ALTER TABLE "players" DROP CONSTRAINT "players_teamId_fkey";

-- AlterTable
ALTER TABLE "players" ALTER COLUMN "teamId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
