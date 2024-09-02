import { IsString, IsDateString, IsNumber, IsArray, IsOptional } from 'class-validator';

export class CreateTabMedicamentoDto {
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

  @IsString()
  fabricante: string;

  @IsDateString()
  dataDeFabricacao: string;

  @IsDateString()
  dataDeValidade: string;

  @IsNumber()
  preco: number;

  @IsString()
  codigoDeBarras: string;

  @IsString()
  dosagem: string;

  @IsString()
  tipo: string;

  @IsArray()
  @IsOptional()
  composicoes?: number[];
}