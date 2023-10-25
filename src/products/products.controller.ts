import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import {
  Body,
  Delete,
  Param,
  Post,
  Put,
  Controller,
  Get,
} from '@nestjs/common';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAll();
  }

  @Get(':id')
  async findProductById(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  async create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() product: Product) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
