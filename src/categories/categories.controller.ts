import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('categories')
@ApiTags('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async findAllCategories() {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findCategoryById(@Param('id') id: string) {
    return this.categoriesService.findOne(+id);
  }

  @Post()
  create(@Body() category: Category) {
    return this.categoriesService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() category: Category) {
    return this.categoriesService.update(+id, category);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriesService.remove(+id);
  }
}
