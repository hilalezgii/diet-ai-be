import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;
}
