import { Router } from "express";
import { CreateTeamController } from "../modules/teams/useCases/createTeam/CreateTeamController";

const teamRoutes = Router();
const createTeamController = new CreateTeamController();

teamRoutes.post("/", createTeamController.handle);

export { teamRoutes };
