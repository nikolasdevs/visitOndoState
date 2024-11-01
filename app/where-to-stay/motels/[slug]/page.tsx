import React from 'react';
import prisma from '@/lib/db';

const page = async (props: any) => {
  const params = await props.params;
  const motel = await prisma.accommodation.findUnique({
    where: { type: 'MOTEL', slug: params.slug },
  });

  return (
    <div>
      <li className="list-none">
        <p>{motel?.title}</p>
        <p>{motel?.address}</p>
      </li>
    </div>
  );
};

export default page;
 