import { Module } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tarjeta } from '../tarjeta/tarjeta.entity';
import { TarjetaController } from './tarjeta.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tarjeta])], // Registra la entidad `Lista` con TypeORM
  providers: [TarjetaService],                  // Declara `ListaService` como un proveedor
  exports: [TarjetaService],                    // Exporta el servicio para ser usado en otros módulos
  controllers: [TarjetaController],             // Registra el controlador
})
export class TarjetaModule {}
