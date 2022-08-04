import { Router } from "express";
import { matchRoutes } from "./match.route";
import { playerRoutes } from "./player.routes";
import { teamRoutes } from "./team.routes";

const routes = Router();

routes.use("/players", playerRoutes);
routes.use("/teams", teamRoutes);
routes.use("/matches", matchRoutes);

export { routes };
