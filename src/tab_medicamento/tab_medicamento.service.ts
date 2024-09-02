import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TabMedicamento } from './entities/tab_medicamento.entity';
import { TabComposicao } from '../tab_composicao/entities/tab_composicao.entity';
import { CreateTabMedicamentoDto } from './dto/create-tab_medicamento.dto';
import { UpdateTabMedicamentoDto } from './dto/update-tab_medicamento.dto';

@Injectable()
export class TabMedicamentoService {
  constructor(
    @InjectRepository(TabMedicamento)
    private readonly tabMedicamentoRepository: Repository<TabMedicamento>,
    @InjectRepository(TabComposicao)
    private readonly tabComposicaoRepository: Repository<TabComposicao>,
  ) {}

  async create(createTabMedicamentoDto: CreateTabMedicamentoDto): Promise<TabMedicamento> {
    const { composicoes, ...medicamentoData } = createTabMedicamentoDto;
    const medicamento = this.tabMedicamentoRepository.create(medicamentoData);

    if (composicoes && composicoes.length > 0) {
      const composicoesEntities = await this.tabComposicaoRepository.findByIds(composicoes);
      medicamento.composicoes = composicoesEntities;
    }

    return this.tabMedicamentoRepository.save(medicamento);
  }

  async findAll(): Promise<TabMedicamento[]> {
    return this.tabMedicamentoRepository.find({ relations: ['composicoes'] });
  }

  async findOne(id: number): Promise<TabMedicamento> {
    const medicamento = await this.tabMedicamentoRepository.findOne({ where: { id }, relations: ['composicoes'] });
    if (!medicamento) {
      throw new NotFoundException(`Medicamento with ID ${id} not found`);
    }
    return medicamento;
  }

  async update(id: number, updateTabMedicamentoDto: UpdateTabMedicamentoDto): Promise<TabMedicamento> {
    const { composicoes, ...medicamentoData } = updateTabMedicamentoDto;
    await this.tabMedicamentoRepository.update(id, medicamentoData);
    const updatedMedicamento = await this.tabMedicamentoRepository.findOne({ where: { id }, relations: ['composicoes'] });

    if (!updatedMedicamento) {
      throw new NotFoundException(`Medicamento with ID ${id} not found`);
    }

    if (composicoes && composicoes.length > 0) {
      const composicoesEntities = await this.tabComposicaoRepository.findByIds(composicoes);
      updatedMedicamento.composicoes = composicoesEntities;
      await this.tabMedicamentoRepository.save(updatedMedicamento);
    }

    return updatedMedicamento;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabMedicamentoRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Medicamento with ID ${id} not found`);
    }
  }
}