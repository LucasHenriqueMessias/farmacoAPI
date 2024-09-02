import { Test, TestingModule } from '@nestjs/testing';
import { TabMedicamentoController } from './tab_medicamento.controller';
import { TabMedicamentoService } from './tab_medicamento.service';

describe('TabMedicamentoController', () => {
  let controller: TabMedicamentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabMedicamentoController],
      providers: [TabMedicamentoService],
    }).compile();

    controller = module.get<TabMedicamentoController>(TabMedicamentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
