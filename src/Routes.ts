import { Router } from "express";
import { SubjectControllers } from './Controllers/SubjectControllers'

const Route = Router()

Route.post('/subject', new SubjectControllers().Create )

export default Route
