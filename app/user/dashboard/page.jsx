"use client"

import UserSideBar from '@/components/UserSideBar';
import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Assessment from '@/components/Assessment';


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

  const questions = [
    // Define your assessment questions here, each with a unique id and text
    { id: 'q1', text: 'How are you feeling today?' },
    { id: 'q2', text: 'What is causing you stress?' },
    // Add more questions as needed
  ];

  const handleSaveAssessment = (answers) => {
    // Send answers to the backend for saving
    console.log('Answers:', answers);
    // You can make an API request to save the answers to the database here
  };

  return (
    <main className='flex '>
      {session?.user? (
        <>
          <UserSideBar />
          <div className='absolute right-0'>
            <button
              className=''
              onClick={() => {
                handleSignOut()
              }}
              >Sign out</button>
          </div>
          <div className='ml-8'>
             <h3>Hello {session?.user.email}</h3> 
          </div>
          {/* Main Dashboard */}
          <section className='absolute left-32 top-24'>
            <Assessment questions={questions} onSave={handleSaveAssessment} /> 
          </section>
        </>
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