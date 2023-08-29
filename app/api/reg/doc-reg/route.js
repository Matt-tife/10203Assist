import { NextResponse } from "next/server";
import { connectToDB } from '@/utils/database';
import bcrypt from 'bcrypt';
import Doctor from "@/models/doctors";

export async function POST(request) {

  if (request.method === "POST") {
    // const body = await request.json()
    // console.log(body)

    try {
      const {  
        docEmail,
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

      try {
        console.log(
          docEmail,
          firstName,
          lastName,
          dob,
          userPassword,
          states,
          userCountry,
          phoneCode,
          phoneNumber 
        )
        const userExists = await Doctor.findOne({docEmail});
        // console.log(userExists.firstName)
  
        if (!userExists) {
          const newDoctor = await new Doctor({ 
            docEmail,
            firstName,
            lastName,
            dob,
            userPassword: hashedPassword,
            states,
            userCountry,
            phoneCode,
            phoneNumber 
          })
         await newDoctor.save()
         console.log("Saved to db")
        } else {
          throw new Error("Doctor already exists")
        }

      } catch (err) {
        console.log(err)
        
      }

      // throw new Error("Doctor already exists")
      // return NextResponse.json({ message: "This Worked", success: true });
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