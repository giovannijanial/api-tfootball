import { Player } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";

class CreatePlayerUseCase {
	async execute({ email, name, teamId }: CreatePlayerDTO): Promise<Player> {
		const playerAlreadyExists = await prismaClient.player.findUnique({
			where: { email },
		});

		if (playerAlreadyExists) {
		}

		const teamExists = await prismaClient.team.findUnique({
			where: {
				id: teamId,
			},
		});

		if (!teamExists) {
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
