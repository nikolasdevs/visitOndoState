'use server';

import prisma from '@/lib/db';
import { FormState, SignupFormSchema } from '@/lib/definitions';
import { AccommodationType } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { revalidatePath } from 'next/cache';
import * as z from 'zod';

const accommodationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  country: z.string().min(1, 'Country is required'),
  type: z.nativeEnum(AccommodationType),
  userId: z.string().uuid(),
});

export async function createAccommodation(formData: FormData) {
  const userId = formData.get('userId');
  if (
    !userId ||
    typeof userId !== 'string' ||
    !z.string().uuid().safeParse(userId).success
  ) {
    throw new Error('Invalid userId provided');
  }

  const data = accommodationSchema.parse({
    title: formData.get('title'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    country: formData.get('country'),
    type: formData.get('type'),
    userId: formData.get('userId'),
  });
  const user = await prisma.user.findUnique({
    where: { id: data.userId },
  });

  if (!user) {
    throw new Error('Admin not found');
  }
  const slug = generateSlug(data.title);
  await prisma.accommodation.create({
    data: {
      title: data.title,
      slug: slug,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      type: data.type,
      author: {
        connect: {
          id: data.userId,
        },
      },
    },
  });

  revalidatePath('/where-to-stay');
}
function generateSlug(title: string): string {
  return title.replace(/\s+/g, '-').toLowerCase();
}
export async function editAccommodation(formData: FormData, id: string) {
  const data = accommodationSchema.omit({ userId: true }).parse({
    title: formData.get('title'),
    address: formData.get('address'),
    city: formData.get('city'),
    state: formData.get('state'),
    country: formData.get('country'),
    type: formData.get('type'),
  });
  await prisma.accommodation.update({
    where: { id },
    data: {
      title: data.title,
      slug: data.title.replace(/\s+/g, '-').toLowerCase(),
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      type: data.type,
    },
  });
}

export async function deleteAccommodation(formData: FormData, id: string) {
  const type = formData.get('type') as AccommodationType;
  if (!type) {
    throw new Error('Accommodation type is required');
  }

  await prisma.accommodation.delete({
    where: { id },
  });
}

('');

// const userSchema = z.object({
//   name: z.string().min(1, 'name is required').max(50),
//   email: z.string().min(1, 'Email is required').email('Invalid email'),
//   password: z
//     .string()
//     .min(1, 'password is required')
//     .min(4, 'Password must be at least 4 characters long'),
// });

export async function adminSignup(state: FormState, formData: FormData) {
  //validate form fields
  const data = SignupFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
    };
  }

  const hashedPassword = await hash(data.data.password, 10);

  await prisma.user.create({
    data: {
      name: data.data.name,
      email: data.data.email,
      password: hashedPassword,
    },
  });
  
  const user = data[0];
  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    };
  }
  return user;
}

export async function signIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  // Generate a session token or JWT (for example, using JWT)
  const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  // Return token or manage session creation (e.g., NextAuth or custom sessions)
  return { token };
}
