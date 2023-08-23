import React from 'react'
import { Dialog } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

const SignupModal = ({ isOpen, closeModal }) => {
  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="relative z-50"
      >
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container to center the panel */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        {/* The actual dialog panel  */}
        <Dialog.Panel 
          className="w-[20rem] h-[15rem] rounded bg-white flex flex-col items-center justify-center gap-4"
          >
            <button 
              onClick={closeModal}
              className='relative flex items-center justify-center left-[9.3rem] w-[30px] h-[30px] bg-blue-500 rounded-[50px] top-[-51px]'
              >
                <AiOutlineClose />
            </button>
            <Dialog.Title>Signup as</Dialog.Title>
            <Dialog.Description 
              className='flex gap-8'
              >
                <Link 
                  href='/auth/signup'
                  className='hover:text-blue font-bold rounded-3xl py-2 px-8 border-teal-400 border-solid border-2 transition-all'
                  >
                    Patient
                </Link>
                <Link 
                  href='/dr/auth/reg'
                  className='hover:text-blue font-bold rounded-3xl py-2 px-8 border-teal-400 border-solid border-2 transition-all'
                  >
                    Doctor
                </Link>
            </Dialog.Description>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default SignupModal

