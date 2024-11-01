import Hero from '@/components/where-to-stay/Hero';
import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db';

const page = async () => {
  const apartments = await prisma.accommodation.findMany({
    where: {
      type: 'APARTMENT',
    },
  });

  return (
    <div>
      <Hero />
      {apartments.map((apartment) => (
        <li key={apartment.id} className="list-none">
          <Link href={`/where-to-stay/apartments/${apartment.slug}`}>
            {apartment.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default page;
