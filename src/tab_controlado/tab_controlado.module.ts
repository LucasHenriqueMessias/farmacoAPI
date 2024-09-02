import { Module } from '@nestjs/common';
import { TabControladoService } from './tab_controlado.service';
import { TabControladoController } from './tab_controlado.controller';

@Module({
  controllers: [TabControladoController],
  providers: [TabControladoService],
})
export class TabControladoModule {}
