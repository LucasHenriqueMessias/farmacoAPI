import { Test, TestingModule } from '@nestjs/testing';
import { TabComposicaoService } from './tab_composicao.service';

describe('TabComposicaoService', () => {
  let service: TabComposicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabComposicaoService],
    }).compile();

    service = module.get<TabComposicaoService>(TabComposicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
