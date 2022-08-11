import { MatchesPlayers, Prisma } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class JoinMatchUseCase {
	async execute(matchId: string, playerId: string): Promise<MatchesPlayers> {
		const matchExist = await prismaClient.match.findUnique({
			where: { id: matchId },
		});

		if (!matchExist) {
			throw new AppError(`Match Id ${matchId} don't exist!`);
		}

		const playerExist = await prismaClient.player.findUnique({
			where: { id: playerId },
			select: {
				matches: true,
			},
		});

		if (!playerExist) {
			throw new AppError(`Player Id ${matchId} don't exist!`);
		}

		const playerAlreadyInMatch = playerExist.matches.find(
			(match) => match.matchId === matchId
		);

		if (playerAlreadyInMatch) {
			throw new AppError(`Player Id ${matchId} already in the match!`);
		}

		const matchesPlayers = await prismaClient.matchesPlayers.create({
			data: {
				playerId,
				matchId,
			},
		});

		return matchesPlayers;
	}
}

export { JoinMatchUseCase };
