import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('ProductsController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [OrdersService, PrismaService],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all orders', async () => {
    const result = await controller.findAll();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return a order', async () => {
    const result = await controller.findOne('1');
    expect(result).toBeDefined();
    expect(result.customerId).toBe(1);
  });

  it('should return all orders for a user', async () => {
    const result = await controller.findAllForUser(1);
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should create a order', async () => {
    const result = await controller.create({
      customerId: 1,
      pickup: new Date(),
    });
    expect(result).toBeDefined();
    expect(result.id).toBeGreaterThan(0);
  });
});
