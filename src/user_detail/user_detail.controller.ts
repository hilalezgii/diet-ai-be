import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserDetailService } from './user_detail.service';
import { CreateUserDetailDto } from './dto/create-user_detail.dto';
import { UpdateUserDetailDto } from './dto/update-user_detail.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('user-detail')
export class UserDetailController {
  constructor(private readonly userDetailService: UserDetailService) {}

  @Post()
  create(@Body() createUserDetailDto: CreateUserDetailDto, @Request() req) {
    const userId = req?.user?.userId;

    if (!userId) {
      return {
        messages: 'Yetkisiz erişim.',
        status: 404,
      };
    }

    return this.userDetailService.create(createUserDetailDto, Number(userId));
  }

  @Get('user')
  getUserDetail(@Request() req) {
    const userId = req?.user?.userId;

    if (!userId) {
      return {
        messages: 'Yetkisiz erişim.',
        status: 404,
      };
    }

    return this.userDetailService.findOne(userId);
  }

  @Get()
  findAll() {
    return this.userDetailService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDetailService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserDetailDto: UpdateUserDetailDto,
  ) {
    return this.userDetailService.update(+id, updateUserDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDetailService.remove(+id);
  }
}
