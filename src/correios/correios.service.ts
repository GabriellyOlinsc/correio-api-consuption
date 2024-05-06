import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { CepDto } from './dto/cep.dto';
require('dotenv').config()

const URL_CORREIOS = process.env.URL_CEP

@Injectable()
export class CorreiosService {
    constructor( private readonly httpService: HttpService){}

    async findAddressByCep(cep: string): Promise<CepDto> {
        try {
          const result: AxiosResponse<any> = await this.httpService.axiosRef.get(URL_CORREIOS.replace('{CEP}', cep));
    
          if (result.data.erro === true) {
            throw new NotFoundException('CEP not found');
          }
    
          const cepDto: CepDto = result.data;
          return cepDto;
        } catch (error) {
          throw new BadRequestException(`Error in connection request ${error.message}`);
        }
      }
}
