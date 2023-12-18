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
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { OrderEntity } from './entities/order.entity';
import { Role } from 'src/auth/role.enum';
import { Roles } from 'src/auth/roles.decorator';

@Controller('orders')
@ApiTags('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiCreatedResponse({ type: OrderEntity })
  async create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get('user/:userId')
  @ApiOkResponse({ type: OrderEntity, isArray: true })
  async findAllForUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.ordersService.findAllForUser(userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: OrderEntity })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.ordersService.findOne(+id);
  }
}
