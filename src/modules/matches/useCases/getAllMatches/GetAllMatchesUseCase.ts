import { Match, Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class GetMatchesUseCase {
	async execute(): Promise<Match[]> {
		const matches = await prismaClient.match.findMany({
			include: {
				teamHome: true,
				teamOut: true,
			},
		});
		return matches;
	}
}

export { GetMatchesUseCase };
