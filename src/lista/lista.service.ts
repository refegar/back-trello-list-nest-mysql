import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lista } from './lista.entity';
import { CreateListaDTO } from './dto/create-lista-dto';

@Injectable()
export class ListaService {
  constructor(
    @InjectRepository(Lista)
    private readonly listaRepository: Repository<Lista>,
  ) {}

  async create(listaDTO: CreateListaDTO): Promise<Lista> {
    // Usa el método 'create' de TypeORM para inicializar la entidad.
    const lista = this.listaRepository.create(listaDTO);

    // Guarda la entidad en la base de datos.
    return await this.listaRepository.save(lista);
  }

  async findAll(): Promise<Lista[]> {

    const lista = await this.listaRepository.find();

    return lista
  }

  async update(id: string, listaDTO: CreateListaDTO): Promise<Lista | null> {
    try {
      // Actualizar en BD
      const result = await this.listaRepository.update(id, listaDTO) 
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
