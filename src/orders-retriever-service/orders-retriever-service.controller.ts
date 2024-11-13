import { 
    Controller, 
    Get,
    HttpException,
    HttpStatus } from '@nestjs/common';
import { OrdersRetrieverServiceService } from './orders-retriever-service.service'; 
import { Pedidos } from 'src/orders-service/orders-service.entity';

@Controller('orders-retriever-service')
export class OrdersRetrieverServiceController {
    constructor(private ordersRetrieverServiceService :OrdersRetrieverServiceService ){}
    @Get()
    findAll() {
        
       try {
        return this.ordersRetrieverServiceService.findAll();
       } catch (error) {
        throw new HttpException('error del servidor a crear pedido',HttpStatus.INTERNAL_SERVER_ERROR)
       }
       
       }

}
