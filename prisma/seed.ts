import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearAll() {
  await prisma.order.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.$queryRaw`alter table Product auto_increment = 1`;
  await prisma.$queryRaw`alter table Category auto_increment = 1`;
}

async function main() {
  // Seed data for the Category model

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
      url: 'cola.png',
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
      url: 'cola_zero.png',
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
      url: 'water_bruis.png',
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
}

//clearAll();
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
