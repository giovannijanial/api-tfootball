import { Router } from "express";
import { CreateMatchController } from "../modules/matches/useCases/createMatch/CreateMatchController";

const matchRoutes = Router();
const createMatchController = new CreateMatchController();

matchRoutes.post("/", createMatchController.handle);

export { matchRoutes };
