import { Module } from '@nestjs/common';
import { UserChatbotsService } from './user_chatbots.service';
import { UserChatbotsController } from './user_chatbots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserChatbot } from './entities/user_chatbot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserChatbot])],
  controllers: [UserChatbotsController],
  providers: [UserChatbotsService],
  exports: [UserChatbotsService],
})
export class UserChatbotsModule {}
