import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";
import { CreateTeamDTO } from "../../dtos/CreateTeamDto";

class CreateTeamUseCase {
	async execute({ name }: CreateTeamDTO): Promise<Team> {
		const teamAlreadyExists = await prismaClient.team.findUnique({
			where: { name },
		});

		if (teamAlreadyExists) {
			throw new AppError("Team already exist!");
		}

		const team = await prismaClient.team.create({
			data: {
				name,
			},
		});

		return team;
	}
}

export { CreateTeamUseCase };
