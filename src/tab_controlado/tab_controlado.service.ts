import { Injectable } from '@nestjs/common';
import { CreateTabControladoDto } from './dto/create-tab_controlado.dto';
import { UpdateTabControladoDto } from './dto/update-tab_controlado.dto';

@Injectable()
export class TabControladoService {
  create(createTabControladoDto: CreateTabControladoDto) {
    return 'This action adds a new tabControlado';
  }

  findAll() {
    return `This action returns all tabControlado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabControlado`;
  }

  update(id: number, updateTabControladoDto: UpdateTabControladoDto) {
    return `This action updates a #${id} tabControlado`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabControlado`;
  }
}
