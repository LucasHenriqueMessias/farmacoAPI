import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabMedicamentoService } from './tab_medicamento.service';
import { CreateTabMedicamentoDto } from './dto/create-tab_medicamento.dto';
import { UpdateTabMedicamentoDto } from './dto/update-tab_medicamento.dto';

@Controller('tab-medicamento')
export class TabMedicamentoController {
  constructor(private readonly tabMedicamentoService: TabMedicamentoService) {}

  @Post()
  create(@Body() createTabMedicamentoDto: CreateTabMedicamentoDto) {
    return this.tabMedicamentoService.create(createTabMedicamentoDto);
  }

  @Get()
  findAll() {
    return this.tabMedicamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabMedicamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabMedicamentoDto: UpdateTabMedicamentoDto) {
    return this.tabMedicamentoService.update(+id, updateTabMedicamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabMedicamentoService.remove(+id);
  }
}
