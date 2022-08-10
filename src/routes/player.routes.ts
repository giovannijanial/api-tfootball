import { Router } from "express";
import { CreatePlayerController } from "../modules/players/useCases/createPlayer/CreatePlayerController";
import { GetPlayersController } from "../modules/players/useCases/getAllPlayers/GetAllPlayersController";
import { GetPlayerByIdController } from "../modules/players/useCases/getPlayerById/GetPlayerByIdController";
import { JoinMatchController } from "../modules/players/useCases/joinInMatch/JoinInMatchController";
import { RemovePlayerController } from "../modules/players/useCases/removePlayer/RemovePlayerController";
import { UpdatePlayerController } from "../modules/players/useCases/updatePlayer/UpdatePlayerController";

const playerRoutes = Router();
const getPlayersController = new GetPlayersController();
const getPlayerByIdController = new GetPlayerByIdController();
const createPlayerController = new CreatePlayerController();
const updatePlayerController = new UpdatePlayerController();
const removePlayerController = new RemovePlayerController();
const joinMatchController = new JoinMatchController();

playerRoutes.get("/", getPlayersController.handle);
playerRoutes.get("/:id", getPlayerByIdController.handle);
playerRoutes.post("/", createPlayerController.handle);
playerRoutes.patch("/:id", updatePlayerController.handle);
playerRoutes.delete("/:id", removePlayerController.handle);
playerRoutes.post("/join", joinMatchController.handle);

export { playerRoutes };
