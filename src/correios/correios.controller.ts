import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { CepDto } from './dto/cep.dto';

@Controller('correios')
export class CorreiosController {
  constructor(private readonly correiosService: CorreiosService) {}

  @Get('/:cep')
  async findAll(@Param('cep') cep: string): Promise<CepDto>{
    return this.correiosService.findAddressByCep(cep);
  }
}
