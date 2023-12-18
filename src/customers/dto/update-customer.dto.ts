import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCustomerDto {
  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  @IsOptional()
  name?: string;

  @ApiProperty()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  @IsOptional()
  lastName?: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  birthDate?: Date;
}
