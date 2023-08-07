import Link from 'next/link'
import React from 'react'

const UserSignin = () => {
  return (
    <div className='bg-[#080710] h-screen w-full flex items-center justify-center'>
      <form className='flex flex-col login-form'>
        <h3 className='mb-4 text-center'>Login</h3>

        
        <label 
          htmlFor='username'
          className=''
          >
            Username
        </label>
        <input 
          type='text' 
          placeholder='Email or Phone' 
          className='mb-4 h-8 p-4 rounded-[5px]' 
          id='username'
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          id="password"
          className='h-8 p-4 rounded-[5px]'
        />

        <button 
          className='mt-16 w-32 h-12 bg-blue-500 relative right-[50%] left-[30%]' 
          type='submit'
          >
            Log In
        </button>
        <div className="social mt-8">
          <h3 className=''>Login with</h3>
          <div className="go"><i class="fab fa-google"></i>  Google</div>
          <div className="fb"><i class="fab fa-facebook"></i>  Facebook</div>
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