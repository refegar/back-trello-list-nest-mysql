import { IsNotEmpty, IsString } from 'class-validator';

export class CreateListaDTO {
  @IsNotEmpty()
  @IsString()
  readonly nombre: string;
}
