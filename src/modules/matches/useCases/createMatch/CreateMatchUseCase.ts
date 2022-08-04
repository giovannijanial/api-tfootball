import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { CreateMatchDTO } from "../../dtos/CreateMatchDto";

class CreateMatchUseCase {
	async execute({
		date,
		teamHomeId,
		teamOutId,
	}: CreateMatchDTO): Promise<Match> {
		const match = await prismaClient.match.create({
			data: {
				date,
				teamHomeId,
				teamOutId,
			},
		});

		return match;
	}
}

export { CreateMatchUseCase };
