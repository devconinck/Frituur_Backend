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
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';
import { Roles } from 'src/roles.decorator';
import { Role } from 'src/role.enum';
import * as bcrypt from 'bcrypt';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('/signup')
  @Roles(Role.Admin, Role.User)
  @ApiCreatedResponse({ type: CustomerEntity })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    const saltOrRounds = 10;
    createCustomerDto.password = await bcrypt.hash(
      createCustomerDto.password,
      saltOrRounds,
    );
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: CustomerEntity, isArray: true })
  async findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: CustomerEntity })
  async findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: CustomerEntity })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  @Roles(Role.Admin, Role.User)
  @ApiOkResponse({ type: CustomerEntity })
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.customersService.remove(+id);
  }
}
