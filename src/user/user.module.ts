import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ChatbotsModule } from '../chatbots/chatbots.module';
import { UserChatbotsModule } from '../user_chatbots/user_chatbots.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ChatbotsModule,
    UserChatbotsModule,
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
