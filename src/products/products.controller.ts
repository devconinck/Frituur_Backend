import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  //GET /apo/products
  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }
}
