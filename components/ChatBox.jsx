import Image from 'next/image'
import React from 'react'

const ChatBox = () => {
  return (
    <div className='w-[27rem] h-[80vh] border-2'>
      <div  className='flex gap-4 mt-4'>
        <Image 
          src='/images/avatar.png'
          className='relative ml-4'
          width={40}
          height={10}
          alt='friend image'
        />
        <div className=''>
          <h3 className='text-[15px]'>Elmer Laverty</h3>
          <p className='-mt-[20px] text-[10px] ml-[10px]'>Online</p>
        </div>
      </div>
      <div  className='bg-snow w-[27rem] h-[2px]' />
      <div className='mt-4 '>
        <div className='flex items-center gap-[10px]'>
          <Image 
            src='/images/avatar.png'
            className='relative ml-4'
            width={40}
            height={10}
            alt='friend image'
          />
          <p className='border-2 p-[15px] bg-gray text-[wheat] rounded-xl'>
            I hope you are fine?
          </p>
        </div>
        <div className='flex items-center relative ml-[11rem] gap-[10px] mt-[30px]'>
          <p className='border-2 p-[15px] bg-gray text-[wheat] rounded-xl'>
            Yes i am, Thank You
          </p>
          <Image 
            src='/images/avatar.png'
            className='relative ml-4'
            width={40}
            height={10}
            alt='friend image'
           />
        </div>
      </div>
      <form  className='my-[10px] flex relative top-[16rem]'>
        <input 
          placeholder='Send message'
          className='w-[70rem] h-[3.5rem] bg-snow rounded-xl pl-4'
        />
        <button className='absolute right-0 h-[3.5rem] hover:bg-teal-400 font-bold rounded-3xl py-2 px-8 bg-blue text-white transition-all'>
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatBox