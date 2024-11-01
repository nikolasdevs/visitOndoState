import React from 'react';
import prisma from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';

const page = async (props: any) => {
  const params = await props.params;
  const hotel = await prisma.accommodation.findUnique({
    where: { type: 'HOTEL', slug: params.slug },
  });

  return (
    <div>
      <li className="list-none">
        <p>{hotel?.title}</p>

        <p>{hotel?.address}</p>
      </li>
    </div>
  );
};

export default page;
