import { Request, Response } from "express";
import { CreateMatchUseCase } from "./DrawMatchTeamsUseCase";

class CreateMatchController {
	async handle(req: Request, res: Response) {
		const { matchId } = req.body;

		const createMatchUseCase = new DrawMatchTeamsUseCase();

		const result = await createMatchUseCase.execute({
			date,
			playerCaptainId,
		});

		return res.status(201).json(result);
	}
}

export { CreateMatchController };
