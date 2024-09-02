import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateTabComposicaoDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  @IsString()
  principioativo: string;

  @IsOptional()
  @IsString()
  coadjuvante?: string;

  @IsOptional()
  @IsString()
  terapeutica?: string;

  @IsOptional()
  @IsString()
  tecnico?: string;

  @IsOptional()
  @IsString()
  corretivo?: string;

  @IsOptional()
  @IsString()
  veiculo?: string;

  @IsOptional()
  @IsString()
  excipiente?: string;

  @IsOptional()
  @IsString()
  flavorizante?: string;
}