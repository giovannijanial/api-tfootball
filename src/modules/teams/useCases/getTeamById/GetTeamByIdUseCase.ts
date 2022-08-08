import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class GetTeamByIdUseCase {
	async execute(id: string): Promise<Team> {
		const team = await prismaClient.team.findUnique({
			where: {
				id,
			},
			include: {
				players: {
					select: {
						email: true,
						position: true,
					},
				},
			},
		});

		if (!team) {
			throw new AppError(`Team Id: ${id} don't exist`, 404);
		}

		return team;
	}
}

export { GetTeamByIdUseCase };
