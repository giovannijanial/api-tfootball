import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateMatchDTO } from "../../dtos/CreateMatchDto";

class CreateMatchUseCase {
	async execute(createMatchDTO: CreateMatchDTO): Promise<Match> {
		const teamHomeExist = await prismaClient.team.findUnique({
			where: { id: createMatchDTO.teamHomeId },
		});

		const teamOutExist = await prismaClient.team.findUnique({
			where: { id: createMatchDTO.teamOutId },
		});

		if (!teamHomeExist || !teamOutExist) {
			throw new AppError(`Team not found!`, 404);
		}

		const match = await prismaClient.match.create({
			data: createMatchDTO,
		});

		return match;
	}
}

export { CreateMatchUseCase };
