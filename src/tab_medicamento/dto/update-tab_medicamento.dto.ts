import { PartialType } from '@nestjs/mapped-types';
import { CreateTabMedicamentoDto } from './create-tab_medicamento.dto';
import { IsArray, IsOptional } from 'class-validator';

export class UpdateTabMedicamentoDto extends PartialType(CreateTabMedicamentoDto) {
  @IsArray()
  @IsOptional()
  composicoes?: number[];
}