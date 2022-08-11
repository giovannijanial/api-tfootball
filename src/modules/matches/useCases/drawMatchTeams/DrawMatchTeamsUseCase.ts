import { Match } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class DrawMatchTeamsUseCase {
	async execute(matchId: string): Promise<Match> {
		const matchExist = await prismaClient.match.findUnique({
			where: { id: matchId },
		});

		if (!matchExist) {
			throw new AppError(`Match Id ${matchId} not exist!`);
		}

		const match = await prismaClient.match.create({
			data: {
				date,
				playerCaptainId,
			},
		});

		return match;
	}
}

export { DrawMatchTeamsUseCase };
