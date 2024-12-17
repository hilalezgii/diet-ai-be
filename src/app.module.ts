import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserDetailModule } from './user_detail/user_detail.module';
import { MessagesModule } from './messages/messages.module';
import { AuthModule } from './auth/auth.module';
import { ChatbotsModule } from './chatbots/chatbots.module';
import { UserChatbotsModule } from './user_chatbots/user_chatbots.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { OpenaiModule } from './openai/openai.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'admin',
      password: process.env.DB_PASSWORD || '123',
      database: process.env.DB_NAME || 'diet_ai',
      autoLoadEntities: true,
      synchronize: true,
      entities: [User],
    }),
    UserModule,
    UserDetailModule,
    MessagesModule,
    AuthModule,
    ChatbotsModule,
    UserChatbotsModule,
    EventEmitterModule.forRoot(),
    OpenaiModule,
  ],
})
export class AppModule {}
