import { Request, Response } from "express";
import { GetMatchesUseCase } from "./GetAllMatchesUseCase";

class GetMatchesController {
	async handle(req: Request, res: Response) {
		const getMatchesUseCase = new GetMatchesUseCase();

		const result = await getMatchesUseCase.execute();
		return res.status(200).json(result);
	}
}

export { GetMatchesController };
