import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemEntity } from './entities/order-item.entity';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';

@Controller('order-items')
@ApiTags('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiCreatedResponse({ type: OrderItemEntity })
  async create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: OrderItemEntity, isArray: true })
  async findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':orderId')
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: OrderItemEntity, isArray: true })
  async findAllByOrderId(@Param('orderId', ParseIntPipe) orderId: number) {
    return this.orderItemsService.findAllByOrderId(orderId);
  }

  @Get(':orderId/:productId')
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: OrderItemEntity })
  async findOne(
    @Param('orderId', ParseIntPipe) orderId: number,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    return this.orderItemsService.findOne(orderId, productId);
  }

  @Put(':orderId/:productId')
  @Roles(Role.Admin)
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
  @Roles(Role.Admin)
  @ApiOkResponse({ type: OrderItemEntity })
  async remove(
    @Param('orderId') orderId: number,
    @Param('productId') productId: number,
  ) {
    return this.orderItemsService.remove(orderId, productId);
  }
}
