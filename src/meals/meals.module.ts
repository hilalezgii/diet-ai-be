import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meals } from './entities/meal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Meals])],
  controllers: [MealsController],
  providers: [MealsService],
})
export class MealsModule {}
