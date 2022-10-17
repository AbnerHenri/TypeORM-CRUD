import { Video } from "../Entities/Video"
import appDataSource from "../Data-source"

export const videoRepository = appDataSource.getRepository(Video)