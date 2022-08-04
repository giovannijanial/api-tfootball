import { Request, Response } from "express";
import { GetTeamsUseCase } from "./GetAllTeamsUseCase";

class GetTeamsController {
	async handle(req: Request, res: Response) {
		const getTeamsUseCase = new GetTeamsUseCase();

		const result = await getTeamsUseCase.execute();
		return res.status(200).json(result);
	}
}

export { GetTeamsController };
