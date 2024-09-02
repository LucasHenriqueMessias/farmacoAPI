import { Module } from '@nestjs/common';
import { TabComposicaoService } from './tab_composicao.service';
import { TabComposicaoController } from './tab_composicao.controller';

@Module({
  controllers: [TabComposicaoController],
  providers: [TabComposicaoService],
})
export class TabComposicaoModule {}
