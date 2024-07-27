import connectDB from '@/config/database'
import User from '@/models/User'
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
      await connectDB()
      //2. check if user exists
      const userExists = await User.findOne({ email: profile.email })
      //3. then not add user to database
      if (!userExists) {
        // Truncate user name if toot long
        const username = profile.name.slice(0, 20)
        await User.create({
          email: profile.email,
          googleId: profile.id,
          username: username,
          image: profile.picture,
        })
      }
      return true
    },
    // Modifies the session object
    async session({ session }) {
      // 1. Get user from the database
      const user = await User.findOne({ email: session.user.email })

      session.user.id = user._id.toString()

      return session
    },
  },
}
