import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class CreateTeamUseCase {
	async execute({ name }: CreateTeamDTO): Promise<Team> {
		const team = await prismaClient.team.create({
			data: {
				name,
			},
		});

		return team;
	}
}

export { CreateTeamUseCase };
