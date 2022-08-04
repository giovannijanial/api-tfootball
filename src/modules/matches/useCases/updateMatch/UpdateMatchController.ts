import { Request, Response } from "express";
import { UpdateMatchDTO } from "../../dtos/UpdateMatchDto";
import { UpdateMatchUseCase } from "./UpdateMatchUseCase";

class UpdateMatchController {
	async handle(req: Request, res: Response) {
		const updateMatchDTO: UpdateMatchDTO = req.body;
		const { id } = req.params;

		const updateMatchUseCase = new UpdateMatchUseCase();

		const result = await updateMatchUseCase.execute(id, updateMatchDTO);

		return res.status(201).json(result);
	}
}

export { UpdateMatchController };
