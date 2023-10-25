import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.orderItem.deleteMany({});
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.customer.deleteMany({});

  await prisma.$queryRaw`alter table \`Order\` auto_increment = 1`;
  await prisma.$queryRaw`alter table Product auto_increment = 1`;
  await prisma.$queryRaw`alter table Category auto_increment = 1`;
  await prisma.$queryRaw`alter table Customer auto_increment = 1`;

  const categorieNames = [
    'Drinks',
    'Fries',
    'Dishes',
    'Preperations',
    'Cold Sauces',
    'Hot Sauces',
    'Snacks',
    'Burgers',
    'Bicky Burgers',
    'Chicken/Turkey Snacks',
    'Veggie/Fish Snacks',
    'Cold Dishes',
  ];

  const categories = [];
  for (const name of categorieNames) {
    const exists = await prisma.category.findFirst({
      where: {
        name: name,
      },
    });

    if (exists) {
      continue;
    } else {
      categories.push(
        await prisma.category.create({
          data: {
            name: name,
          },
        }),
      );
    }
  }

  const productsData = [
    {
      name: 'Cola',
      price: 2,
      category: 'Drinks',
      url: 'coke.png',
    },
    {
      name: 'Fanta',
      price: 2,
      category: 'Drinks',
      url: 'fanta.png',
    },
    {
      name: 'Cola Zero',
      price: 2,
      category: 'Drinks',
      url: 'coke_zero.png',
    },
    {
      name: 'Sprite',
      price: 2,
      category: 'Drinks',
      url: 'sprite.png',
    },
    {
      name: 'Water',
      price: 2,
      category: 'Drinks',
      url: 'water.png',
    },
    {
      name: 'Water Bruis',
      price: 2,
      category: 'Drinks',
      url: 'water_spark.png',
    },
    {
      name: 'Ice Tea',
      price: 2.2,
      category: 'Drinks',
      url: 'ice_tea.png',
    },
    {
      name: 'Ice Tea Peach',
      price: 2.2,
      category: 'Drinks',
      url: 'ice_tea_peach.png',
    },
    {
      name: 'Ice Tea Zero',
      price: 2.2,
      category: 'Drinks',
      url: 'ice_tea_zero.png',
    },
    {
      name: 'Boulet',
      price: 2.8,
      category: 'Snacks',
      url: 'boulet.png',
    },
    {
      name: 'Bitterballen',
      price: 2.8,
      category: 'Snacks',
      url: 'bitterbal.png',
    },
    {
      name: 'Mini Friet',
      price: 2.8,
      category: 'Fries',
      url: 'fries_mini.png',
    },
    {
      name: 'Kleine Friet',
      price: 3.3,
      category: 'Fries',
      url: 'fries_small.png',
    },
    {
      name: 'Grote Friet',
      price: 4,
      category: 'Fries',
      url: 'fries_big.png',
    },
    {
      name: 'Super Friet',
      price: 5.1,
      category: 'Fries',
      url: 'fries_super.png',
    },
    {
      name: 'Curryworst',
      price: 2.3,
      category: 'Snacks',
      url: 'frikandel.png',
    },
  ];

  const products = [];
  for (const product of productsData) {
    const ProductExists = await prisma.product.findFirst({
      where: {
        name: product.name,
      },
    });
    const category = await prisma.category.findFirst({
      where: {
        name: product.category,
      },
    });

    if (category && !ProductExists) {
      products.push(
        await prisma.product.create({
          data: {
            name: product.name,
            price: product.price,
            category: {
              connect: {
                id: category.id,
              },
            },
            url: product.url,
          },
        }),
      );
    }
  }

  const mockCustomers = [
    {
      firstName: 'John',
      lastName: 'Doe',
      birthDate: new Date('1990-01-15T00:00:00Z'),
      email: 'john.doe@example.com',
      phone: '123-456-7890',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      birthDate: new Date('1985-05-20T00:00:00Z'),
      email: 'jane.smith@example.com',
      phone: '987-654-3210',
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      birthDate: new Date('1992-08-10T00:00:00Z'),
      email: 'alice.j@example.com',
      phone: '555-123-4567',
    },
    {
      firstName: 'Bob',
      lastName: 'Smith',
      birthDate: new Date('1988-03-25T00:00:00Z'),
      email: 'bob.smith@example.com',
      phone: '555-987-6543',
    },
    {
      firstName: 'Eve',
      lastName: 'Adams',
      birthDate: new Date('1995-12-03T00:00:00Z'),
      email: 'eve.adams@example.com',
      phone: '555-876-5432',
    },
    {
      firstName: 'David',
      lastName: 'Williams',
      birthDate: new Date('1990-06-15T00:00:00Z'),
      email: 'david.w@example.com',
      phone: '555-234-5678',
    },
    {
      firstName: 'Maxim',
      lastName: 'Lison',
      birthDate: new Date('2002-05-07T12:30:30Z'),
      email: 'maxim@lison.be',
      phone: '555-234-5678',
    },
  ];

  for (const customer of mockCustomers) {
    await prisma.customer.create({
      data: customer,
    });
  }

  const customers = await prisma.customer.findMany();

  for (const customer of customers) {
    for (let i = 0; i < 3; i++) {
      await prisma.order.create({
        data: {
          customer: {
            connect: { id: customer.id },
          },
          pickup: new Date(), // Set your pickup date here
        },
      });
    }
  }

  const productsIn = await prisma.product.findMany();

  // Define a function to generate a random quantity
  function getRandomQuantity() {
    return Math.floor(Math.random() * 4) + 1; // Generates a random quantity between 1 and 4
  }

  for (const customer of customers) {
    const orders = await prisma.order.findMany({
      where: { customerId: customer.id },
    });

    for (const order of orders) {
      // Randomly select a product and quantity for this order
      const randomProduct =
        productsIn[Math.floor(Math.random() * productsIn.length)];
      const randomQuantity = getRandomQuantity();

      // Create the OrderItem for this order
      await prisma.orderItem.create({
        data: {
          order: { connect: { id: order.id } },
          product: { connect: { id: randomProduct.id } },
          quantity: randomQuantity,
        },
      });
    }
  }
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
