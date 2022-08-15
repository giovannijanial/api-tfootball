import { MatchesPlayers, prisma } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class DrawMatchTeamsUseCase {
	async execute(matchId: string) {
		const matchExist = await prismaClient.match.findUnique({
			where: { id: matchId },
			select: {
				players: true,
			},
		});

		if (!matchExist) {
			throw new AppError(`Match Id ${matchId} not exist!`);
		}

		const quantityPlayers = matchExist.players.length;
		const matchPlayers = matchExist.players;
		const teamA: MatchesPlayers[] = [];
		const teamB: MatchesPlayers[] = [];

		for (let i = 0; i < quantityPlayers / 2; i++) {
			const n = Math.floor(Math.random() * matchPlayers.length);
			teamA.push(matchPlayers[n]);
			matchPlayers.splice(n, 1);
		}
		matchPlayers.map((player) => teamB.push(player));

		const teamHome = await prismaClient.team.create({ data: {} });
		const teamOut = await prismaClient.team.create({ data: {} });

		const match = await prismaClient.matchesPlayers.update({
			where: {
				id: matchId,
			},
			data: { ...updateMatchDTO },
		});

		return teamA;
	}
}

export { DrawMatchTeamsUseCase };
