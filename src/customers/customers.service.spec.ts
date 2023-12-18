import { Test, TestingModule } from '@nestjs/testing';
import { CustomersService } from './customers.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '@prisma/client';

describe('CustomersService', () => {
  let service: CustomersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomersService, PrismaService],
    }).compile();

    service = module.get<CustomersService>(CustomersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of customers', async () => {
    const customers = await service.findAll();
    expect(customers).toBeInstanceOf(Array);
  });
  it('should return a customer', async () => {
    const customer = await service.findOne(1);
    expect(customer).toBeInstanceOf(Object);
  });
  it('should create a customer', async () => {
    const customer = await service.create({
      name: 'test',
      email: 'customerTest@gmail.com',
      password: 'test123456',
      passwordConfirm: 'test123456',
      role: Role.USER,
    });
    expect(customer.id).toBe(4);
    expect(customer.name).toBe('test');
  });

  it('should update a customer', async () => {
    const customer = await service.update(4, { name: 'testUpdate' });
    expect(customer).toBeInstanceOf(Object);
  });
  it('should delete a customer', async () => {
    const customer = await service.remove(4);
    expect(customer).toBeInstanceOf(Object);
  });
});
