import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  getAllProducts() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  create(product: Product) {
    return this.prisma.product.create({
      data: product,
    });
  }

  update(id: string, product: Product) {
    return this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({
      where: { id },
    });
  }
}
