import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('messages')
export class Messages {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', unique: true })
  conversation_id: number;

  @Column({ type: 'varchar', length: 255 })
  sender: string;

  @Column({ type: 'varchar', length: 255 })
  content: string;

  @UpdateDateColumn()
  created_at: Date;
}
