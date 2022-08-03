import { Request, Response } from "express";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

class CreatePlayerController {
	async handle(req: Request, res: Response) {
		const { name, email, teamId } = req.body;

		const createPlayerUseCase = new CreatePlayerUseCase();

		const result = await createPlayerUseCase.execute({ name, email, teamId });

		return res.status(201).json(result);
	}
}

export { CreatePlayerController };
