import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { TabMedicamento } from 'src/tab_medicamento/entities/tab_medicamento.entity';

@Entity('tab_manipuladoras')
export class TabManipuladoras {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nome: string;
  
    @Column()
    endereco: string;
  
    @Column()
    telefone: string;
  
    @Column()
    email: string;
  
    @Column()
    responsavel: string;
  
    @Column()
    licenca: string;
  
    @Column()
    dataDeRegistro: string;
  
    @ManyToMany(() => TabMedicamento, medicamento => medicamento.manipuladoras)
    @JoinTable({
      name: 'medicamento_manipuladora', // Nome da tabela de junção
      joinColumn: {
        name: 'manipuladora_id',
        referencedColumnName: 'id'
      },
      inverseJoinColumn: {
        name: 'medicamento_id',
        referencedColumnName: 'id'
      }
    })
    medicamentos: TabMedicamento[];
}