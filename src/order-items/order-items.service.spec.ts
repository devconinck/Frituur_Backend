import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemsService } from './order-items.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('OrderItemsService', () => {
  let service: OrderItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderItemsService, PrismaService],
    }).compile();

    service = module.get<OrderItemsService>(OrderItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create order item', async () => {
    const orderItem = await service.create({
      quantity: 4,
      productId: 4,
      orderId: 5,
    });
    expect(orderItem).toBeInstanceOf(Object);
    expect(orderItem.orderId).toBe(5);
    expect(orderItem.quantity).toBe(4);
    expect(orderItem.productId).toBe(4);
  });
});
