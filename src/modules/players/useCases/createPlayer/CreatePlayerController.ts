import { Request, Response } from "express";
import { CreatePlayerDTO } from "../../dtos/CreatePlayerDto";
import { CreatePlayerUseCase } from "./CreatePlayerUseCase";

class CreatePlayerController {
	async handle(req: Request, res: Response) {
		const createPlayerDTO: CreatePlayerDTO = req.body;

		const createPlayerUseCase = new CreatePlayerUseCase();

		const result = await createPlayerUseCase.execute({
			...createPlayerDTO,
		});

		return res.status(201).json(result);
	}
}

export { CreatePlayerController };
