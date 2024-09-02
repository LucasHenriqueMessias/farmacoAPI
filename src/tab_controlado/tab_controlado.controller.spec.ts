import { Test, TestingModule } from '@nestjs/testing';
import { TabControladoController } from './tab_controlado.controller';
import { TabControladoService } from './tab_controlado.service';

describe('TabControladoController', () => {
  let controller: TabControladoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabControladoController],
      providers: [TabControladoService],
    }).compile();

    controller = module.get<TabControladoController>(TabControladoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
