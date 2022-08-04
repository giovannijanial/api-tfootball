import { Router } from "express";
import { CreateTeamController } from "../modules/teams/useCases/createTeam/CreateTeamController";
import { GetTeamsController } from "../modules/teams/useCases/getAllTeams/GetAllTeamsController";
import { GetTeamByIdController } from "../modules/teams/useCases/getTeamById/GetTeamByIdController";
import { RemoveTeamController } from "../modules/teams/useCases/removeTeam/RemoveTeamController";
import { UpdateTeamController } from "../modules/teams/useCases/updateTeam/UpdateTeamController";

const teamRoutes = Router();
const getTeamsController = new GetTeamsController();
const getTeamByIdController = new GetTeamByIdController();
const createTeamController = new CreateTeamController();
const updateTeamController = new UpdateTeamController();
const removeTeamController = new RemoveTeamController();

teamRoutes.get("/", getTeamsController.handle);
teamRoutes.get("/:id", getTeamByIdController.handle);
teamRoutes.post("/", createTeamController.handle);
teamRoutes.patch("/:id", updateTeamController.handle);
teamRoutes.delete("/:id", removeTeamController.handle);

export { teamRoutes };
