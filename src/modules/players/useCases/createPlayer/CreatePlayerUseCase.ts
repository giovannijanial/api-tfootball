import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";

class CreatePlayerUseCase {
	async execute({ email, name, teamId }: CreatePlayerDTO): Promise<Player> {
		const playerAlreadyExists = await prismaClient.player.findUnique({
			where: { email },
		});

		if (playerAlreadyExists) {
			throw new AppError("User already exist!");
		}

		const teamExists = await prismaClient.team.findUnique({
			where: {
				id: teamId,
			},
		});

		if (!teamExists) {
			throw new AppError("Team don't exist!");
		}

		const player = await prismaClient.player.create({
			data: {
				name,
				email,
				teamId,
			},
		});

		return player;
	}
}

export { CreatePlayerUseCase };
