import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

enum Roles {
  ADMIN = 'Администратор',
  EDITOR = 'Редактор',
  VIEWER = 'Читатель',
}

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  user_password: string;

  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.VIEWER,
  })
  user_role: Roles;

  @Column()
  user_date_creation: Date;

  @OneToOne(() => Users)
  @JoinColumn({ referencedColumnName: 'user_id' })
  whoCreated: number;
}
