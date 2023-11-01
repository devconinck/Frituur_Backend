import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderItemDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  orderId: number;
  @ApiProperty()
  productId: number;
  @ApiProperty()
  quantity: number;
}
