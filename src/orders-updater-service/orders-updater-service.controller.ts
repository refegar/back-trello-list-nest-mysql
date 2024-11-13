import { Controller,Put,Delete, Param, ParseIntPipe, Body } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { OrdersUpdaterServiceService } from './orders-updater-service.service';
import { CreateServiceDTO } from 'src/orders-service/dto/create-orders-dto';

@Controller('orders-updater-service')
export class OrdersUpdaterServiceController {
    constructor(private ordersUpdaterServiceService :OrdersUpdaterServiceService ){}
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number): Promise<DeleteResult> {
      return this.ordersUpdaterServiceService.remove(id);
    }

    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateSongDTO: CreateServiceDTO,
    ): Promise<UpdateResult> {
      return this.ordersUpdaterServiceService.update(id, updateSongDTO);
    }
  
}
