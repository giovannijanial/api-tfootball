import { MatchesPlayers, prisma } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { shuffleArray } from "../../../players/utils/ShuffleArray";

class DrawMatchTeamsUseCase {
	async execute(matchId: string) {
		const matchExist = await prismaClient.match.findUnique({
			where: { id: matchId },
			select: {
				id: true,
				players: true,
			},
		});

		if (!matchExist) {
			throw new AppError(`Match Id ${matchId} not exist!`);
		}

		const quantityPlayers = matchExist.players.length;
		const matchPlayers = matchExist.players;

		const teamHome = await prismaClient.team.create({ data: {} });
		const teamOut = await prismaClient.team.create({ data: {} });

		let arrShuffle = shuffleArray(matchPlayers);
		arrShuffle.forEach((player, index) => {
			if (index % 2 === 0) {
				player.teamId == teamHome.id;
			} else {
				player.teamId == teamHome.id;
			}
		});

		for (const player of arrShuffle) {
			await prismaClient.matchesPlayers.update({
				where: {
					id: player.id,
				},
				data: {
					teamId: player.teamId,
				},
			});
		}

		return { teamHome, teamOut };
	}
}

export { DrawMatchTeamsUseCase };
