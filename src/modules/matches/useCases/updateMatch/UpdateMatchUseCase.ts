import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { UpdateMatchDTO } from "../../dtos/UpdateMatchDto";

class UpdateMatchUseCase {
	async execute(id: string, updateMatchDTO: UpdateMatchDTO): Promise<Match> {
		const matchExists = await prismaClient.match.findUnique({
			where: { id },
		});

		if (!matchExists) {
			throw new AppError(`Match Id: ${id} don't exist!`, 404);
		}

		const team = await prismaClient.match.update({
			where: {
				id,
			},
			data: { ...updateMatchDTO },
		});

		return team;
	}
}

export { UpdateMatchUseCase };
