import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @ApiProperty({ default: null })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ default: null })
  @IsNotEmpty()
  price: Decimal;

  @ApiProperty()
  @IsOptional()
  @IsString()
  url?: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  categoryId: number;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  createdAt?: Date;
}
