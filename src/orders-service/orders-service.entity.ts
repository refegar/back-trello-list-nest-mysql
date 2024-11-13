import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
  @Entity('pedidos')
  export class Pedidos {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    nombre: string;
  
    // @Column('varchar', { array: true })
    // artists: string[];
  
    @Column()
    categoria: string;
  
    @Column()
    precio: number;
  
    @Column()
    cantidad: number;
  }