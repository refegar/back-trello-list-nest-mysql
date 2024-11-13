import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedidos } from 'src/orders-service/orders-service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersRetrieverServiceService {
  constructor(
    @InjectRepository(Pedidos)
    private pedidosRepository: Repository<Pedidos>,
 
  ) {}

    
  findAll(): Promise<Pedidos[]> {
    return this.pedidosRepository.find();
  }
}
