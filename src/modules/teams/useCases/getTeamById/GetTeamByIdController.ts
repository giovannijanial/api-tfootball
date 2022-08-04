import { Request, Response } from "express";
import { GetTeamByIdUseCase } from "./GetTeamByIdUseCase";

class GetTeamByIdController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;
		const getTeamByIdUseCase = new GetTeamByIdUseCase();

		const result = await getTeamByIdUseCase.execute(id);
		return res.status(200).json(result);
	}
}

export { GetTeamByIdController };
