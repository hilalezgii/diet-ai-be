import { PartialType } from '@nestjs/mapped-types';
import { CreateDietPlanDto } from './create-diet_plan.dto';

export class UpdateDietPlanDto extends PartialType(CreateDietPlanDto) {}
