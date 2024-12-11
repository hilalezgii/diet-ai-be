import { Module } from '@nestjs/common';
import { MealsFoodsService } from './meals_foods.service';
import { MealsFoodsController } from './meals_foods.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MealsFoods } from './entities/meals_food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MealsFoods])],
  controllers: [MealsFoodsController],
  providers: [MealsFoodsService],
})
export class MealsFoodsModule {}
