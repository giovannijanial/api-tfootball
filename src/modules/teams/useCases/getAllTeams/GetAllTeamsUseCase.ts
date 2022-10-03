import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class GetTeamsUseCase {
	async execute(): Promise<Team[]> {
		const teams = await prismaClient.team.findMany({
			include: {
				MatchesPlayers: {
					select: {
						player: true,
					},
				},
			},
		});
		return teams;
	}
}

export { GetTeamsUseCase };
