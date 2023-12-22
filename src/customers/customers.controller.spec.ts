import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
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

  it('should update a customer', async () => {
    const result = await controller.update('5', {
      name: 'Test Update Customer',
    });
    expect(result).toBeDefined();
    expect(result.id).toBe(5);
  });
});
