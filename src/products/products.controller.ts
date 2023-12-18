import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ProductEntity } from './entities/product.entity';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';

@Controller('products')
@ApiTags('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @Roles(Role.Admin)
  @ApiCreatedResponse({ type: ProductEntity })
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOkResponse({ type: ProductEntity, isArray: true })
  async findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ProductEntity })
  async findOne(@Param('id', ParseIntPipe) id: string) {
    return this.productsService.findOne(+id);
  }

  @Put(':id')
  @Roles(Role.Admin)
  @ApiOkResponse({ type: ProductEntity })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @ApiOkResponse({ type: ProductEntity })
  async remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
