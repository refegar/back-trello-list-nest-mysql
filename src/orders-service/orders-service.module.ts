import { Module } from '@nestjs/common';
import { OrdersServiceController } from './orders-service.controller';
import { OrdersServiceService } from './orders-service.service';
import { connection } from 'src/common/constatnts/connection';
import { Pedidos } from './orders-service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Pedidos])],
  controllers: [OrdersServiceController],
  providers: [OrdersServiceService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ]
})
export class OrdersServiceModule {}
