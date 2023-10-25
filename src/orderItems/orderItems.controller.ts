import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { OrderItemService } from './orderItems.service';
import { OrderItem } from '@prisma/client';

@Controller('order-item')
export class OrderItemController {
  constructor(private readonly orderItemService: OrderItemService) {}

  @Post()
  create(@Body() orderItem: OrderItem) {
    return this.orderItemService.create(orderItem);
  }

  @Get()
  findAll() {
    return this.orderItemService.findAll();
  }

  @Get(':orderId/:productId')
  findOne(
    @Param('orderID') orderId: number,
    @Param('productId') productId: number,
  ) {
    return this.orderItemService.findOne(orderId, productId);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() orderItem: OrderItem) {
    return this.orderItemService.update(+id, orderItem);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderItemService.remove(+id);
  }
}
