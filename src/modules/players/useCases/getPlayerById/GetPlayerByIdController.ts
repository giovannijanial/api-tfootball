import { Request, Response } from "express";
import { GetPlayerByIdUseCase } from "./GetPlayerByIdUseCase";

class GetPlayerByIdController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const getPlayerByIdUseCase = new GetPlayerByIdUseCase();

		const result = await getPlayerByIdUseCase.execute(id);
		return res.status(200).json(result);
	}
}

export { GetPlayerByIdController };
