import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseIntPipe,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CustomerEntity } from './entities/customer.entity';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/role.enum';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';

@Controller('customers')
@ApiTags('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post('/signup')
  @Roles(Role.User)
  @ApiCreatedResponse({ type: CustomerEntity })
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @ApiOkResponse({ type: CustomerEntity, isArray: true })
  @ApiBearerAuth()
  async findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.User)
  @ApiOkResponse({ type: CustomerEntity })
  @ApiBearerAuth()
  async findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @ApiOkResponse({ type: CustomerEntity })
  @ApiBearerAuth()
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @Roles(Role.Admin)
  @ApiOkResponse({ type: CustomerEntity })
  @ApiBearerAuth()
  async remove(@Param('id', ParseIntPipe) id: string) {
    return this.customersService.remove(+id);
  }
}
