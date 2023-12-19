import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrdersService, PrismaService],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create an order', async () => {
    const order = await service.create({
      customerId: 1,
      pickup: new Date().toISOString(),
    });
    expect(order).toHaveProperty('id');
  });

  it('should find all orders', async () => {
    const orders = await service.findAll();
    expect(orders.length).toBeGreaterThan(0);
  });

  it('should find all orders for a user', async () => {
    const orders = await service.findAllForUser(1);
    expect(orders.length).toBeGreaterThan(0);
  });

  it('should find one order', async () => {
    const order = await service.findOne(1);
    expect(order).toHaveProperty('id');
  });
});
