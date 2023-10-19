import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CustomersService } from './customers/customers.service';
import { CustomersController } from './customers/customers.controller';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
@Module({
  imports: [PrismaModule],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    CustomersController,
    OrdersController,
  ],
  providers: [
    AppService,
    ProductsService,
    CategoriesService,
    CustomersService,
    OrdersService,
  ],
})
export class AppModule {}
