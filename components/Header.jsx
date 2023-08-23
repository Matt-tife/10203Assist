'use client'

import React, { useState } from "react";
import Link from "next/link";
import { headerLinks } from "@/constants";
import SignupModal from "./SignupModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header sticky top-0 z-50 w-full bg-snow flex justify-between items-center px-6 md:w-full">
      <h1 className="text-4xl font-bold">
        AssistivTeQ<span className="text-6xl text-blue">.</span>
      </h1>
      <nav className="hidden md:flex md:items-center">
        <ul className='flex gap-4 mr-[10px]'>
          {headerLinks.map(item => {
            return(
                <li
                  key={item.key}
                  href={item.href}
                  className='hover:text-blue font-bold transition '
                >
                  {item.title}
                </li>
            )
          })}
        </ul>
        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => setIsOpen(true)}
              className="hover:text-blue font-bold rounded-3xl  px-8 border-teal-400 border-solid border-2 transition-all">
              SignUp
            </button>
          </li>
          <li>
            <Link href="/auth/signin" className="hover:bg-teal-400 font-bold rounded-3xl py-2 px-8 bg-blue text-white transition-all">
              Login
            </Link>
          </li>
        </ul>
        <SignupModal isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
      </nav>
    </header>
  );
};

export default Header;
