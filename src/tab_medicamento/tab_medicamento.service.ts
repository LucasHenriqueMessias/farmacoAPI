import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabMedicamentoDto } from './dto/create-tab_medicamento.dto';
import { UpdateTabMedicamentoDto } from './dto/update-tab_medicamento.dto';
import { TabMedicamento } from './entities/tab_medicamento.entity';

@Injectable()
export class TabMedicamentoService {
  constructor(
    @InjectRepository(TabMedicamento)
    private readonly tabMedicamentoRepository: Repository<TabMedicamento>,
  ) {}

  async create(createTabMedicamentoDto: CreateTabMedicamentoDto): Promise<TabMedicamento> {
    const medicamento = this.tabMedicamentoRepository.create(createTabMedicamentoDto);
    return this.tabMedicamentoRepository.save(medicamento);
  }

  async findAll(): Promise<TabMedicamento[]> {
    return this.tabMedicamentoRepository.find();
  }

  async findOne(id: number): Promise<TabMedicamento> {
    const medicamento = await this.tabMedicamentoRepository.findOne({ where: { id } });
    if (!medicamento) {
      throw new NotFoundException(`Medicamento with ID ${id} not found`);
    }
    return medicamento;
  }

  async update(id: number, updateTabMedicamentoDto: UpdateTabMedicamentoDto): Promise<TabMedicamento> {
    await this.tabMedicamentoRepository.update(id, updateTabMedicamentoDto);
    const updatedMedicamento = await this.tabMedicamentoRepository.findOne({ where: { id } });
    if (!updatedMedicamento) {
      throw new NotFoundException(`Medicamento with ID ${id} not found`);
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