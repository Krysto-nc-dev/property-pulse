import GoogleProvider from 'next-auth/providers/google'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
  callbacks: {
    // Invoked on successful sign in.
    async signIn({ profile }) {
      // 1. Connect to the database
      //2. check if user exists
      //4. if user does not exist, add user to database
      //3. return true  to allow sign in
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from the database
      //2. Assign the user id to the session
      //4. return the session
    },
  },
}
