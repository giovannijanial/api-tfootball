import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class GetPlayersUseCase {
	async execute(): Promise<Player[]> {
		const players = await prismaClient.player.findMany({
			include: {
				position: {
					select: {
						name: true,
					},
				},
				matches: {
					select: {
						match: {
							select: {
								id: true,
							},
						},
					},
				},
			},
		});
		return players;
	}
}

export { GetPlayersUseCase };
