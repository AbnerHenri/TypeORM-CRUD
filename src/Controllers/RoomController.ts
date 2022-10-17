import { Request, Response } from "express";

import { roomRepository } from "../Repositories/roomRepository";
import { subjectRepository } from "../Repositories/subjectRepository";
import { videoRepository } from "../Repositories/videoRepository";

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

    async CreateVideo(req: Request, res: Response) {
        const { title, url } = req.body
        const { idRoom } = req.params

        if (!title || !url) {
            res.json({ message: 'Título e URL não podem ser vazios' })
        }

        try {
            const room = await roomRepository.findOne({ where : { id : Number(idRoom) }})
            
            if(!room){
                return res.status(404).json({message : 'A aula não existe'})
            }

            const newVideo = videoRepository.create({ 
                title,
                url,
                room
            })

            await videoRepository.save(newVideo)
            res.send('Video salvo com sucesso')
            
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }

    async RoomSubject(req: Request, res: Response){
        const { subject_id } = req.body
        const { idRoom } = req.params

        try {
            const room = await roomRepository.findOne({ where: { id: Number(idRoom) } })

            if (!room) {
                return res.status(404).json({ message: 'A aula não existe' })
            }

            const subject = await subjectRepository.findOne({ where: { id: Number(subject_id) } })

            if (!subject) {
                return res.status(404).json({ message: 'A disciplina não existe' })
            }

            const roomUpdate = {
                ...room,
                subjects: [subject]
            }

            await roomRepository.save(roomUpdate)

            res.status(200).send('Video adicionado as disciplinas')
        } catch (error) {
            console.log(error)
            res.status(500).send('Internal Server Error')
        }
    }
}