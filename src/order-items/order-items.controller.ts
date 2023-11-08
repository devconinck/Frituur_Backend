import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemEntity } from './entities/order-item.entity';

@Controller('order-items')
@ApiTags('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderItemEntity })
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @ApiOkResponse({ type: OrderItemEntity, isArray: true })
  async findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':orderId')
  @ApiOkResponse({ type: OrderItemEntity, isArray: true })
  async findAllByOrderId(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.findAllByOrderId(orderId);
  }

  @Get(':orderId/:productId')
  @ApiOkResponse({ type: OrderItemEntity })
  async findOne(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.orderItemsService.findOne(orderId, productId);
  }

  @Patch(':orderId/:productId')
  @ApiOkResponse({ type: OrderItemEntity })
  async update(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('productId', ParseIntPipe) productId: number,
    @Body() updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return this.orderItemsService.update(
      orderId,
      productId,
      updateOrderItemDto,
    );
  }

  @Delete(':orderId/:productId')
  @ApiOkResponse({ type: OrderItemEntity })
  async remove(
    @Param('orderId') orderId: number,
    @Param('productId') productId: number,
  ) {
    return this.orderItemsService.remove(orderId, productId);
  }
}
