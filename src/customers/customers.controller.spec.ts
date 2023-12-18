import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Role } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('CustomersController', () => {
  let controller: CustomersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomersController, AuthGuard],
      providers: [CustomersService, PrismaService, JwtService],
    }).compile();

    controller = module.get<CustomersController>(CustomersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all customers', async () => {
    const result = await controller.findAll();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return a customer', async () => {
    const result = await controller.findOne('1');
    expect(result).toBeDefined();
    expect(result.id).toBe(1);
  });

  it('should create a customer', async () => {
    const result = await controller.create({
      name: 'Test Customer',
      email: 'testing@gmail.com',
      password: 'test123456',
      passwordConfirm: 'test123456',
      role: Role.USER,
    });
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
  });

  it('should update a customer', async () => {
    const result = await controller.update('5', {
      name: 'Test Update Customer',
    });
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
  });

  it('should delete a customer', async () => {
    const result = await controller.remove('5');
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
  });
});
