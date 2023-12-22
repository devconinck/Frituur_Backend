import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Decimal } from '@prisma/client/runtime/library';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, PrismaService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a product', async () => {
    const product = await controller.create({
      name: 'Test Product',
      price: new Decimal(100),
      categoryId: 1,
    });
    expect(product).toHaveProperty('id');
  });

  it('should find all products', async () => {
    const products = await controller.findAll();
    expect(products.length).toBeGreaterThan(0);
  });

  it('should update a product', async () => {
    const product = await controller.update(1, {
      name: 'Test Product',
      price: new Decimal(100),
    });
    expect(product).toHaveProperty('id');
  });

  it('should remove a product', async () => {
    const product = await controller.remove('1');
    expect(product).toHaveProperty('id');
  });
});
