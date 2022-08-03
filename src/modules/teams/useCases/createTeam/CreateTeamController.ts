import { Request, Response } from "express";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

class CreateTeamController {
	async handle(req: Request, res: Response) {
		const { name } = req.body;

		const createTeamUseCase = new CreateTeamUseCase();

		const result = await createTeamUseCase.execute({ name });

		return res.status(201).json(result);
	}
}

export { CreateTeamController };
