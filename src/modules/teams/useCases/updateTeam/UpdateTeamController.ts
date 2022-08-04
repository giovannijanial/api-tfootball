import { Request, Response } from "express";
import { UpdateTeamUseCase } from "./UpdateTeamUseCase";

class UpdateTeamController {
	async handle(req: Request, res: Response) {
		const { name } = req.body;
		const { id } = req.params;

		const updateTeamUseCase = new UpdateTeamUseCase();

		const result = await updateTeamUseCase.execute(id, { name });

		return res.status(201).json(result);
	}
}

export { UpdateTeamController };
