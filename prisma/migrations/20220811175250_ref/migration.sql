/*
  Warnings:

  - You are about to drop the column `teamHomeId` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the column `teamOutId` on the `matches` table. All the data in the column will be lost.
  - You are about to drop the `teams` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_teamHomeId_fkey";

-- DropForeignKey
ALTER TABLE "matches" DROP CONSTRAINT "matches_teamOutId_fkey";

-- AlterTable
ALTER TABLE "matches" DROP COLUMN "teamHomeId",
DROP COLUMN "teamOutId";

-- AlterTable
ALTER TABLE "matches-players" ADD COLUMN     "teamId" TEXT;

-- DropTable
DROP TABLE "teams";

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "matches-players" ADD CONSTRAINT "matches-players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;
