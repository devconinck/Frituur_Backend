import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

describe('CategoriesController', () => {
  let controller: CategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoriesController],
      providers: [CategoriesService, PrismaService],
    }).compile();

    controller = module.get<CategoriesController>(CategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return all categories', async () => {
    const result = await controller.findAll();
    expect(result).toBeDefined();
    expect(result.length).toBeGreaterThan(0);
  });

  it('should return a category', async () => {
    const result = await controller.findOne('1');
    expect(result).toBeDefined();
    expect(result.name).toBe('Drinks');
  });

  it('should create a category', async () => {
    const result = await controller.create({
      name: 'Test Category',
    });
    expect(result).toBeDefined();
    expect(result.id).toBeGreaterThan(0);
  });

  it('should delete a category', async () => {
    const result = await controller.remove('8');
    expect(result).toBeDefined();
    expect(result.id).toBe(8);
  });
});
