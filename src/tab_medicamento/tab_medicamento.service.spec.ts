import { Test, TestingModule } from '@nestjs/testing';
import { TabMedicamentoService } from './tab_medicamento.service';

describe('TabMedicamentoService', () => {
  let service: TabMedicamentoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabMedicamentoService],
    }).compile();

    service = module.get<TabMedicamentoService>(TabMedicamentoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
