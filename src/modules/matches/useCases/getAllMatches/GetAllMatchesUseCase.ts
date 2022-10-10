import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";

class GetMatchesUseCase {
	async execute(): Promise<Match[]> {
		const matches = await prismaClient.match.findMany({
			include: {
				players: {
					select: {
						player: {
							select: {
								email: true,
							},
						},
						teamId: true,
					},
				},
			},
		});
		return matches;
	}
}

export { GetMatchesUseCase };
