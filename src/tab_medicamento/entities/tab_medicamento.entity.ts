import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { TabManipuladoras } from 'src/tab_manipuladoras/entities/tab_manipuladora.entity';

@Entity('tab_medicamentos')
export class TabMedicamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  fabricante: string;

  @Column()
  dataDeFabricacao: string;

  @Column()
  dataDeValidade: string;

  @Column('decimal')
  preco: number;

  @Column()
  codigoDeBarras: string;

  @Column()
  dosagem: string;

  @Column()
  tipo: string;

  @ManyToMany(() => TabManipuladoras, manipuladora => manipuladora.medicamentos)
  manipuladoras: TabManipuladoras[];
}