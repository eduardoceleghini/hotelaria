import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';

export class Quarto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    descricao: string;

    @OneToOne(() => Categoria, (categoria) => categoria.id)
    @JoinColumn()
    categoria: Categoria;

}
