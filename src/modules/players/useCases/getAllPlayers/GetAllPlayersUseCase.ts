import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class GetPlayersUseCase {
	async execute(): Promise<Player[]> {
		const players = await prismaClient.player.findMany({
			include: {
				team: {
					select: {
						name: true,
					},
				},
				position: {
					select: {
						name: true,
					},
				},
			},
		});
		return players;
	}
}

export { GetPlayersUseCase };
