"use client"

import UserSideBar from '@/components/UserSideBar';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Assessment from '@/components/Assessment';
import ProfileBar from '@/components/ProfileBar';
import Notification from '@/components/Notification';
import Message from '@/components/Message';


const UserDashboard = () => {

  const [selectedTab, setSelectedTab] = useState('Home');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };


  const { data: session } = useSession()
  const router = useRouter()

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
          <UserSideBar selectedTab={selectedTab} onTabClick={handleTabClick}/>
          <div className='ml-8 pt-12 '>
             <h3 className='md:text-[20px] lg:text-[30px]'>Hello {session?.user.email}</h3> 
          </div>
          <div className='flex gap-4 absolute right-0 mr-12 pt-12'>
            <Notification />
            <ProfileBar/>
          </div>
          {/* Main Dashboard */}
          <section className='absolute right-[50%] left-[50%]'>
            <Assessment questions={questions} onSave={handleSaveAssessment} /> 
          </section>
          <div className='absolute top-[8rem] left-[20rem]'>
            {selectedTab === 'Home' && <div>Welcome to the Dashboard!</div>}
            {selectedTab === 'Messages' && <Message />}
            {selectedTab === 'Progress Tracker' && <div>Progress Tracker</div>}
            {selectedTab === 'Book Consultation' && <div>Book Consultation</div>}
            {selectedTab === 'Calender' && <div>Calender</div>}
            {selectedTab === 'Resources' && <div>Resources</div>}
            {selectedTab === 'Support' && <div>Support</div>}
          </div>
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