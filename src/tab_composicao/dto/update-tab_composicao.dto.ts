import { PartialType } from '@nestjs/mapped-types';
import { CreateTabComposicaoDto } from './create-tab_composicao.dto';

export class UpdateTabComposicaoDto extends PartialType(CreateTabComposicaoDto) {}
