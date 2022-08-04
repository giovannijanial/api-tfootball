import { Request, Response } from "express";
import { CreateMatchUseCase } from "./CreateMatchUseCase";

class CreateMatchController {
	async handle(req: Request, res: Response) {
		const { date, teamHomeId, teamOutId } = req.body;

		const createMatchUseCase = new CreateMatchUseCase();

		const result = await createMatchUseCase.execute({
			date,
			teamHomeId,
			teamOutId,
		});

		return res.status(201).json(result);
	}
}

export { CreateMatchController };
