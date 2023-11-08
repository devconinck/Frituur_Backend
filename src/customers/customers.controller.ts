import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiCreatedResponse({ type: CustomerEntity })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOkResponse({ type: CustomerEntity, isArray: true })
  async findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CustomerEntity })
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.customersService.remove(+id);
  }
}
