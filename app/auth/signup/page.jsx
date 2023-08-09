"use client"

import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react";
import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaApple } from 'react-icons/fa'
import { useRouter } from 'next/navigation'

import { verifyEmail } from '@/lib/verifyEmail';

const UserSignup = () => {
  
  const { data: session, status } = useSession();
  const router = useRouter()

  const [email, setEmail] = useState('')

  const handleGoogleSignup = async () => {
    try {
      await signIn('google'); // This will initiate the Google sign-up process
      // router.push('/user/dashboard'); // Redirect after successful signup
    } catch (error) {
      console.error('Error signing up with Google:', error);
    }
  };

  const handleEmailSignUp =  (e) => {
    e.preventDefault();

    console.log('Staying on page')

    // try {
    //   await verifyEmail(email)
    //   alert(email)
    //   router.push('/')

    // } catch (error) {
    //   console.log(error)
    // }


    
  }

  useEffect(() => {
    // Redirect to '/user/dashboard' after successful authentication
    if (status === 'authenticated' && session) {
      router.push('/user/dashboard');
    }
  }, [session]);

  return (
    <div className=''>
      {/* left image */}
      <div className='hidden md:flex' />
      {session?.user? (
        <>
          <div> user Signed in </div>
          <button onClick={() => {signOut()}}>Signout</button> 
        </>
      ) : (
        <div>Not signed in</div>
      )}

      {/* main field */}
      <section className='absolute left-[25%] mt-8 md:absolute md:left-[50%]'>
        <h3 className='mb-[5px]'>Sign Up</h3>
        <p className='w-[400px]'>
          By continuing, you are setting up an Assistivteq Account
          and you agree to our <Link href='/' className='text-blue-600 pr-[3px]'>User Agreement</Link> 
           and <Link href='/' className='text-blue-600'>Privacy Policy</Link>
        </p>
        <div className='mt-16'>
          <input type='checkbox' id='agree' className=''/>
          <label htmlFor="agree">I agree to get mails about cool stuff from Assistivteq</label>
        </div>
        <div className='flex flex-col gap-[5px] mt-[5px]'>
          <button 
            className='flexCenter gap-[20px] cursor-pointer w-72 h-16 border-yellow-800 border-2'
            type='button'
            onClick={() => {
              handleGoogleSignup()
            }}
            >
              <FcGoogle />
              Continue With Google
          </button>
          <button  
            className='flexCenter gap-[20px] cursor-pointer w-72 h-16 border-yellow-800 border-2'
            type='button'
            
            >
              <FaApple />
              Continue With Apple
          </button>
        </div>
        <div className='relative left-[25px] mt-8 flex items-center gap-[20px]'>
          <div className='w-20 h-[2px] bg-gray-600' />
          <span>OR</span>
          <div className='w-20 h-[2px] bg-gray-600' />
        </div>
        <form className='flex flex-col gap-[5px] mt-4'>
          <input 
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            placeholder='EMAIL'
            className='w-72 h-16 p-4 border-black border-2 rounded-sm' 
          />
          <button 
            onClick={() => {
              handleEmailSignUp()
            }}
            className='w-72 rounded-[50px] h-16 bg-blue-600 outline-none text-white'
            >
              Continue
          </button>
        </form>
        <div className='mt-[10px]'>
          <span>
            Already have an account? 
            <Link className='text-blue-600 pl-[3px]' href='/auth/signin'>LOG IN</Link>
          </span>
        </div>
      </section>
    </div>
  )
}

export default UserSignup