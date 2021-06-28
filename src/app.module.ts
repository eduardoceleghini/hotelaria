import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelModule } from './hotel/hotel.module';
import { HospedeModule } from './hospede/hospede.module';
import { QuartoModule } from './quarto/quarto.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [HotelModule, HospedeModule, QuartoModule, CategoriaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
