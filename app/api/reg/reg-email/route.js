import { NextResponse } from "next/server";
import { connectToDB } from '@/utils/database';
import User from "@/models/users";


const handler = async (request) => {

  if (request.method === 'POST') {

    // Get setails from request
    const { action, email } = await request.json()

    if (action === 'emailSignup') {
      try {
        await connectToDB();

        // find user in db
        const userExists = await User.findOne({ email  });
        
        if (!userExists) {
          const newUser = new User({ email })          
          await newUser.save()
          // console.log(userEmail)
          console.log('user created')
          return new Response(JSON.stringify(newUser), { status: 201 })
        } else {
          console.log("User Exists")
          throw new Error('Email already exists')
        }
      } catch (error) {
        return new Response("Failed to create a new user", { status: 500 });
      }
    } 
  } 
}
export { handler as GET, handler as POST }