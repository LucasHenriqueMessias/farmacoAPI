import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabControladoService } from './tab_controlado.service';
import { CreateTabControladoDto } from './dto/create-tab_controlado.dto';
import { UpdateTabControladoDto } from './dto/update-tab_controlado.dto';

@Controller('tab-controlado')
export class TabControladoController {
  constructor(private readonly tabControladoService: TabControladoService) {}

  @Post()
  create(@Body() createTabControladoDto: CreateTabControladoDto) {
    return this.tabControladoService.create(createTabControladoDto);
  }

  @Get()
  findAll() {
    return this.tabControladoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabControladoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTabControladoDto: UpdateTabControladoDto) {
    return this.tabControladoService.update(+id, updateTabControladoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabControladoService.remove(+id);
  }
}
