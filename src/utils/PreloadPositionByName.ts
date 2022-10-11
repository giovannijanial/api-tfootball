import { Position } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

const preloadPositionByName = async (
	positionName: string
): Promise<Position> => {
	const position = await prismaClient.position.findUnique({
		where: { name: positionName },
	});

	if (position) {
		return position;
	}

	return prismaClient.position.create({
		data: {
			name: positionName,
		},
	});
};

export { preloadPositionByName };
