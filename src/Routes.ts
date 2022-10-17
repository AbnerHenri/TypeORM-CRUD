import { Router } from "express";

const Route = Router()

Route.get('/', (req, res) => res.json('Hello World!'))

export default Route
