import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { TabManipuladoras } from 'src/tab_manipuladoras/entities/tab_manipuladora.entity';
import { TabComposicao } from 'src/tab_composicao/entities/tab_composicao.entity';

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

  @ManyToMany(() => TabComposicao, composicao => composicao.medicamento)
  @JoinTable({
    name: 'medicamento_composicao', // Nome da tabela de junção
    joinColumn: {
      name: 'medicamento_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'composicao_id',
      referencedColumnName: 'id'
    }
  })
  composicoes: TabComposicao[];
}