"use client"

import UserSideBar from '@/components/UserSideBar'
import React from 'react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const UserDashboard = () => {
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
    <main className='flex '>
      <UserSideBar />
      User Dashboard

      {session?.user? (
        <div>
          <button
            className=''
            onClick={() => {
              handleSignOut()
            }}
            >Sign out</button>
        </div>
      ): (
        <div 
          className=''
          > 
            Please 
            <Link className='text-blue-600 underline px-[3px]' href='/auth/signin'>
              Log in
            </Link> 
            to Access Dashboard 
          </div>
      )}
    </main>
  )
}

export default UserDashboard