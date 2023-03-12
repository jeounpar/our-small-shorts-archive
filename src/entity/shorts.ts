import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Shorts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  url: string;
}
