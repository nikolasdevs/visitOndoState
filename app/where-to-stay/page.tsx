import Hero from '@/components/where-to-stay/Hero';

import React from 'react';
import Link from 'next/link';
import prisma from '@/lib/db';
import AccommodationSection from '@/components/where-to-stay/AccommodationSection';

const page = async () => {
  return (
    <div>
      <Hero />
      <AccommodationSection />
    </div>
  );
};

export default page;
