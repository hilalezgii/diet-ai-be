import { Injectable } from '@nestjs/common';
import { CreateMealsFoodDto } from './dto/create-meals_food.dto';
import { UpdateMealsFoodDto } from './dto/update-meals_food.dto';

@Injectable()
export class MealsFoodsService {
  create(createMealsFoodDto: CreateMealsFoodDto) {
    return 'This action adds a new mealsFood';
  }

  findAll() {
    return `This action returns all mealsFoods`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mealsFood`;
  }

  update(id: number, updateMealsFoodDto: UpdateMealsFoodDto) {
    return `This action updates a #${id} mealsFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} mealsFood`;
  }
}
