export interface CreateMessageDto {
  content: string;
  sender: 'assistant' | 'user' | 'system';
  conversation_id: number;
  chatbot_id: number;
}
