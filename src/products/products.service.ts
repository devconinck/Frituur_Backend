import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Product[]> {
    return await this.prisma.product.findMany();
  }

  async findOne(id: number): Promise<Product> | null {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }
  // stel dat we met repository werken: nieuwe file aanmaken met de methode van deze file en die dan in deze file aanroepen: extra stap?
  /* products.repository.ts
    async findOne(id: number): Promise<Product> | null {
      return await this.prisma.product.findUnique({
        where: { id },
      });
    }

    products.service.ts
    async findOne(id: number): Promise<Product> {
      return await this.productsRepository.findOne(id);
     
    }

    products.controller.ts
    blijft zelfde

  */

  async create(product: Product): Promise<Product> {
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

  async update(id: number, product: Product): Promise<Product> | null {
    return await this.prisma.product.update({
      where: { id },
      data: product,
    });
  }

  async remove(id: number): Promise<Product> | null {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
