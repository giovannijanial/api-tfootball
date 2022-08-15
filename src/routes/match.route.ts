import { Router } from "express";
import { CreateMatchController } from "../modules/matches/useCases/createMatch/CreateMatchController";
import { DrawMatchTeamsController } from "../modules/matches/useCases/drawMatchTeams/DrawMatchTeamsController";
import { GetMatchesController } from "../modules/matches/useCases/getAllMatches/GetAllMatchesController";
import { GetMatchByIdController } from "../modules/matches/useCases/getMatchById/GetMatchByIdController";
import { RemoveMatchController } from "../modules/matches/useCases/removeMatch/RemoveMatchController";
import { UpdateMatchController } from "../modules/matches/useCases/updateMatch/UpdateMatchController";

const matchRoutes = Router();
const createMatchController = new CreateMatchController();
const getMatchesController = new GetMatchesController();
const getMatchByIdController = new GetMatchByIdController();
const updateMatchController = new UpdateMatchController();
const removeMatchController = new RemoveMatchController();
const drawMatchTeamsController = new DrawMatchTeamsController();

matchRoutes.post("/", createMatchController.handle);
matchRoutes.get("/", getMatchesController.handle);
matchRoutes.get("/:id", getMatchByIdController.handle);
matchRoutes.patch("/:id", updateMatchController.handle);
matchRoutes.delete("/:id", removeMatchController.handle);
matchRoutes.post("/draw", drawMatchTeamsController.handle);

export { matchRoutes };
