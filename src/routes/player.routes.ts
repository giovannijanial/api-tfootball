import { Router } from "express";
import { CreatePlayerController } from "../modules/players/useCases/createPlayer/CreatePlayerController";

const playerRoutes = Router();
const createPlayerController = new CreatePlayerController();

playerRoutes.post("/", createPlayerController.handle);

export { playerRoutes };
