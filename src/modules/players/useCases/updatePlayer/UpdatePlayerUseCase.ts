import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";
import { UpdatePlayerDTO } from "../../dtos/UpdatePlayerDto";

class UpdatePlayerUseCase {
	async execute(id: string, updatePlayerDto: UpdatePlayerDTO): Promise<Player> {
		const playerExists = await prismaClient.player.findUnique({
			where: { id },
		});

		if (!playerExists) {
			throw new AppError(`Player Id: ${id} don't exist!`, 404);
		}

		const player = await prismaClient.player.update({
			where: {
				id,
			},
			data: { ...updatePlayerDto },
		});

		return player;
	}
}

export { UpdatePlayerUseCase };
