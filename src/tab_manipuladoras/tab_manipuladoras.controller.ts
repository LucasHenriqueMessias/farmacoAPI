import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabManipuladorasService } from './tab_manipuladoras.service';
import { CreateTabManipuladoraDto } from './dto/create-tab_manipuladora.dto';
import { UpdateTabManipuladoraDto } from './dto/update-tab_manipuladora.dto';

@Controller('tab-manipuladoras')
export class TabManipuladorasController {
  constructor(private readonly tabManipuladorasService: TabManipuladorasService) {}

  @Post()
  create(@Body() createTabManipuladoraDto: CreateTabManipuladoraDto) {
    return this.tabManipuladorasService.create(createTabManipuladoraDto);
  }

  @Get()
  findAll() {
    return this.tabManipuladorasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabManipuladorasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabManipuladoraDto: UpdateTabManipuladoraDto) {
    return this.tabManipuladorasService.update(+id, updateTabManipuladoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabManipuladorasService.remove(+id);
  }
}
