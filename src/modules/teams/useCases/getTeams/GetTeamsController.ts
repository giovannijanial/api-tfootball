import { Request, Response } from "express";
import { GetTeamsUseCase } from "./GetTeamsUseCase";

class GetTeamsController {
	async handle(req: Request, res: Response) {
		const getTeamsUseCase = new GetTeamsUseCase();

		const result = await getTeamsUseCase.execute();
		return res.status(201).json(result);
	}
}

export { GetTeamsController };
