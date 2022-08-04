import { Request, Response } from "express";
import { RemoveTeamUseCase } from "./RemoveTeamUseCase";

class RemoveTeamController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const removeTeamUseCase = new RemoveTeamUseCase();

		const result = await removeTeamUseCase.execute(id);

		return res.status(200).json(result);
	}
}

export { RemoveTeamController };
