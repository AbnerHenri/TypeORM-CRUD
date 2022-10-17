import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToMany, JoinTable } from 'typeorm'
import { Room } from './Rooms'

@Entity('subjects')
export class Subjects {
    @PrimaryGeneratedColumn()
    id : number

    @Column({type : 'text'})
    name : string

    @ManyToMany(()=> Room, room => room.subjects)
    @JoinTable({
        name: 'room_subject',
        joinColumn : {
            name : 'room_id',
            referencedColumnName : 'id'
        },
        inverseJoinColumn : {
            name : 'subject_id',
            referencedColumnName : 'id'
        }
    })
    rooms : Room[]
}