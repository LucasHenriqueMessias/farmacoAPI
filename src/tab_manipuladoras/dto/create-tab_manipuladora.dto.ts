import { IsString, IsInt, IsEmail, IsDateString } from 'class-validator';

export class CreateTabManipuladoraDto {
  @IsString()
  nome: string;

  @IsString()
  endereco: string;

  @IsString()
  telefone: string;

  @IsEmail()
  email: string;

  @IsString()
  responsavel: string;

  @IsString()
  licenca: string;

  @IsDateString()
  dataDeRegistro: string;

  @IsInt()
  medicamentoId: number;
}