import { Test, TestingModule } from '@nestjs/testing';
import { OrderItemsController } from './order-items.controller';
import { OrderItemsService } from './order-items.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('OrderItemsController', () => {
  let controller: OrderItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderItemsController],
      providers: [OrderItemsService, PrismaService],
    }).compile();

    controller = module.get<OrderItemsController>(OrderItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create order item', async () => {
    const orderItem = await controller.create({
      quantity: 4,
      productId: 20,
      orderId: 1,
    });
    expect(orderItem).toBeInstanceOf(Object);
    expect(orderItem.orderId).toBe(1);
    expect(orderItem.quantity).toBe(4);
    expect(orderItem.productId).toBe(20);
  });
});
