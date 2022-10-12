import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Video } from './Video'

@Entity('rooms')
export class Room {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type : 'text'})
    name: string

    @OneToMany(()=> Video, video => video.room)
    videos: Video[]
}