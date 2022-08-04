import { Match, Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class GetMatchByIdUseCase {
	async execute(id: string): Promise<Match> {
		const match = await prismaClient.match.findUnique({
			where: {
				id,
			},
			include: {
				teamHome: true,
				teamOut: true,
			},
		});

		if (!match) {
			throw new AppError(`Team Id: ${id} don't exist`, 404);
		}

		return match;
	}
}

export { GetMatchByIdUseCase };
