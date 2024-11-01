import Hero from '@/components/where-to-stay/Hero';
import AccommodationSection from '@/components/where-to-stay/AccommodationSection';
import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db';

const Page = async () => {
  const hotels = await prisma.accommodation.findMany({
    where: {
      type: 'HOTEL',
    },
  });

  return (
    <div>
      <Hero />
      {hotels.map((hotel) => (
        <li key={hotel.id} className="list-none">
          <Link href={`/where-to-stay/hotels/${hotel.slug}`}>
            {hotel.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Page;
