import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of products', () => {
    expect(controller.findAll()).toBeInstanceOf(Array);
  });

  it('should return a product with id 1', () => {
    expect(controller.findOne('1')).toHaveProperty('id', '1');
  });

  it('should return a product with name "Product 1"', () => {
    expect(controller.findOne('1')).toHaveProperty('name', 'Product 1');
  });

  it('should return a product with price 100', () => {
    expect(controller.findOne('1')).toHaveProperty('price', 100);
  });

  it('should return a product with quantity 10', () => {
    expect(controller.findOne('1')).toHaveProperty('quantity', 10);
  });
});
