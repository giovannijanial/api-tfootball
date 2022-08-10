import { Request, Response } from "express";
import { JoinMatchUseCase } from "./JoinInMatchUseCase";

class JoinMatchController {
	async handle(req: Request, res: Response) {
		const { matchId, playerId } = req.body;

		const joinMatchUseCase = new JoinMatchUseCase();

		const result = await joinMatchUseCase.execute(matchId, playerId);

		return res.status(201).json(result);
	}
}

export { JoinMatchController };
