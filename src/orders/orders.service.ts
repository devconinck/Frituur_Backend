import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(OrdersService.name);

  create(createOrderDto: CreateOrderDto) {
    this.logger.log('Creating order: ' + JSON.stringify(createOrderDto));
    try {
      return this.prisma.order.create({ data: createOrderDto });
    } catch (error) {
      this.logger.error(`Error creating order: ${error.stack}`);
      throw error;
    }
  }

  async findAll() {
    this.logger.log('Finding all orders');
    try {
      return await this.prisma.order.findMany({
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(`Error finding all orders: ${error.stack}`);
      throw error;
    }
  }

  async findAllForUser(userId: number) {
    this.logger.log(`Finding all orders for user with id: ${userId}`);
    try {
      return await this.prisma.order.findMany({
        where: { customerId: userId },
        include: {
          items: {
            include: {
              product: true,
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(`Error finding all orders for user with id: ${userId}`);
      throw error;
    }
  }

  async findOne(id: number) {
    this.logger.log(`Finding order with id: ${id}`);
    try {
      return await this.prisma.order.findUnique({ where: { id } });
    } catch (error) {
      this.logger.error(`Error finding order with id: ${id}`);
      throw error;
    }
  }
}
