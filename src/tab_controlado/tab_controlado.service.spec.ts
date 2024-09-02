import { Test, TestingModule } from '@nestjs/testing';
import { TabControladoService } from './tab_controlado.service';

describe('TabControladoService', () => {
  let service: TabControladoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabControladoService],
    }).compile();

    service = module.get<TabControladoService>(TabControladoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
