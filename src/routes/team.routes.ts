import { Router } from "express";
import { CreateTeamController } from "../modules/teams/useCases/createTeam/CreateTeamController";
import { GetTeamsController } from "../modules/teams/useCases/getTeams/GetTeamsController";

const teamRoutes = Router();
const createTeamController = new CreateTeamController();
const getTeamsController = new GetTeamsController();

teamRoutes.post("/", createTeamController.handle);
teamRoutes.get("/", getTeamsController.handle);

export { teamRoutes };
