import { Module } from '@nestjs/common';
import { OrdersUpdaterServiceController } from './orders-updater-service.controller';
import { OrdersUpdaterServiceService } from './orders-updater-service.service';
import { connection } from 'src/common/constatnts/connection';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedidos } from 'src/orders-service/orders-service.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Pedidos])],
  controllers: [OrdersUpdaterServiceController],
  providers: [OrdersUpdaterServiceService,
    {
      provide: 'CONNECTION',
      useValue: connection,
    },
  ]
})
export class OrdersUpdaterServiceModule {}
