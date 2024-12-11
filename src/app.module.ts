import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { User } from './user/user.entity';
import { UserDetailModule } from './user_detail/user_detail.module';
import { ConversationsModule } from './conversations/conversations.module';
import { MessagesModule } from './messages/messages.module';
import { DietPlansModule } from './diet_plans/diet_plans.module';
import { MealsModule } from './meals/meals.module';
import { FoodsModule } from './foods/foods.module';
import { MealsFoodsModule } from './meals_foods/meals_foods.module';
import { AuthModule } from './auth/auth.module';

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
    ConversationsModule,
    MessagesModule,
    DietPlansModule,
    MealsModule,
    FoodsModule,
    MealsFoodsModule,
    AuthModule,
  ],
})
export class AppModule {}
