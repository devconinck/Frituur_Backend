import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
@Module({
  imports: [PrismaModule],
  controllers: [AppController, ProductsController, CategoriesController],
  providers: [AppService, ProductsService, CategoriesService],
})
export class AppModule {}
