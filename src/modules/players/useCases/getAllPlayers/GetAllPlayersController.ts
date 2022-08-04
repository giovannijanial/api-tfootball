import { Request, Response } from "express";
import { GetPlayersUseCase } from "./GetAllPlayersUseCase";

class GetPlayersController {
	async handle(req: Request, res: Response) {
		const getPlayersUseCase = new GetPlayersUseCase();

		const result = await getPlayersUseCase.execute();
		return res.status(200).json(result);
	}
}

export { GetPlayersController };
