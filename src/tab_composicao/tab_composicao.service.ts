import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabComposicao } from './entities/tab_composicao.entity';
import { TabMedicamento } from '../tab_medicamento/entities/tab_medicamento.entity';
import { CreateTabComposicaoDto } from './dto/create-tab_composicao.dto';
import { UpdateTabComposicaoDto } from './dto/update-tab_composicao.dto';

@Injectable()
export class TabComposicaoService {
  constructor(
    @InjectRepository(TabComposicao)
    private readonly tabComposicaoRepository: Repository<TabComposicao>,
    @InjectRepository(TabMedicamento)
    private readonly medicamentoRepository: Repository<TabMedicamento>,
  ) {}

  async create(createTabComposicaoDto: CreateTabComposicaoDto): Promise<TabComposicao> {
    const composicao = this.tabComposicaoRepository.create(createTabComposicaoDto);
    return this.tabComposicaoRepository.save(composicao);
  }

  async findAll(): Promise<TabComposicao[]> {
    return this.tabComposicaoRepository.find({ relations: ['medicamento'] });
  }

  async findOne(id: number): Promise<TabComposicao> {
    const composicao = await this.tabComposicaoRepository.findOne({ where: { id }, relations: ['medicamento'] });
    if (!composicao) {
      throw new NotFoundException(`Composição com ID ${id} não encontrada`);
    }
    return composicao;
  }

  async update(id: number, updateTabComposicaoDto: UpdateTabComposicaoDto): Promise<TabComposicao> {
    await this.tabComposicaoRepository.update(id, updateTabComposicaoDto);
    const updatedComposicao = await this.tabComposicaoRepository.findOne({ where: { id }, relations: ['medicamento'] });
    if (!updatedComposicao) {
      throw new NotFoundException(`Composição com ID ${id} não encontrada`);
    }
    return updatedComposicao;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabComposicaoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Composição com ID ${id} não encontrada`);
    }
  }
}