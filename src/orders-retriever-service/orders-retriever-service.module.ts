import { Module } from '@nestjs/common';
import { OrdersRetrieverServiceController } from './orders-retriever-service.controller';
import { OrdersRetrieverServiceService } from './orders-retriever-service.service';
import { connection } from 'src/common/constatnts/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from 'src/orders-service/orders-service.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pedidos])],
  controllers: [OrdersRetrieverServiceController],
  providers: [OrdersRetrieverServiceService, {
    provide: 'CONNECTION',
    useValue: connection,
  },]
})
export class OrdersRetrieverServiceModule {}
