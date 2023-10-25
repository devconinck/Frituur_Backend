import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderItem } from '@prisma/client';

@Injectable()
export class OrderItemService {
  constructor(private prisma: PrismaService) {}

  async create(orderItem: OrderItem) {
    return this.prisma.orderItem.create({
      data: orderItem,
    });
  }

  async findAll() {
    return this.prisma.orderItem.findMany();
  }

  async findOne(orderId: number, productId: number) {
    return this.prisma.orderItem.findUnique({
      where: { productId_orderId: { orderId: orderId, productId: productId } },
    });
  }

  async update(id: number, orderItem: OrderItem) {
    return this.prisma.orderItem.update({
      where: { productId_orderId: { orderId: id, productId: id } },
      data: orderItem,
    });
  }

  async remove(id: number) {
    return this.prisma.orderItem.delete({
      where: { productId_orderId: { orderId: id, productId: id } },
    });
  }
}
