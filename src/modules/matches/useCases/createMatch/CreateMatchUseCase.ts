import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateMatchDTO } from "../../dtos/CreateMatchDto";

class CreateMatchUseCase {
	async execute({ date, playerCaptainId }: CreateMatchDTO): Promise<Match> {
		const playerCaptainExists = await prismaClient.player.findUnique({
			where: { id: playerCaptainId },
		});

		if (!playerCaptainExists) {
			throw new AppError(`Captain Id ${playerCaptainId} not exist!`);
		}

		const match = await prismaClient.match.create({
			data: {
				date,
				playerCaptainId,
			},
		});

		return match;
	}
}

export { CreateMatchUseCase };
