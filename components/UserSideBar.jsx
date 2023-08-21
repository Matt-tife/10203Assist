import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constants'

const UserSideBar = () => {

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
      <div className='flex flex-col gap-8 ml-4 mt-8'>
        {navLinks.map(items => {
          return (
            <Link href={items.href} key={items.key}>
              {items.title}
            </Link>
          )
        })}
      </div>
      <div className='absolute bottom-0 mb-[10px]'>
        <button
          className=''
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