import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('conversations')
export class Conversations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', unique: true })
  user_id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @UpdateDateColumn()
  created_at: Date;
}
