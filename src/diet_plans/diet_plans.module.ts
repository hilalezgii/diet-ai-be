import { Module } from '@nestjs/common';
import { DietPlansService } from './diet_plans.service';
import { DietPlansController } from './diet_plans.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DietPlan } from './entities/diet_plan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DietPlan])],
  controllers: [DietPlansController],
  providers: [DietPlansService],
})
export class DietPlansModule {}
