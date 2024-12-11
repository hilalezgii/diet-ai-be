import { Module } from '@nestjs/common';
import { UserDetailService } from './user_detail.service';
import { UserDetailController } from './user_detail.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDetail } from './entities/user_detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserDetail])],

  controllers: [UserDetailController],
  providers: [UserDetailService],
})
export class UserDetailModule {}
