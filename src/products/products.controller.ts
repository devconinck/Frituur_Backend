import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';
import { Body, Delete, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async findCategoryById(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }
}
