import { IsNotEmpty, IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class CreateTarjetaDTO {
  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;

  @IsOptional()
  @IsString()
  readonly estado?: string;

  @IsArray()
  @IsString({ each: true })
  readonly comentarios: string[];
}
