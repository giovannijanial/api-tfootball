import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { UpdateTeamDTO } from "../../dtos/UpdateTeamDto";

class UpdateTeamUseCase {
	async execute(id: string, { name }: UpdateTeamDTO): Promise<Team> {
		const teamExists = await prismaClient.team.findUnique({
			where: { id },
		});

		if (!teamExists) {
			throw new AppError(`Team Id: ${id} don't exist!`, 404);
		}

		const teamNameAlreadyExists = await prismaClient.team.findUnique({
			where: { name },
		});

		if (teamNameAlreadyExists) {
			throw new AppError(`Team '${name}' already exist!`, 422);
		}

		const team = await prismaClient.team.update({
			where: {
				id,
			},
			data: {
				name,
			},
		});

		return team;
	}
}

export { UpdateTeamUseCase };
