'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-[#f8f5f0] text-[#4b4032] border-t border-gray-200 text-xs">
      
      {/* Top nav + newsletter */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 border-b border-gray-300 gap-4">
        {/* Nav links with smaller font */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 font-serif uppercase tracking-wide text-[11px]">
          <Link href="#" className='hover:border-b-1'>Blog, News and Article Coverage</Link>
          <Link href="#" className='hover:border-b-1'>Dwarika Group</Link>
          <Link href="#" className='hover:border-b-1'>Gallery</Link>
          <Link href="#" className='hover:border-b-1'>Contact and Location</Link>
        </nav>

        {/* Newsletter form */}
        <form className="flex w-full max-w-[200px] md:max-w-[240px] border border-gray-300 text-[10px]">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-2 py-[4px] bg-transparent outline-none placeholder:text-[#4b4032] text-[10px]"
          />
          <button
            type="submit"
            className="px-3 py-[4px] bg-[#4b4032] text-white uppercase text-[9px] font-semibold"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Middle: contact, partner, social */}
      <div className="max-w-4xl mx-auto flex justify-between items-center gap-8 px-4 py-8">
        {/* Contact info */}
        <div className="flex flex-col leading-relaxed space-y-4">
          <div className='text-start text-[10px] font-light'>
          <p>Battisputali, Kathmandu, Nepal</p>
          <p>Phone: (+977-1) 4579488 / 4570770</p>
            <p>Email: info@dwarikas.com | sales@dwarikas.com</p>
            </div>
           {/* Partner logo */}
        <div className="items-center text-center">
          <p className="font-serif text-lg tracking-wide">SERANDIPIANS</p>
          <p className="text-xs mt-1">Hotel Partner</p>
        </div>
        </div>

       

       
        <div className="flex flex-col  md:justify-end items-end gap-6">
          <div className='flex gap-2 '>
          <Link href="#">
            <FaFacebook size={30}/> 
          </Link>
          <Link href="#">
             <FaSquareInstagram size={30} />
          </Link>
          <Link href="#">
           <SiTripadvisor size={30} />
            </Link>
            </div>
         
      <div className="text-center py-4 text-[10px] text-[#4b4032]">
        © 2025 The Dwarika&apos;s Hotel Kathmandu | Designed by Amadeus.
      </div>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;


