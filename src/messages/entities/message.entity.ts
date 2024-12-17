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

  @Column({ type: 'integer' })
  user_id: number;

  @Column({ type: 'integer' })
  chatbot_id: number;

  @Column({ type: 'varchar', length: 255 })
  sender: string;

  @Column({ type: 'text' })
  content: string;

  @UpdateDateColumn()
  created_at: Date;
}
