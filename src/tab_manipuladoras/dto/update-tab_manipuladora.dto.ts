import { PartialType } from '@nestjs/mapped-types';
import { CreateTabManipuladoraDto } from './create-tab_manipuladora.dto';

export class UpdateTabManipuladoraDto extends PartialType(CreateTabManipuladoraDto) {}
