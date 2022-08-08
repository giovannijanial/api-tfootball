import { Player, Position } from "@prisma/client";
import { hash } from "bcryptjs";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";
import { preloadPositionByName } from "../../utils/PreloadPositionByName";

class CreatePlayerUseCase {
	async execute({
		name,
		age,
		email,
		password,
		teamId,
		positionName,
	}: CreatePlayerDTO): Promise<Player> {
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

		const position = await preloadPositionByName(positionName);
		const hashedPassword = await hash(password, 4);

		const player = await prismaClient.player.create({
			data: {
				name,
				age,
				email,
				password: hashedPassword,
				teamId,
				positionId: position.id,
			},
		});

		return player;
	}
}

export { CreatePlayerUseCase };
