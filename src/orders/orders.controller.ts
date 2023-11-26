import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ type: OrderEntity })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  async findAll() {
    return this.ordersService.findAll();
  }

  @Get('user/:userId')
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  async findAllForUser(@Param('userId', ParseIntPipe) userId: string) {
    return this.ordersService.findAllForUser(+userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: OrderEntity })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.ordersService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: OrderEntity })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateOrderDto: UpdateOrderDto,
  ) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: OrderEntity })
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.ordersService.remove(+id);
  }
}
