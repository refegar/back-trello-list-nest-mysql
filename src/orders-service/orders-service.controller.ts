import { 
    Controller,
    Post,
    HttpException,
    HttpStatus,
    Body,
} from '@nestjs/common';
import {OrdersServiceService} from './orders-service.service'
import {CreateServiceDTO} from './dto/create-orders-dto'
import { Pedidos } from './orders-service.entity';

@Controller('orders-service')
export class OrdersServiceController {
constructor(private ordersServiceService :OrdersServiceService ){}
    @Post()
    create(@Body() createServiceDTO:CreateServiceDTO):Promise<Pedidos> {
        
       try {
        return this.ordersServiceService.create(createServiceDTO);
       } catch (error) {
        throw new HttpException('error del servidor a crear pedido',HttpStatus.INTERNAL_SERVER_ERROR)
       }
       
       }

}
