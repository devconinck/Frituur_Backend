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
});
