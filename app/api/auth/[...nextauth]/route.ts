

import NextAuth, { SessionStrategy } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Create a handler for authentication using NextAuth
const handler = NextAuth({

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt' as SessionStrategy | undefined,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/',
  },
  },
);

// Export the handler as both a GET and POST route for authentication
export { handler as GET, handler as POST };