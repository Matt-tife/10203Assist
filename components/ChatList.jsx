import Image from 'next/image'
import React from 'react'
import {MdOutlineAddCircle} from 'react-icons/md'

const ChatList = () => {
  return (
    <div className='w-[27rem] h-[80vh] bg-blue '>
      <div className='flex pt-8 pl-8'>
        <h3 className=''>Messages</h3>
        <MdOutlineAddCircle className='w-8 h-8 relative left-48 bg-snow '/>
      </div>
      <div  className='bg-snow w-[27rem] h-[2px]' />

      <div  className='my-[10px] ml-[10px]'>
        <input 
          placeholder='search messages'
          className='w-[25rem] h-12 bg-snow rounded-xl pl-4'
        />
      </div>

      <div  className='flex gap-4 mt-4'>
        <Image 
          src='/images/avatar.png'
          className='relative ml-4'
          width={40}
          height={10}
          alt='friend image'
        />
        <div className=''>
          <h3 className='text-[20px]'>Elmer Laverty</h3>
          <p className='-mt-[20px]'>I hope you are fine?</p>
        </div>
      </div>

    </div>
  )
}

export default ChatList