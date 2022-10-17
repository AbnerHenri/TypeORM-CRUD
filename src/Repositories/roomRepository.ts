import { Room } from "../Entities/Rooms";
import appDataSource from "../Data-source";

export const roomRepository = appDataSource.getRepository(Room)