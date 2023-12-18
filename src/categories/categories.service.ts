import { Injectable, Logger } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(CategoriesService.name);

  async create(createCategoryDto: CreateCategoryDto) {
    this.logger.log('Creating category: ' + JSON.stringify(createCategoryDto));
    try {
      return await this.prisma.category.create({ data: createCategoryDto });
    } catch (error) {
      this.logger.error(`Error creating category: ${error.stack}`);
      throw error;
    }
  }

  async findAll() {
    this.logger.log('Finding all categories');
    try {
      return await this.prisma.category.findMany();
    } catch (error) {
      this.logger.error(`Error finding all categories: ${error.stack}`);
      throw error;
    }
  }

  async findOne(id: number) {
    this.logger.log(`Finding category with id: ${id}`);
    try {
      return await this.prisma.category.findUnique({
        where: { id },
      });
    } catch (error) {
      this.logger.error(`Error finding category with id: ${id}`);
      throw error;
    }
  }

  async remove(id: number) {
    this.logger.log(`Removing category with id: ${id}`);
    try {
      return await this.prisma.category.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Error removing category with id: ${id}`);
      throw error;
    }
  }
}
