import { Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class GetTeamsUseCase {
	async execute(): Promise<Team[]> {
		const teams = await prismaClient.team.findMany();
		return teams;
	}
}

export { GetTeamsUseCase };
