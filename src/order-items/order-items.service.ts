import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  async create(createOrderItemDto: CreateOrderItemDto) {
    return await this.prisma.orderItem.create({ data: createOrderItemDto });
  }

  async findAll() {
    return await this.prisma.orderItem.findMany();
  }

  async findOne(orderId: number, productId: number) {
    return await this.prisma.orderItem.findUnique({
      where: { productId_orderId: { productId, orderId } },
    });
  }

  async findAllByOrderId(orderId: number) {
    return await this.prisma.orderItem.findMany({
      where: { orderId },
    });
  }

  async update(
    orderId: number,
    productId: number,
    updateOrderItemDto: UpdateOrderItemDto,
  ) {
    return await this.prisma.orderItem.update({
      where: { productId_orderId: { productId: orderId, orderId: productId } },
      data: updateOrderItemDto,
    });
  }

  async remove(orderId: number, productId: number) {
    return await this.prisma.orderItem.delete({
      where: { productId_orderId: { productId, orderId } },
    });
  }
}
