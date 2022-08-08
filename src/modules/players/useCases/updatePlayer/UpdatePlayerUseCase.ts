import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { UpdatePlayerDTO } from "../../dtos/UpdatePlayerDto";
import { preloadPositionByName } from "../../utils/PreloadPositionByName";

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

		const position =
			updatePlayerDTO.positionName &&
			(await preloadPositionByName(updatePlayerDTO.positionName));

		const player = await prismaClient.player.update({
			where: {
				id,
			},
			data: {
				name: updatePlayerDTO.name,
				age: updatePlayerDTO.age,
				email: updatePlayerDTO.email,
				password: updatePlayerDTO.password,
				teamId: updatePlayerDTO.teamId,
				positionId: position && position.id,
			},
		});

		return player;
	}
}

export { UpdatePlayerUseCase };
