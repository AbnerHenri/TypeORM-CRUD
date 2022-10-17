import { Request, Response } from "express";

export class SubjectControllers {
    async Create(req : Request , res : Response){
        res.json('Hello World')
    }
}