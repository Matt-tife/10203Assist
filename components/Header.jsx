import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header sticky top-0 z-50 w-full bg-snow flex justify-between items-center px-6 md:w-full">
      <h1 className="text-4xl font-bold">
        AssistivTeQ<span className="text-6xl text-blue">.</span>
      </h1>
      <nav className="hidden md:flex md:items-center">
        <ul className="flex space-x-6">
          <li className="hover:text-blue font-bold transition">
            <Link href="/about">About Us</Link>
          </li>
          <li className="hover:text-blue font-bold transition">
            <Link href="/services">Services</Link>
          </li>
          <li className="hover:text-blue font-bold transition">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue font-bold rounded-3xl py-2 px-8 border-teal-400 border-solid border-2 transition-all">SignUp</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:bg-teal-400 font-bold rounded-3xl py-2 px-8 bg-blue text-white transition-all">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
