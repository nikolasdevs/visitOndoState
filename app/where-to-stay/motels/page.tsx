import Hero from '@/components/where-to-stay/Hero';
import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db';

const page = async () => {
  const motels = await prisma.accommodation.findMany({
    where: {
      type: 'MOTEL',
    },
  });

  return (
    <div>
      <Hero />
      {motels.map((motel) => (
        <li key={motel.id} className="list-none">
          <Link href={`/where-to-stay/motels/${motel.slug}`}>
            {motel.title}
          </Link>
        </li>
      ))}
    </div>
  );
};

export default page;
