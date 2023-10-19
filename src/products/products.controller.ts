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
  getAllProducts() {
    return this.productService.getAll();
  }

  @Get(':id')
  findCategoryById(@Param('id') id: number) {
    return this.productService.findOne(id);
  }

  @Post()
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() product: Product) {
    return this.productService.update(id, product);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.productService.remove(id);
  }
}
