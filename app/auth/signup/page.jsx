import Link from 'next/link'
import React from 'react'

const UserSignup = () => {
  return (
    <div className=''>
      {/* left image */}
      <div className='hidden md:flex' />

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
          <button className='w-72 h-16 border-yellow-800 border-2'>Continue With Google</button>
          <button className='w-72 h-16 border-yellow-800 border-2'>Continue With Apple</button>
        </div>
        <div className='mt-8 flex items-center gap-[3px]'>
          <div className='w-20 h-[2px] bg-gray-600' />
          <span>OR</span>
          <div className='w-20 h-[2px] bg-gray-600' />
        </div>
        <form className='flex flex-col gap-[5px] mt-4'>
          <input 
            placeholder='EMAIL'
            className='w-72 h-16 p-4 border-black border-2 rounded-sm' 
          />
          <button 
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