import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async findAllOrders() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  async findOrderById(@Param('id') id: number) {
    return this.ordersService.findOne(id);
  }

  @Post()
  create(@Body() order: Order) {
    return this.ordersService.create(order);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() order: Order) {
    return this.ordersService.update(id, order);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.ordersService.remove(id);
  }
}
