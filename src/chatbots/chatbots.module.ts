import { Module } from '@nestjs/common';
import { ChatbotsService } from './chatbots.service';
import { ChatbotsController } from './chatbots.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chatbots } from './entities/chatbot.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chatbots])],
  controllers: [ChatbotsController],
  providers: [ChatbotsService],
  exports: [ChatbotsService],
})
export class ChatbotsModule {}
