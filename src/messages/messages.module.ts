import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Messages } from './entities/message.entity';
import { OpenaiModule } from '../openai/openai.module';
import { ChatbotsModule } from '../chatbots/chatbots.module';

@Module({
  imports: [ChatbotsModule, OpenaiModule, TypeOrmModule.forFeature([Messages])],
  controllers: [MessagesController],
  providers: [MessagesService],
  exports: [MessagesService],
})
export class MessagesModule {}
