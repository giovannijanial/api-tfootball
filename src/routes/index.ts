import { Router } from "express";
import { playerRoutes } from "./player.routes";
import { teamRoutes } from "./team.routes";

const routes = Router();

routes.use("/players", playerRoutes);
routes.use("/teams", teamRoutes);

export { routes };
