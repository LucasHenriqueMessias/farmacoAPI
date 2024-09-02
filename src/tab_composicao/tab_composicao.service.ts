import { Injectable } from '@nestjs/common';
import { CreateTabComposicaoDto } from './dto/create-tab_composicao.dto';
import { UpdateTabComposicaoDto } from './dto/update-tab_composicao.dto';

@Injectable()
export class TabComposicaoService {
  create(createTabComposicaoDto: CreateTabComposicaoDto) {
    return 'This action adds a new tabComposicao';
  }

  findAll() {
    return `This action returns all tabComposicao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tabComposicao`;
  }

  update(id: number, updateTabComposicaoDto: UpdateTabComposicaoDto) {
    return `This action updates a #${id} tabComposicao`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabComposicao`;
  }
}
