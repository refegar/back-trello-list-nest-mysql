import { IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class UpdateTarjetaDTO {
 

  @IsOptional()
  @IsString()
  readonly estado?: string;

}
