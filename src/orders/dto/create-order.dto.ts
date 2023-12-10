import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsDate, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  customerId: number;
}
