
import { User } from 'src/users/user.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tarjeta')
export class Tarjeta {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  estado: string;

  @Column()
  descripcion: string;

  /*
  @Column('varchar', { array: true })
  comentarios: string[];  // esta es config para postgre
*/
@Column('json')
comentarios: string[];

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
