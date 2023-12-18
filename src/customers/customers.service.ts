import { Injectable, Logger } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  private readonly logger = new Logger(CustomersService.name);

  async create(createCustomerDto: CreateCustomerDto) {
    const { name, email, password, passwordConfirm, role } = createCustomerDto;
    this.logger.log('Creating customer: ' + JSON.stringify(createCustomerDto));
    const passwordMatch = password === passwordConfirm;
    if (!passwordMatch) {
      throw new Error('Passwords do not match');
    }
    const hashedPassword = await bcrypt.hash(createCustomerDto.password, 10);

    createCustomerDto.password = hashedPassword;
    try {
      return await this.prisma.customer.create({
        data: { name, email, password, role },
      });
    } catch (error) {
      this.logger.error(`Error creating customer: ${error.stack}`);
      throw error;
    }
  }

  async findAll() {
    this.logger.log('Finding all customers');
    try {
      return await this.prisma.customer.findMany();
    } catch (error) {
      this.logger.error(`Error finding all customers: ${error.stack}`);
      throw error;
    }
  }

  async findOne(id: number) {
    this.logger.log(`Finding customer with id: ${id}`);
    try {
      return await this.prisma.customer.findUnique({
        where: { id },
      });
    } catch (error) {
      this.logger.error(`Error finding customer with id: ${id}`);
      throw error;
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    this.logger.log(
      `Updating customer with id: ${id} to ${JSON.stringify(
        updateCustomerDto,
      )}`,
    );

    try {
      return await this.prisma.customer.update({
        where: { id },
        data: updateCustomerDto,
      });
    } catch (error) {
      this.logger.error(`Error updating customer with id: ${id}`);
      throw error;
    }
  }

  async remove(id: number) {
    this.logger.log(`Removing customer with id: ${id}`);
    try {
      return await this.prisma.customer.delete({ where: { id } });
    } catch (error) {
      this.logger.error(`Error removing customer with id: ${id}`);
      throw error;
    }
  }
}
