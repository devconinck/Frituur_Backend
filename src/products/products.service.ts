import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async create(product: Product) {
    const exists = this.prisma.product.findUnique({
      where: { id: product.id },
    });
    if (product.price < new Decimal(0))
      throw new Error('Price must be greater than 0');

    if (exists) throw new Error('Product already exists');

    return await this.prisma.product.create({
      data: product,
    });
  }

  async update(id: number, product: Product) {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
