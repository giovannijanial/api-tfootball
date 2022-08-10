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

		if (!player) {
			throw new AppError(`Player ID: ${id} don't exist`, 404);
		}

		return player;
	}
}

export { GetPlayerByIdUseCase };
