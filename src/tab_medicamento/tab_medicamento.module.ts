import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabMedicamentoService } from './tab_medicamento.service';
import { TabMedicamentoController } from './tab_medicamento.controller';
import { TabMedicamento } from './entities/tab_medicamento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabMedicamento])],
  controllers: [TabMedicamentoController],
  providers: [TabMedicamentoService],
})
export class TabMedicamentoModule {}