import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(OrderItemsService.name);

  async create(createOrderItemDto: CreateOrderItemDto) {
    this.logger.log(
      'Creating order item: ' + JSON.stringify(createOrderItemDto),
    );
    try {
      return await this.prisma.orderItem.create({ data: createOrderItemDto });
    } catch (error) {
      this.logger.error(`Error creating order item: ${error.stack}`);
      throw error;
    }
  }
}
