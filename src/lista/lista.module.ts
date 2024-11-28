import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';
import { Lista } from './lista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lista])], // Registra la entidad `Lista` con TypeORM
  providers: [ListaService],                  // Declara `ListaService` como un proveedor
  exports: [ListaService],                    // Exporta el servicio para ser usado en otros módulos
  controllers: [ListaController],             // Registra el controlador
})
export class ListaModule {}
