import { ApiProperty } from '@nestjs/swagger';
import { OrderItem } from '@prisma/client';

export class OrderItemEntity implements OrderItem {
  @ApiProperty()
  orderId: number;
  @ApiProperty()
  productId: number;
  @ApiProperty()
  quantity: number;
}
