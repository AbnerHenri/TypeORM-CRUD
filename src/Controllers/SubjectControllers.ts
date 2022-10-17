import { Request, Response } from "express"; 
import { subjectRepository } from "../Repositories/subjectRepository";

export class SubjectControllers {

    async Create(req : Request , res : Response){
        const { name } = req.body
    
        if(!name){
            res.json({message : 'O nome não pode ser vazio'})
        }

        try {
            const newSubject = subjectRepository.create({ name })
            await subjectRepository.save(newSubject)

            res.send('Arquivo salvo com sucesso')
        } catch (error) {
            console.log(error)
            res.status(500).json({message : 'Internal Server Error'})
        }
    }
}