import { Test, TestingModule } from '@nestjs/testing';
import { TabManipuladorasService } from './tab_manipuladoras.service';

describe('TabManipuladorasService', () => {
  let service: TabManipuladorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TabManipuladorasService],
    }).compile();

    service = module.get<TabManipuladorasService>(TabManipuladorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
