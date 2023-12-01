import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of products', () => {
    expect(service.findAll()).toBeInstanceOf(Array);
  });

  it('should return a product with id 1', () => {
    expect(service.findOne(1)).toHaveProperty('id', '1');
  });
});
