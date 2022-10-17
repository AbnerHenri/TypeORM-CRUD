import { Request, Response } from "express";
import { roomRepository } from "../Repositories/roomRepository";

export class RoomController {
    async Create(req : Request, res : Response){
        const { name, description } = req.body

        if(!name || !description){
            res.json({message : 'O nome e descrição não podem ser vazios'})
        }

        try {
            const newRoom = roomRepository.create({ name, description })
            await roomRepository.save(newRoom)
            res.send('Aula criada com sucesso')
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }
}