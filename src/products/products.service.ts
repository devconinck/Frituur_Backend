import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(ProductsService.name);

  async create(createProductDto: CreateProductDto) {
    this.logger.log('Creating product: ' + JSON.stringify(createProductDto));
    try {
      return await this.prisma.product.create({ data: createProductDto });
    } catch (error) {
      this.logger.error(`Error creating product: ${error.stack}`);
      throw error;
    }
  }

  async findAll() {
    this.logger.log('Finding all products');
    try {
      return await this.prisma.product.findMany();
    } catch (error) {
      this.logger.error(`Error finding all products: ${error.stack}`);
      throw error;
    }
  }

  async findOne(id: number) {
    this.logger.log(`Finding product with id: ${id}`);
    try {
      return await this.prisma.product.findUnique({
        where: { id },
        include: { category: true },
      });
    } catch (error) {
      this.logger.error(`Error finding product with id: ${id}`);
      throw error;
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    this.logger.log(
      `Updating product with id: ${id} to ${JSON.stringify(updateProductDto)}`,
    );
    try {
      return await this.prisma.product.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      this.logger.error(`Error updating product with id: ${id}`);
      throw error;
    }
  }

  async remove(id: number) {
    this.logger.log(`Removing product with id: ${id}`);
    try {
      return await this.prisma.product.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Error removing product with id: ${id}`);
      throw error;
    }
  }
}
