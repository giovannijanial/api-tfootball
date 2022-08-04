import { Request, Response } from "express";
import { GetMatchByIdUseCase } from "./GetMatchByIdUseCase";

class GetMatchByIdController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const getMatchByIdUseCase = new GetMatchByIdUseCase();

		const result = await getMatchByIdUseCase.execute(id);
		return res.status(200).json(result);
	}
}

export { GetMatchByIdController };
