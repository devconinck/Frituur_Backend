import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

const prisma = new PrismaClient();
const categorieNames = [
  'Drinks',
  'Fries',
  'Preperations',
  'Cold Sauces',
  'Snacks',
  'Bicky Burgers',
  'Chicken/Turkey Snacks',
];

const productsData = [
  {
    name: 'Cola',
    price: 2,
    category: 'Drinks',
    url: 'coke.png',
  },
  {
    name: 'Cola Zero',
    price: 2,
    category: 'Drinks',
    url: 'coke_zero.png',
  },
  {
    name: 'Fanta',
    price: 2,
    category: 'Drinks',
    url: 'fanta.png',
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
    name: 'Stoofvlees',
    price: 5.2,
    category: 'Preperations',
    url: 'stoofvlees.png',
  },
  {
    name: 'Stoofvleessaus',
    price: 2.5,
    category: 'Preperations',
    url: 'stoofvleessaus.png',
  },
  {
    name: 'Balletjes in tomatensaus',
    price: 5.1,
    category: 'Preperations',
    url: 'balletjes_tomaat.png',
  },
  {
    name: 'Spaghettisaus',
    price: 3.6,
    category: 'Preperations',
    url: 'spaghettisaus.png',
  },
  {
    name: 'Americain',
    price: 2,
    category: 'Cold Sauces',
    url: 'americain.png',
  },
  {
    name: 'Bicky Saus',
    price: 4.2,
    category: 'Cold Sauces',
    url: 'bicky_sauzen.png',
  },
  {
    name: 'Cocktail',
    price: 1,
    category: 'Cold Sauces',
    url: 'cocktail.png',
  },
  {
    name: 'Curry Ketchup',
    price: 1,
    category: 'Cold Sauces',
    url: 'ketchup_curry.png',
  },
  {
    name: 'Mayonaise',
    price: 1,
    category: 'Cold Sauces',
    url: 'mayo.png',
  },
  {
    name: 'Joppie',
    price: 1,
    category: 'Cold Sauces',
    url: 'joppie.png',
  },
  {
    name: 'Special Saus',
    price: 2,
    category: 'Cold Sauces',
    url: 'special_saus.png',
  },
  {
    name: 'Bitterballen',
    price: 2.8,
    category: 'Snacks',
    url: 'bitterbal.png',
  },
  {
    name: 'Boulet',
    price: 2.8,
    category: 'Snacks',
    url: 'boulet.png',
  },
  {
    name: 'Cervela',
    price: 3.3,
    category: 'Snacks',
    url: 'cervela.png',
  },
  {
    name: 'Curryworst',
    price: 2.3,
    category: 'Snacks',
    url: 'frikandel.png',
  },
  {
    name: 'Mexicano',
    price: 3.5,
    category: 'Snacks',
    url: 'mexicano.png',
  },
  {
    name: 'Ribster',
    price: 3.7,
    category: 'Snacks',
    url: 'ribster.png',
  },
  {
    name: 'Sate',
    price: 4.5,
    category: 'Snacks',
    url: 'sate.png',
  },
  {
    name: 'Vleeskroket',
    price: 2.8,
    category: 'Snacks',
    url: 'vleeskroket.png',
  },
  {
    name: 'Bicky Burger',
    price: 4.2,
    category: 'Bicky Burgers',
    url: 'bicky.png',
  },
  {
    name: 'Bicky Cheeseburger',
    price: 4.3,
    category: 'Bicky Burgers',
    url: 'bicky_cheese.png',
  },
  {
    name: 'Bicky Royal Cheese',
    price: 4.4,
    category: 'Bicky Burgers',
    url: 'royalcheese.png',
  },
  {
    name: 'Bicky Ribburger',
    price: 4.4,
    category: 'Bicky Burgers',
    url: 'mexicanoburger.png',
  },
  {
    name: 'Chicken Fingers',
    price: 4.1,
    category: 'Chicken/Turkey Snacks',
    url: 'chickenfingers.png',
  },
  {
    name: 'Kippets',
    price: 1,
    category: 'Chicken/Turkey Snacks',
    url: 'kippets.png',
  },
  {
    name: 'Lucifer',
    price: 4.2,
    category: 'Chicken/Turkey Snacks',
    url: 'lucifer.png',
  },
  {
    name: 'Sweet Chick-in Chili',
    price: 3.9,
    category: 'Chicken/Turkey Snacks',
    url: 'sweet_chicken.png',
  },
  {
    name: 'Viandel',
    price: 2.7,
    category: 'Chicken/Turkey Snacks',
    url: 'viandel_.png',
  },
];

const mockCustomers = [
  {
    name: 'user',
    email: 'user@email.com',
    password: 'password',
    passwordConfirm: 'password',
    role: Role.USER,
  },
  {
    name: 'admin',
    email: 'admin@email.com',
    password: 'password',
    passwordConfirm: 'password',
    role: Role.ADMIN,
  },
  {
    name: 'Quinten',
    email: 'quinten@email.com',
    password: 'StrongPassword',
    passwordConfirm: 'StrongPassword',
    role: Role.ADMIN,
  },
  {
    name: 'test',
    email: 'test@test.com',
    password: 'password',
    passwordConfirm: 'password',
    role: Role.USER,
  },
  {
    name: 'testAdmin',
    email: 'testAdmin@test.com',
    password: 'password',
    passwordConfirm: 'password',
    role: Role.ADMIN,
  },
];

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

  //seed all the categories
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

  //seed all the products
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

  //seed all the customers
  for (const customer of mockCustomers) {
    const hashedPassword = bcrypt.hashSync(customer.password, 10);
    await prisma.customer.create({
      data: {
        name: customer.name,
        email: customer.email,
        password: hashedPassword,
        role: customer.role,
      },
    });
  }

  // Seed orders and order items
  const customers = await prisma.customer.findMany();

  const productsForOrders = await prisma.product.findMany();

  // Function to generate a random quantity between min and max
  function getRandomQuantity(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to generate a random date between 1 month ago and 1 month from now
  function getRandomDate() {
    const start = new Date();
    start.setMonth(start.getMonth() - 1);
    const end = new Date();
    end.setMonth(end.getMonth());
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    );
  }

  // Seed orders and order items
  for (const customer of customers) {
    // Create 3 orders per customer
    for (let i = 0; i < 3; i++) {
      const order = await prisma.order.create({
        data: {
          customer: {
            connect: { id: customer.id },
          },
          pickup: getRandomDate(),
        },
      });

      // Create 2 to 4 order items per order
      const numItems = getRandomQuantity(2, 4);
      const existingOrderItems = new Set();

      for (let j = 0; j < numItems; j++) {
        let randomProduct, randomQuantity;

        do {
          randomProduct =
            productsForOrders[
              Math.floor(Math.random() * productsForOrders.length)
            ];
          randomQuantity = getRandomQuantity(1, 5);
        } while (existingOrderItems.has(`${order.id}-${randomProduct.id}`));

        existingOrderItems.add(`${order.id}-${randomProduct.id}`);

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
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
