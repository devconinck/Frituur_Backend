import { Injectable } from '@nestjs/common';
import { Customer } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  getAllCustomers() {
    return this.prisma.customer.findMany();
  }

  findOne(id: number) {
    return this.prisma.customer.findUnique({
      where: { id },
    });
  }

  create(customer: Customer) {
    return this.prisma.customer.create({
      data: customer,
    });
  }

  update(id: number, customer: Customer) {
    return this.prisma.customer.update({
      where: { id },
      data: customer,
    });
  }

  remove(id: number) {
    return this.prisma.customer.delete({
      where: { id },
    });
  }
}
