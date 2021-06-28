import { Column, PrimaryGeneratedColumn } from 'typeorm';


export class Hospede {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column({ length: 12 })
    phone: string;

    @Column({ length: 12 })
    cpf: string;
    
    @Column('text')
    andress: string;

    @Column('text')
    city: string;
}
