import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Request, UseGuards } from '@nestjs/common';
import { CreateListaDTO } from './dto/create-lista-dto';
import { ListaService } from './lista.service';
import { Lista } from './lista.entity';
import { UserJwtGuard } from 'src/auth/user-jwt-guard';

@Controller('lista')
export class ListaController {
  constructor(private readonly listaService: ListaService) {}

  @Post()
  @UseGuards(UserJwtGuard)
  async create(@Body() createListaDTO: CreateListaDTO,
  @Request()
  request,
): Promise<Lista> {
    try {
      console.log('request.user: ', request.user);
      const lista = await this.listaService.create(createListaDTO);
      return lista;
    } catch (error) {
      console.error('Error al crear la lista:', error); // Registro detallado en el servidor.
      throw new HttpException(
        'Error del servidor al crear lista',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get()
  findAll() {
     try {
      return this.listaService.findAll();
     } catch (error) {
      throw new HttpException('error del servidor a crear pedido',HttpStatus.INTERNAL_SERVER_ERROR)
     }
     
     }

     @Put(':id')
     @UseGuards(UserJwtGuard)
     update(
       @Param('id', ParseIntPipe) id: string,
       @Body() createListaDTO: CreateListaDTO,
       @Request()
       request,
     ): Promise<Lista> {
      console.log('request.user: ', request.user);
       return this.listaService.update(id, createListaDTO);
     }

}
