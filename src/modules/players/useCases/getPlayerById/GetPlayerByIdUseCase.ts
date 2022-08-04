import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class GetPlayerByIdUseCase {
	async execute(id: string): Promise<Player> {
		const player = await prismaClient.player.findUnique({
			where: {
				id,
			},
			include: {
				team: {
					select: {
						name: true,
					},
				},
			},
		});

		if (!player) {
			throw new AppError(`Player ID: ${id} don't exist`, 404);
		}

		return player;
	}
}

export { GetPlayerByIdUseCase };
