import { CreatePlayerDTO } from "./CreatePlayerDto";

interface UpdatePlayerDTO extends Partial<CreatePlayerDTO> {}

export { UpdatePlayerDTO };
