import { Injectable } from '@nestjs/common';
import { CreateMealsFoodDto } from './dto/create-meals_food.dto';
import { UpdateMealsFoodDto } from './dto/update-meals_food.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Foods } from '../foods/entities/food.entity';
import { Repository } from 'typeorm';
import { MealsFoods } from './entities/meals_food.entity';

@Injectable()
export class MealsFoodsService {
  constructor(
    @InjectRepository(MealsFoods)
    private readonly mealsFoodsRepository: Repository<MealsFoods>,
  ) {}
  create(createMealsFoodDto: CreateMealsFoodDto) {
    return this.mealsFoodsRepository.create(createMealsFoodDto);
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
