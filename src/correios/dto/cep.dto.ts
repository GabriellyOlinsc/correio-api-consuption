import { IsNotEmpty, IsString } from "class-validator";

export class CepDto {
    @IsString()
    @IsNotEmpty()
    cep: string;

    @IsString()
    logradouro: string;

    @IsString()
    complemento: string;

    @IsString()
    bairro: string;

    @IsString()
    localidade: string;

    @IsString()
    @IsNotEmpty()
    uf: string;

    @IsString()
    ibge: string;

    @IsString()
    gia: string;

    @IsString()
    ddd: string;

    @IsString()
    siafi: string;
  }
  