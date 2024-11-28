
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('lista')
export class Lista {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

}
