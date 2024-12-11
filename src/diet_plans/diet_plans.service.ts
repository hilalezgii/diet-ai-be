import { Injectable } from '@nestjs/common';
import { CreateDietPlanDto } from './dto/create-diet_plan.dto';
import { UpdateDietPlanDto } from './dto/update-diet_plan.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Conversations } from "../conversations/entities/conversation.entity";
import { Repository } from "typeorm";
import { DietPlan } from "./entities/diet_plan.entity";

@Injectable()
export class DietPlansService {
  constructor(
    @InjectRepository(DietPlan)
    private readonly dietPlanRepository: Repository<DietPlan>,
  ) {}
  create(createDietPlanDto: CreateDietPlanDto) {
    const newDietPLan = {
      ...createDietPlanDto,
      created_at: new Date(),
    };
    return this.dietPlanRepository.create(newDietPLan);
  }

  findAll() {
    return `This action returns all dietPlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dietPlan`;
  }

  update(id: number, updateDietPlanDto: UpdateDietPlanDto) {
    return `This action updates a #${id} dietPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} dietPlan`;
  }
}
