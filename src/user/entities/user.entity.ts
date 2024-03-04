import {
  Column,
  Entity, Index,
  JoinColumn, ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

enum Roles {
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
  VIEWER = 'Читатель',
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.VIEWER,
  })
  role: Roles;

  @Column()
  date_creation: Date;

  @ManyToOne(() => Users)
  @JoinColumn({ referencedColumnName: 'id' })
  created_by: string;
}
