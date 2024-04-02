import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from '../../users/entities/user.entity';

@Entity()
export class Metadatas {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({
    comment: 'Студент архивирован',
    default: false,
  })
  is_archived: boolean;

  @Column({
    comment: 'Примечания',
  })
  comments: string;

  @CreateDateColumn({
    comment: 'Дата создания студента',
  })
  created_at: Date;

  @UpdateDateColumn({
    comment: 'Дата изменения студента',
  })
  updated_at: Date;

  @ManyToOne(() => Users)
  created_by: string;
}
