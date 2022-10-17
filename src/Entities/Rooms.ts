import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm'
import { Subjects } from './Subjects'
import { Video } from './Video'

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type : 'text'})
    name: string

    @Column({type : 'text', nullable : true})
    description : string

    @OneToMany(()=> Video, video => video.room)
    videos: Video[]

    @ManyToMany(()=> Subjects, subject => subject.rooms )
    subjects : Subjects[]
}