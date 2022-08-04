import { Request, Response } from "express";
import { RemovePlayerUseCase } from "./RemovePlayerUseCase";

class RemovePlayerController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const removePlayerUseCase = new RemovePlayerUseCase();

		const result = await removePlayerUseCase.execute(id);

		return res.status(200).json(result);
	}
}

export { RemovePlayerController };
