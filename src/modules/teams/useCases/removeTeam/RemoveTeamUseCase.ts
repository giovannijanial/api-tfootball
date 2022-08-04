import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class RemoveTeamUseCase {
	async execute(id: string): Promise<Team> {
		const teamExist = await prismaClient.team.findUnique({
			where: { id },
		});

		if (!teamExist) {
			throw new AppError(`Team Id: ${id} don't exist!`, 404);
		}

		const teamRemoved = await prismaClient.team.delete({
			where: {
				id,
			},
		});

		return teamRemoved;
	}
}

export { RemoveTeamUseCase };
