import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class RemovePlayerUseCase {
	async execute(id: string): Promise<Player> {
		const playerExist = await prismaClient.player.findUnique({
			where: { id },
		});

		if (!playerExist) {
			throw new AppError(`Player Id: ${id} don't exist!`, 404);
		}

		const playerRemoved = await prismaClient.player.delete({
			where: {
				id,
			},
		});

		return playerRemoved;
	}
}

export { RemovePlayerUseCase };
