import { Injectable } from '@nestjs/common';
import { Category } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  create(category: Category) {
    return this.prisma.category.create({
      data: category,
    });
  }

  update(id: number, category: Category) {
    return this.prisma.category.update({
      where: { id },
      data: category,
    });
  }

  remove(id: number) {
    return this.prisma.category.delete({
      where: { id },
    });
  }
}
