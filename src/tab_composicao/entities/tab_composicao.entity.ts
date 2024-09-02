import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TabMedicamento } from 'src/tab_medicamento/entities/tab_medicamento.entity';

@Entity('tab_composicao')
export class TabComposicao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  principioativo: string;

  @Column({ nullable: true })
  coadjuvante: string;

  @Column({ nullable: true })
  terapeutica: string;

  @Column({ nullable: true })
  tecnico: string;

  @Column({ nullable: true })
  corretivo: string;

  @Column({ nullable: true })
  veiculo: string;

  @Column({ nullable: true })
  excipiente: string;

  @Column({ nullable: true })
  flavorizante: string;

  @ManyToMany(() => TabMedicamento, medicamento => medicamento.composicoes)
  medicamento: TabMedicamento[];
}