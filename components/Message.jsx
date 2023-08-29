import React from 'react'
import ChatBox from './ChatBox'
import ChatList from './ChatList'

const Message = () => {
  return (
    <div className='flex flex-col'>
      <div className=''>
        Message Navbar
      </div>
      <div className='flex'>
        <ChatList />
        <ChatBox />
      </div>
    </div>
  )
}

export default Message