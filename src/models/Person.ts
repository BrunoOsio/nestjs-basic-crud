import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Person {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 120})
    name: string;
    
    @Column("int")
    age: number;

    @Column({length: 255})
    email: string;
}
