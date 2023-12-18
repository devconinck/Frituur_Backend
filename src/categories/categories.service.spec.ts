import { Test, TestingModule } from '@nestjs/testing';
import { CategoriesService } from './categories.service';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategoriesService, PrismaService],
    }).compile();

    service = module.get<CategoriesService>(CategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of categories', async () => {
    const categories = await service.findAll();
    expect(categories).toBeInstanceOf(Array);
  });

  it('should return a category', async () => {
    const category = await service.findOne(1);
    expect(category).toBeInstanceOf(Object);
  });
  it('should create a category', async () => {
    const category = await service.create({ name: 'test' });
    expect(category.name).toBe('test');
  });

  it('should update a category', async () => {
    const category = await service.update(6, { name: 'testUpdate' });
    expect(category.id).toBe(6);
    expect(category.name).toBe('testUpdate');
  });
  it('should delete a category', async () => {
    const category = await service.remove(6);
    expect(category.id).toBe(6);
  });
});
