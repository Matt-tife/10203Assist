import { NextResponse } from "next/server";
import { connectToDB } from '@/utils/database';
import bcrypt from 'bcrypt';
import User from "@/models/users";

export async function POST(request) {

  if (request.method === "POST") {
    // const body = await request.json()
    // console.log(body)

    try {
      const {  
        userEmail,
        firstName,
        lastName,
        dob,
        userPassword,
        states,
        userCountry,
        phoneCode,
        phoneNumber 
      } = await request.json()
      
      // Hash password before storing to db
      const hashedPassword = await bcrypt.hash(userPassword, 10);

      await connectToDB();

      // Find user in db by email
      const userExists = await User.findOne({ 'email': userEmail  });
      
      if (!userExists) {
        // Throw error if user doesn't exist
        throw new Error('user doesnt exist')
      } 

      try {
        console.log("User Exists: Adding users")
        // update the db collection is user exists
        const addDetails = await User.findOneAndUpdate(
          {'email': userEmail},
          { firstName,
            lastName,
            dob,
            userPassword: hashedPassword,
            states,
            userCountry,
            phoneCode,
            phoneNumber 
          },
        )
        // save to db
        await addDetails.save()
        return NextResponse.json({ message: "This Worked", success: true });
      } catch (error) {
        throw new Error("Not added to db")
      }
    } catch (error) {
      console.log(error)
      return new Response("Failed to create a new user", { status: 500 });
    }
    
  }
  return NextResponse.json({ message: "This Worked", success: true });
}

export async function GET(request) {
  return NextResponse.json(body)
}