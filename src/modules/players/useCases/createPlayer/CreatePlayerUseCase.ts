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
		positionName,
	}: CreatePlayerDTO): Promise<Player> {
		const playerAlreadyExists = await prismaClient.player.findUnique({
			where: { email },
		});

		if (playerAlreadyExists) {
			throw new AppError("User already exist!");
		}

		const position = await preloadPositionByName(positionName);
		const hashedPassword = await hash(password, 4);
		console.log(position);

		const player = await prismaClient.player.create({
			data: {
				name,
				age,
				email,
				password: hashedPassword,
				positionId: position.id,
			},
		});

		return player;
	}
}

export { CreatePlayerUseCase };
