import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class RegisterDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  passwordConfirm: string;

  @ApiProperty()
  @IsOptional()
  role: Role;
}
