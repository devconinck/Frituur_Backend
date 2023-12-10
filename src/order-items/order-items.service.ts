import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
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

  async findAll() {
    this.logger.log('Finding all order items');
    try {
      return await this.prisma.orderItem.findMany();
    } catch (error) {
      this.logger.error(`Error finding all order items: ${error.stack}`);
      throw error;
    }
  }

  async findOne(orderId: number, productId: number) {
    this.logger.log(`Finding order item with id: ${orderId}`);
    try {
      return await this.prisma.orderItem.findUnique({
        where: { productId_orderId: { productId, orderId } },
      });
    } catch (error) {
      this.logger.error(`Error finding order item with id: ${orderId}`);
      throw error;
    }
  }

  async findAllByOrderId(orderId: number) {
    this.logger.log(`Finding order items with orderId: ${orderId}`);
    try {
      return await this.prisma.orderItem.findMany({
        where: { orderId },
      });
    } catch (error) {
      this.logger.error(`Error finding order items with orderId: ${orderId}`);
      throw error;
    }
  }

  async update(
    orderId: number,
    productId: number,
    updateOrderItemDto: UpdateOrderItemDto,
  ) {
    this.logger.log(
      `Updating order item with id: ${orderId} to ${JSON.stringify(
        updateOrderItemDto,
      )}`,
    );
    try {
      return await this.prisma.orderItem.update({
        where: {
          productId_orderId: { productId: orderId, orderId: productId },
        },
        data: updateOrderItemDto,
      });
    } catch (error) {
      this.logger.error(`Error updating order item with id: ${orderId}`);
      throw error;
    }
  }

  async remove(orderId: number, productId: number) {
    this.logger.log(`Removing order item with id: ${orderId}`);
    try {
      return await this.prisma.orderItem.delete({
        where: { productId_orderId: { productId, orderId } },
      });
    } catch (error) {
      this.logger.error(`Error removing order item with id: ${orderId}`);
      throw error;
    }
  }
}
