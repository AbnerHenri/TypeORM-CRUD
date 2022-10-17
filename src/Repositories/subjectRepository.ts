import { Subjects } from "../Entities/Subjects";
import appDataSource from "../Data-source";


export const subjectRepository = appDataSource.getRepository(Subjects)