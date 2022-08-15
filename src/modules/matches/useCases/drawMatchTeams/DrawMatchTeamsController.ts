import { Request, Response } from "express";
import { DrawMatchTeamsUseCase } from "./DrawMatchTeamsUseCase";

class DrawMatchTeamsController {
	async handle(req: Request, res: Response) {
		const { matchId } = req.body;

		const drawMatchTeamsUseCase = new DrawMatchTeamsUseCase();

		const result = await drawMatchTeamsUseCase.execute(matchId);

		return res.status(201).json(result);
	}
}

export { DrawMatchTeamsController };
