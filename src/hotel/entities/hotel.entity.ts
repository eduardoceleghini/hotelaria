import { Hospede } from 'src/hospede/entities/hospede.entity';
import { Quarto } from 'src/quarto/entities/quarto.entity';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';

export class Hotel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    dataehorainicial: string;
   
    @Column({ length: 500 })
    dataehorafinal: string;

    @OneToOne(() => Quarto, (quarto) => quarto.id)
    @JoinColumn()
    quarto: Quarto;

    @OneToOne(() => Hospede, (hospede) => hospede.id)
    @JoinColumn()
    hospede: Hospede;
}
