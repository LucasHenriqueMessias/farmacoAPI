import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TabComposicaoService } from './tab_composicao.service';
import { CreateTabComposicaoDto } from './dto/create-tab_composicao.dto';
import { UpdateTabComposicaoDto } from './dto/update-tab_composicao.dto';

@Controller('tab-composicao')
export class TabComposicaoController {
  constructor(private readonly tabComposicaoService: TabComposicaoService) {}

  @Post()
  create(@Body() createTabComposicaoDto: CreateTabComposicaoDto) {
    return this.tabComposicaoService.create(createTabComposicaoDto);
  }

  @Get()
  findAll() {
    return this.tabComposicaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tabComposicaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateTabComposicaoDto: UpdateTabComposicaoDto) {
    return this.tabComposicaoService.update(+id, updateTabComposicaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tabComposicaoService.remove(+id);
  }
}
