import { Match, Team } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { AppError } from "../../../../errors/AppError";

class RemoveMatchUseCase {
	async execute(id: string): Promise<Match> {
		const matchExist = await prismaClient.match.findUnique({
			where: { id },
		});

		if (!matchExist) {
			throw new AppError(`Match Id: ${id} don't exist!`, 404);
		}

		const matchRemoved = await prismaClient.match.delete({
			where: {
				id,
			},
		});

		return matchRemoved;
	}
}

export { RemoveMatchUseCase };
