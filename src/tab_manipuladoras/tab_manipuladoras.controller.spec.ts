import { Test, TestingModule } from '@nestjs/testing';
import { TabManipuladorasController } from './tab_manipuladoras.controller';
import { TabManipuladorasService } from './tab_manipuladoras.service';

describe('TabManipuladorasController', () => {
  let controller: TabManipuladorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TabManipuladorasController],
      providers: [TabManipuladorasService],
    }).compile();

    controller = module.get<TabManipuladorasController>(TabManipuladorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
