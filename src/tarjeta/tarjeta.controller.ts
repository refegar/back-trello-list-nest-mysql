import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { TarjetaService } from './tarjeta.service';
import { CreateTarjetaDTO } from './dto/create-tarjeta-dto';
import { UpdateTarjetaDTO } from './dto/update-tarjeta-dto';
import { Tarjeta } from './tarjeta.entity';
import { UserJwtGuard } from 'src/auth/user-jwt-guard';

@Controller('tarjeta')
export class TarjetaController {

    constructor(private readonly tarjetaService:TarjetaService ){}

    @Post()
    @UseGuards(UserJwtGuard)
    async create(@Body() createListaDTO: CreateTarjetaDTO,
    @Request()
    request,
): Promise<Tarjeta> {
      try {
        console.log('request.user: ', request.user);
        const lista = await this.tarjetaService.create(createListaDTO);
        return lista;
      } catch (error) {
        console.error('Error al crear la tarjeta:', error); // Registro detallado en el servidor.
        throw new HttpException(
          'Error del servidor al crear tarjeta',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
    
  @Get()
  findAll() {
     try {
      return this.tarjetaService.findAll();
     } catch (error) {
      throw new HttpException('error del servidor a crear pedido',HttpStatus.INTERNAL_SERVER_ERROR)
     }
     
     }

     @Put(':id')
     @UseGuards(UserJwtGuard)
     update(
       @Param('id', ParseIntPipe) id: string,
       @Body() updateTarjetaDTO: UpdateTarjetaDTO,
       @Request()
       request,
     ): Promise<Tarjeta> {
        console.log('request.user: ', request.user);
       return this.tarjetaService.update(id, updateTarjetaDTO);
     }
}
