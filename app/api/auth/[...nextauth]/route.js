import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from 'bcrypt';
import bcrypt from "bcrypt";
import  User  from '@/models/users';
import { connectToDB } from '@/utils/database';


const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      async authorize(credentials) {
        await connectToDB();
        const user = await User.findOne({email: credentials.userEmail})
        console.log(user)
        if (user && bcrypt.compareSync(credentials.userPassword, user.userPassword)) {
          console.log("Successful auth")
          return user
        }
        throw new Error("Invalid Email or Password");
      }
    })
  ],
  sesssion: {
    strategy: "jwt"
  },
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id= sessionUser._id.toString();
      return session;

    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error){
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },

    async jwt({token, user}) {
      if (user?._id) session.user._id = token._id
      return token
    }
  },
  pages: {
    signIn: '/auth/signin'
  }
})

export { handler as GET, handler as POST }