import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}

  @Get()
  async getAllCustomers() {
    return this.customersService.getAllCustomers();
  }

  @Get(':id')
  async findCustomerById(@Param('id') id: number) {
    return this.customersService.findOne(id);
  }

  @Post()
  create(@Body() customer: Customer) {
    return this.customersService.create(customer);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() customer: Customer) {
    return this.customersService.update(id, customer);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.customersService.remove(id);
  }
}
