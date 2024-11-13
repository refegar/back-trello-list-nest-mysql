import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateServiceDTO } from 'src/orders-service/dto/create-orders-dto';
import { Pedidos } from 'src/orders-service/orders-service.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrdersUpdaterServiceService {

  constructor(
    @InjectRepository(Pedidos)
    private pedidosRepository: Repository<Pedidos>,
 
  ) {}

    
  remove(id: number): Promise<DeleteResult> {
    try {
      console.log('Pedido borrado correctamente')
      return this.pedidosRepository.delete(id);
    } catch (error) {
      console.log('Error de bd de borrar pedido')
    }
  }

  update(id: number, recordToUpdate: CreateServiceDTO): Promise<UpdateResult> {
    
  try {
    console.log('Actualizacion con exito')
    return this.pedidosRepository.update(id, recordToUpdate);
  } catch (error) {
    console.log('error en bd de actualizacion de pedido')
  }
  }

}
