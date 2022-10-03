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
		for (let i = 0; i < quantityPlayers / 2; i++) {
			const player = arrShuffle.pop();
			if (player) {
				await prismaClient.matchesPlayers.update({
					where: {
						id: player.id,
					},
					data: {
						teamId: teamHome.id,
					},
				});
			}
			arrShuffle = shuffleArray(arrShuffle);
		}
		for (const player of arrShuffle) {
			const updated = await prismaClient.matchesPlayers.update({
				where: {
					id: player.id,
				},
				data: {
					teamId: teamOut.id,
				},
			});
			console.log(updated);
		}

		return { teamHome, teamOut };
	}
}

export { DrawMatchTeamsUseCase };
