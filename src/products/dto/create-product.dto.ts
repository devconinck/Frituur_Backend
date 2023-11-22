import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isNotEmpty,
  isNumber,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ default: null })
  @IsOptional()
  description: string;

  @ApiProperty({ default: null })
  @IsNumber()
  @IsNotEmpty()
  price: Decimal;

  @ApiProperty()
  @IsOptional()
  url: string;

  @ApiProperty()
  categoryId: number;
  @ApiProperty()
  createdAt: Date;
}
