import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateStudentController {
	async handle(req: Request, res: Response) {
		const { name, gender, clas } = req.body;

		const student = await prismaClient.student.create({
			data: {
				name,
				gender,
				clas,
			},
		});

		return res.json();
	}
}
