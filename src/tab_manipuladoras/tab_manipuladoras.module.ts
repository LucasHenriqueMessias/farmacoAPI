import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TabManipuladorasService } from './tab_manipuladoras.service';
import { TabManipuladorasController } from './tab_manipuladoras.controller';
import { TabManipuladoras } from './entities/tab_manipuladora.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TabManipuladoras])],
  controllers: [TabManipuladorasController],
  providers: [TabManipuladorasService],
})
export class TabManipuladorasModule {}