import { PartialType } from '@nestjs/mapped-types';
import { CreateUserChatbotDto } from './create-user_chatbot.dto';

export class UpdateUserChatbotDto extends PartialType(CreateUserChatbotDto) {}
