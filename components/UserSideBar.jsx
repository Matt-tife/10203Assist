import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constants'

const UserSideBar = ({ selectedTab, onTabClick }) => {

  const { data: session } = useSession()
  
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      throw new Error('cannot sign out')
    }
  }

  return (
    <nav className='flex flex-col bg-[#FAFAFA] w-[17rem] h-screen'>
      <h1 className="text-4xl font-bold pl-[1.4rem]">
        AssistivTeQ<span className="text-6xl text-blue">.</span>
      </h1>
      <div className='flex flex-col gap-8 ml-[1.4rem] mt-12'>
        {navLinks.map(items => {
          return (
            <div 
              key={items.key}
              className={`cursor-pointer ${
                selectedTab === items.title ? 'bg-blue text-snow w-60 pl-12 rounded-md' : ''
              }`}
              onClick={() => onTabClick(items.title)}
              >
                {items.title}
            </div>
          )
        })}
      </div>
      <div className='absolute bottom-0 mb-[10px] ml-4'>
        <button
          className='hover:bg-teal-400 font-bold rounded-3xl py-2 px-8 bg-blue text-white transition-all'
          onClick={() => {
            handleSignOut()
          }}
          >
            Sign out
        </button>
      </div>
    </nav>
  )
}

export default UserSideBar