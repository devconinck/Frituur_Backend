import { Controller, Post, Body } from '@nestjs/common';
import { OrderItemsService } from './order-items.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { OrderItemEntity } from './entities/order-item.entity';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

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
}
