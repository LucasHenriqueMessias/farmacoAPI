import { PartialType } from '@nestjs/mapped-types';
import { CreateTabControladoDto } from './create-tab_controlado.dto';

export class UpdateTabControladoDto extends PartialType(CreateTabControladoDto) {}
