import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_chatbots')
export class UserChatbot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  chatbot_id: number;
}
