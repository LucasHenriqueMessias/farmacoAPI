import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabComposicaoService } from './tab_composicao.service';
import { TabComposicaoController } from './tab_composicao.controller';
import { TabComposicao } from './entities/tab_composicao.entity';
import { TabMedicamento } from '../tab_medicamento/entities/tab_medicamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabComposicao, TabMedicamento])],
  controllers: [TabComposicaoController],
  providers: [TabComposicaoService],
})
export class TabComposicaoModule {}