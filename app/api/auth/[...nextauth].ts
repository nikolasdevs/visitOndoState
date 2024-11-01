import prisma from '@/lib/db';
import { compare } from 'bcrypt';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
//Define a schema for input validation

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // Add logic here to look up the user from the credentials supplied
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });

        if (user && credentials?.password) {
          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );
          if (isPasswordValid) {
            return { id: user.id, name: user.name, email: user.email };
          }
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],

  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
