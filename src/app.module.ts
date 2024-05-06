import { Module } from '@nestjs/common';
import { CorreiosModule } from './correios/correios.module';
import { CorreiosController } from './correios/correios.controller';
import { CorreiosService } from './correios/correios.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CorreiosModule, HttpModule],
  controllers: [CorreiosController],
  providers: [CorreiosService],
})
export class AppModule {}
