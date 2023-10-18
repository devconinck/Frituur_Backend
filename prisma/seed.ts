import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
    categories.push(
      await prisma.category.create({
        data: {
          name: name,
        },
      }),
    );
  }

  // Seed data for the Product model
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
  ];

  const products = [];
  for (const product of products) {
    products.push(
      await prisma.product.create({
        data: {
          name: product.name,
          price: product.price,
          category: {
            connect: {
              categoryId: categories[product.category].categoryId,
            },
          },
          url: product.url,
        },
      }),
    );
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
