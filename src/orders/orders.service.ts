import { Injectable } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.order.findMany();
  }

  findOne(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
    });
  }

  create(order: Order) {
    return this.prisma.order.create({
      data: order,
    });
  }

  update(id: string, order: Order) {
    return this.prisma.order.update({
      where: { id },
      data: order,
    });
  }

  remove(id: string) {
    return this.prisma.order.delete({
      where: { id },
    });
  }
}
