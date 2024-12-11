import { Injectable } from '@nestjs/common';
import { CreateMealDto } from './dto/create-meal.dto';
import { UpdateMealDto } from './dto/update-meal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Meals } from './entities/meal.entity';

@Injectable()
export class MealsService {
  constructor(
    @InjectRepository(Meals)
    private readonly mealRepository: Repository<Meals>,
  ) {}
  create(createMealDto: CreateMealDto) {
    const newMeal = {
      ...createMealDto,
      time: new Date(),
    };
    return this.mealRepository.create(newMeal);
  }

  findAll() {
    return `This action returns all meals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meal`;
  }

  update(id: number, updateMealDto: UpdateMealDto) {
    return `This action updates a #${id} meal`;
  }

  remove(id: number) {
    return `This action removes a #${id} meal`;
  }
}
