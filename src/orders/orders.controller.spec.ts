import { Test, TestingModule } from '@nestjs/testing';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

describe('OrdersController', () => {
  let controller: OrdersController;
  let service: OrdersService;
  let createMock;
  let findAllMock: any[];
  let findForUserMock: any[];
  let findOneMock;

  beforeEach(async () => {
    createMock = {
      id: 11,
      createdAt: '2023-12-10T10:43:23.495Z',
      customerId: 5,
    };

    findAllMock = [
      {
        id: 1,
        createdAt: '2023-12-08T17:51:31.012Z',
        customerId: 1,
        items: [
          {
            orderId: 1,
            productId: 4,
            quantity: 2,
            product: {
              id: 4,
              name: 'Sprite',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.934Z',
              categoryId: 1,
              url: 'sprite.png',
            },
          },
          {
            orderId: 1,
            productId: 5,
            quantity: 2,
            product: {
              id: 5,
              name: 'Water',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.938Z',
              categoryId: 1,
              url: 'water.png',
            },
          },
          {
            orderId: 1,
            productId: 10,
            quantity: 4,
            product: {
              id: 10,
              name: 'Boulet',
              description: null,
              price: '2.8',
              createdAt: '2023-12-08T17:51:30.961Z',
              categoryId: 7,
              url: 'boulet.png',
            },
          },
        ],
      },
      {
        id: 2,
        createdAt: '2023-12-08T17:51:31.026Z',
        customerId: 1,
        items: [
          {
            orderId: 2,
            productId: 2,
            quantity: 5,
            product: {
              id: 2,
              name: 'Fanta',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.925Z',
              categoryId: 1,
              url: 'fanta.png',
            },
          },
          {
            orderId: 2,
            productId: 4,
            quantity: 3,
            product: {
              id: 4,
              name: 'Sprite',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.934Z',
              categoryId: 1,
              url: 'sprite.png',
            },
          },
        ],
      },
      {
        id: 3,
        createdAt: '2023-12-08T17:51:31.035Z',
        customerId: 1,
        items: [
          {
            orderId: 3,
            productId: 5,
            quantity: 3,
            product: {
              id: 5,
              name: 'Water',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.938Z',
              categoryId: 1,
              url: 'water.png',
            },
          },
          {
            orderId: 3,
            productId: 9,
            quantity: 5,
            product: {
              id: 9,
              name: 'Ice Tea Zero',
              description: null,
              price: '2.2',
              createdAt: '2023-12-08T17:51:30.956Z',
              categoryId: 1,
              url: 'ice_tea_zero.png',
            },
          },
        ],
      },
      {
        id: 4,
        createdAt: '2023-12-08T17:51:31.043Z',
        customerId: 2,
        items: [
          {
            orderId: 4,
            productId: 4,
            quantity: 5,
            product: {
              id: 4,
              name: 'Sprite',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.934Z',
              categoryId: 1,
              url: 'sprite.png',
            },
          },
          {
            orderId: 4,
            productId: 7,
            quantity: 1,
            product: {
              id: 7,
              name: 'Ice Tea',
              description: null,
              price: '2.2',
              createdAt: '2023-12-08T17:51:30.947Z',
              categoryId: 1,
              url: 'ice_tea.png',
            },
          },
          {
            orderId: 4,
            productId: 11,
            quantity: 4,
            product: {
              id: 11,
              name: 'Bitterballen',
              description: null,
              price: '2.8',
              createdAt: '2023-12-08T17:51:30.967Z',
              categoryId: 7,
              url: 'bitterbal.png',
            },
          },
          {
            orderId: 4,
            productId: 13,
            quantity: 2,
            product: {
              id: 13,
              name: 'Kleine Friet',
              description: null,
              price: '3.3',
              createdAt: '2023-12-08T17:51:30.977Z',
              categoryId: 2,
              url: 'fries_small.png',
            },
          },
        ],
      },
      {
        id: 5,
        createdAt: '2023-12-08T17:51:31.061Z',
        customerId: 2,
        items: [
          {
            orderId: 5,
            productId: 6,
            quantity: 2,
            product: {
              id: 6,
              name: 'Water Bruis',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.943Z',
              categoryId: 1,
              url: 'water_spark.png',
            },
          },
          {
            orderId: 5,
            productId: 7,
            quantity: 4,
            product: {
              id: 7,
              name: 'Ice Tea',
              description: null,
              price: '2.2',
              createdAt: '2023-12-08T17:51:30.947Z',
              categoryId: 1,
              url: 'ice_tea.png',
            },
          },
        ],
      },
      {
        id: 6,
        createdAt: '2023-12-08T17:51:31.070Z',
        customerId: 2,
        items: [
          {
            orderId: 6,
            productId: 3,
            quantity: 1,
            product: {
              id: 3,
              name: 'Cola Zero',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.929Z',
              categoryId: 1,
              url: 'coke_zero.png',
            },
          },
          {
            orderId: 6,
            productId: 6,
            quantity: 5,
            product: {
              id: 6,
              name: 'Water Bruis',
              description: null,
              price: '2',
              createdAt: '2023-12-08T17:51:30.943Z',
              categoryId: 1,
              url: 'water_spark.png',
            },
          },
          {
            orderId: 6,
            productId: 7,
            quantity: 5,
            product: {
              id: 7,
              name: 'Ice Tea',
              description: null,
              price: '2.2',
              createdAt: '2023-12-08T17:51:30.947Z',
              categoryId: 1,
              url: 'ice_tea.png',
            },
          },
          {
            orderId: 6,
            productId: 13,
            quantity: 3,
            product: {
              id: 13,
              name: 'Kleine Friet',
              description: null,
              price: '3.3',
              createdAt: '2023-12-08T17:51:30.977Z',
              categoryId: 2,
              url: 'fries_small.png',
            },
          },
        ],
      },
      {
        id: 7,
        createdAt: '2023-12-09T14:39:04.921Z',
        customerId: 3,
        items: [],
      },
      {
        id: 8,
        createdAt: '2023-12-09T14:39:10.782Z',
        customerId: 3,
        items: [],
      },
      {
        id: 9,
        createdAt: '2023-12-09T14:39:11.953Z',
        customerId: 3,
        items: [],
      },
      {
        id: 10,
        createdAt: '2023-12-09T15:18:25.815Z',
        customerId: 3,
        items: [
          {
            orderId: 10,
            productId: 1,
            quantity: 5,
            product: {
              id: 1,
              name: 'Cola',
              description: null,
              price: '3',
              createdAt: '2023-12-08T17:51:30.919Z',
              categoryId: 1,
              url: 'coke.png',
            },
          },
        ],
      },
    ];
    findForUserMock = [
      {
        id: 7,
        createdAt: '2023-12-09T14:39:04.921Z',
        customerId: 3,
        items: [],
      },
      {
        id: 8,
        createdAt: '2023-12-09T14:39:10.782Z',
        customerId: 3,
        items: [],
      },
      {
        id: 9,
        createdAt: '2023-12-09T14:39:11.953Z',
        customerId: 3,
        items: [],
      },
      {
        id: 10,
        createdAt: '2023-12-09T15:18:25.815Z',
        customerId: 3,
        items: [
          {
            orderId: 10,
            productId: 1,
            quantity: 5,
            product: {
              id: 1,
              name: 'Cola',
              description: null,
              price: '3',
              createdAt: '2023-12-08T17:51:30.919Z',
              categoryId: 1,
              url: 'coke.png',
            },
          },
        ],
      },
    ];

    findOneMock = {
      id: 5,
      createdAt: '2023-12-08T17:51:31.061Z',
      customerId: 2,
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrdersController],
      providers: [
        {
          provide: OrdersService,
          useValue: {
            create: jest.fn().mockResolvedValue(createMock),
            findAll: jest.fn().mockResolvedValue(findAllMock),
            findAllForUser: jest.fn().mockResolvedValue(findForUserMock),
            findOne: jest.fn().mockResolvedValue(findOneMock),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should create an order', async () => {
      const result = await service.create({ customerId: 1 });

      expect(result).toBe(createMock);
    });
  });

  describe('findAll', () => {
    it('should return an array of orders', async () => {
      const result = await service.findAll();

      expect(result).toBe(findAllMock);
    });
  });

  describe('findAllForUser', () => {
    it('should return an array of orders for a user', async () => {
      const result = await service.findAllForUser(3);

      expect(result).toBe(findForUserMock);
    });
  });

  describe('findOne', () => {
    it('should return an order', async () => {
      const result = await service.findOne(5);

      expect(result).toBe(findOneMock);
    });
  });
});
