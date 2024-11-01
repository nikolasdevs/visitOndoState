import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const initialAccommodations: Prisma.AccommodationCreateInput[] = [
  {
    title: 'Hotel B',
    slug: 'hotel-b',
    address: 'Alagbaka Estate',
    city: 'Akure',
    state: 'Ondo',
    country: 'Nigeria',
    type: 'HOTEL',
   // imageUrl: 'https://source.unsplash.com/random/400x300?hotel',

    author: {
      connectOrCreate: {
        where: {
          email: 'admin@test.com',
        },
        create: {
          email: 'admin@test.com',
          name: 'Admin',
          hashedPassword: 'sdfhdsfhjdhsf45j554d',
        },
      },
    },
  },
];

async function main() {
  console.log(`start seeding ...`);

  for (const accommodation of initialAccommodations) {
    const createdAccommodation = await prisma.accommodation.create({
      data: accommodation,
    });
    console.log(`Created Accommodation: ${createdAccommodation.title}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
