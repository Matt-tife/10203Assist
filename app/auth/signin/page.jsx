"use client"

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'


const UserSignin = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const { data: session } = useSession();
  const router = useRouter();

  // useEffect(() => {
  //   if (session?.user) router.push("/user/dashboard");
  // }, [session, router]);


  const handleLogIn = async (e) => {
    e.preventDefault();

    console.log('handling login')

    try {
      const result = await signIn("credentials", {
        email: userEmail,
        password: userPassword,
        redirect: false
      });
      console.log(result)
      if (result.error) console.log(result.error)
      
      // Route to dashboard if signin is successfull
      router.replace('/user/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (

    <div className='bg-[#080710] h-screen w-full flex items-center justify-center'>

      <form className='flex flex-col login-form'>
        {/* {session?.user? (
          <>
          <div> user Signed in </div>
          <button onClick={() => {signOut()}}>Signout</button> 
          </>
          ) : (
          <div>Not signed in</div>
        )} */}
        <h3 className='mb-4 text-center'>Login</h3>

        <label 
          htmlFor='email'
          className=''
          >
            Email
        </label>
        <input 
          type='text' 
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder='Email' 
          className='mb-4 h-8 p-4 rounded-[5px]' 
          id='email'
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          vaule={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          placeholder="Password" 
          id="password"
          className='h-8 p-4 rounded-[5px]'
        />

        <button 
          className='mt-16 w-32 h-12 bg-blue-500 relative right-[50%] left-[30%]' 
          type='submit'
          onClick={handleLogIn}
          >
            Log In
        </button>
        <div className="social mt-8">
          <h3 className=''>Login with</h3>
          <div className="go"> Google</div>
          <div className="fb"> Facebook</div>
        </div>
        <div className='mt-4 flex gap-4'>
          <h4>New to Assistivteq?</h4>
          <Link href='/auth/signup' className='text-blue-600 underline '>Sign Up</Link>
        </div>
      </form>
    </div>
  )
}

export default UserSignin