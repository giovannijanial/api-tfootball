import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";
import { UpdatePlayerDTO } from "../../dtos/UpdatePlayerDto";

class UpdatePlayerUseCase {
	async execute(id: string, updatePlayerDTO: UpdatePlayerDTO): Promise<Player> {
		const playerExists = await prismaClient.player.findUnique({
			where: { id },
		});

		if (!playerExists) {
			throw new AppError(`Player Id: ${id} don't exist!`, 404);
		}

		if (updatePlayerDTO.email) {
			const playerEmailAlreadyExists = await prismaClient.player.findUnique({
				where: { email: updatePlayerDTO.email },
			});

			if (
				playerEmailAlreadyExists &&
				playerExists.email !== updatePlayerDTO.email
			) {
				throw new AppError(
					`Player email ${updatePlayerDTO.email}  already exist!`
				);
			}
		}

		const player = await prismaClient.player.update({
			where: {
				id,
			},
			data: { ...updatePlayerDTO },
		});

		return player;
	}
}

export { UpdatePlayerUseCase };
