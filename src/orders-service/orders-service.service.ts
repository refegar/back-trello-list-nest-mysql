import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pedidos } from './orders-service.entity';
import { CreateServiceDTO } from './dto/create-orders-dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersServiceService {

  constructor(
    
    @InjectRepository(Pedidos)
    private pedidosRepository: Repository<Pedidos>,
 
  ) {}

    
  async create(serviceDTO: CreateServiceDTO): Promise<Pedidos> {
    const pedido = new Pedidos();
    pedido.nombre = serviceDTO.nombre;
    pedido.categoria = serviceDTO.categoria;
    pedido.precio = serviceDTO.precio;
    pedido.cantidad = serviceDTO.cantidad;

    console.log('Pedido hecho con exito de ',serviceDTO.nombre);
    
    return this.pedidosRepository.save(pedido);
  }
      

}
