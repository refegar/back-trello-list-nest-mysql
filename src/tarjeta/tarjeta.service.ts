import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tarjeta } from '../tarjeta/tarjeta.entity';
import { Repository } from 'typeorm';
import { CreateTarjetaDTO } from './dto/create-tarjeta-dto';
import { UpdateTarjetaDTO } from './dto/update-tarjeta-dto';

@Injectable()
export class TarjetaService {

    constructor(
        @InjectRepository(Tarjeta)
        private readonly tarjetaRepository: Repository<Tarjeta>,
      ) {}


      async create(createTarjetaDTo: CreateTarjetaDTO): Promise<Tarjeta> {
        // Usa el método 'create' de TypeORM para inicializar la entidad.
        const tarjeta = this.tarjetaRepository.create(createTarjetaDTo);
    
        // Guarda la entidad en la base de datos.
        return await this.tarjetaRepository.save(tarjeta);
      }

      async findAll(): Promise<Tarjeta[]> {

        const tarjeta = await this.tarjetaRepository.find();
    
        return tarjeta
      }

      async update(id: string, updateTarjetaDTO: UpdateTarjetaDTO): Promise<Tarjeta | null> {
        try {
          // Actualizar en BD
          const result = await this.tarjetaRepository.update(id, updateTarjetaDTO) 
          if (result.affected === 0) {
            console.log(`Pedido con ID ${id} no encontrado en BD`);
            return null;
          }
          
        } catch (error) {
          console.error('Error en actualización de pedido en BD:', error);
          return null;
        }
      }
}
