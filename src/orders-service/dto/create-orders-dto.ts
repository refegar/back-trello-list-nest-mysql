import {
    IsNotEmpty,
    IsNumber,
    IsString,
  } from 'class-validator';

  
  export class CreateServiceDTO {
    @IsString()
    @IsNotEmpty()
    readonly nombre: string;
  
    @IsNotEmpty()
    @IsString()
    readonly categoria: string;
  
    @IsNotEmpty()
    @IsNumber()
    readonly precio: number;
  
    @IsNotEmpty()
    @IsNumber()
    readonly cantidad: number;
  }