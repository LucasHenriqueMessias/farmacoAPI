import { Test, TestingModule } from '@nestjs/testing';
import { TabComposicaoController } from './tab_composicao.controller';
import { TabComposicaoService } from './tab_composicao.service';

describe('TabComposicaoController', () => {
  let controller: TabComposicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabComposicaoController],
      providers: [TabComposicaoService],
    }).compile();

    controller = module.get<TabComposicaoController>(TabComposicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
