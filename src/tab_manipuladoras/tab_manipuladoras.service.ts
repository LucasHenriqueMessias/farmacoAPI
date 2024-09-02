import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTabManipuladoraDto } from './dto/create-tab_manipuladora.dto';
import { UpdateTabManipuladoraDto } from './dto/update-tab_manipuladora.dto';
import { TabManipuladoras } from './entities/tab_manipuladora.entity';

@Injectable()
export class TabManipuladorasService {
  constructor(
    @InjectRepository(TabManipuladoras)
    private readonly tabManipuladorasRepository: Repository<TabManipuladoras>,
  ) {}

  create(createTabManipuladoraDto: CreateTabManipuladoraDto): Promise<TabManipuladoras> {
    const manipuladora = this.tabManipuladorasRepository.create(createTabManipuladoraDto);
    return this.tabManipuladorasRepository.save(manipuladora);
  }

  findAll(): Promise<TabManipuladoras[]> {
    return this.tabManipuladorasRepository.find({ relations: ['medicamentos'] });
  }

  async findOne(id: number): Promise<TabManipuladoras> {
    const manipuladora = await this.tabManipuladorasRepository.findOne({ where: { id }, relations: ['medicamentos'] });
    if (!manipuladora) {
      throw new NotFoundException(`Manipuladora with ID ${id} not found`);
    }
    return manipuladora;
  }

  async update(id: number, updateTabManipuladoraDto: UpdateTabManipuladoraDto): Promise<TabManipuladoras> {
    await this.tabManipuladorasRepository.update(id, updateTabManipuladoraDto);
    const updatedManipuladora = await this.tabManipuladorasRepository.findOne({ where: { id }, relations: ['medicamentos'] });
    if (!updatedManipuladora) {
      throw new NotFoundException(`Manipuladora with ID ${id} not found`);
    }
    return updatedManipuladora;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tabManipuladorasRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Manipuladora with ID ${id} not found`);
    }
  }
}