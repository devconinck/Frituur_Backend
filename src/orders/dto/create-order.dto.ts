import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  customerId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  pickup: Date;
}
