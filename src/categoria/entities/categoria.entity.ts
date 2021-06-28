import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    description: string;
}