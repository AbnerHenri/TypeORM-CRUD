import { Router } from "express";

import { RoomController } from "./Controllers/RoomController";
import { SubjectControllers } from './Controllers/SubjectControllers'

const Route = Router()

Route.post('/subject', new SubjectControllers().Create )
Route.post('/room', new RoomController().Create )
Route.post('/room/:idRoom/create', new RoomController().CreateVideo )
Route.post('/room/:idRoom/subject', new RoomController().RoomSubject )
Route.get('/', new RoomController().List )

export default Route
