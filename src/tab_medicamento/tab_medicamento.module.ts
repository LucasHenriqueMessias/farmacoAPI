import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabMedicamentoService } from './tab_medicamento.service';
import { TabMedicamentoController } from './tab_medicamento.controller';
import { TabMedicamento } from './entities/tab_medicamento.entity';
import { TabComposicao } from '../tab_composicao/entities/tab_composicao.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabMedicamento, TabComposicao])],
  controllers: [TabMedicamentoController],
  providers: [TabMedicamentoService],
})
export class TabMedicamentoModule {}