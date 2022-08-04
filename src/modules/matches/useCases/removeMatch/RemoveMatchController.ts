import { Request, Response } from "express";
import { RemoveMatchUseCase } from "./RemoveMatchUseCase";

class RemoveMatchController {
	async handle(req: Request, res: Response) {
		const { id } = req.params;

		const removeMatchUseCase = new RemoveMatchUseCase();

		const result = await removeMatchUseCase.execute(id);

		return res.status(200).json(result);
	}
}

export { RemoveMatchController };
