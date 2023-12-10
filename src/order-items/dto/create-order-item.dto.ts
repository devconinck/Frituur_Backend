import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  orderId: number;

  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty()
  @IsInt()
  @Min(1)
  quantity: number;
}
