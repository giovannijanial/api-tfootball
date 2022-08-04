import { Request, Response } from "express";
import { UpdatePlayerDTO } from "../../dtos/UpdatePlayerDto";
import { UpdatePlayerUseCase } from "./UpdatePlayerUseCase";

class UpdatePlayerController {
	async handle(req: Request, res: Response) {
		const updatePlayerDTO: UpdatePlayerDTO = req.body;
		const { id } = req.params;

		const updatePlayerUseCase = new UpdatePlayerUseCase();

		const result = await updatePlayerUseCase.execute(id, updatePlayerDTO);

		return res.status(201).json(result);
	}
}

export { UpdatePlayerController };
