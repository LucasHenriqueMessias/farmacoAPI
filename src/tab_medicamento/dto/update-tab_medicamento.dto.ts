import { PartialType } from '@nestjs/mapped-types';
import { CreateTabMedicamentoDto } from './create-tab_medicamento.dto';

export class UpdateTabMedicamentoDto extends PartialType(CreateTabMedicamentoDto) {}
