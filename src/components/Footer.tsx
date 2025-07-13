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
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-6 border-b border-gray-300 gap-4">
        {/* Nav links with smaller font */}
        <nav className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 font-serif uppercase tracking-wide text-[11px]">
          <Link href="#">Blog, News and Article Coverage</Link>
          <Link href="#">Dwarika Group</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">Contact and Location</Link>
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 py-8">
        {/* Contact info */}
        <div className="text-center md:text-left leading-relaxed">
          <p>Battisputali, Kathmandu, Nepal</p>
          <p>Phone: (+977-1) 4579488 / 4570770</p>
          <p>Email: info@dwarikas.com | sales@dwarikas.com</p>
        </div>

        {/* Partner logo */}
        <div className="flex justify-center items-center flex-col">
          <p className="font-serif text-lg tracking-widest">S E R A N D I P I A N S</p>
          <p className="text-xs mt-1">Hotel Partner</p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center md:justify-end items-center gap-6">
          <Link href="#">
            <FaFacebook/> 
          </Link>
          <Link href="#">
             <FaSquareInstagram />
          </Link>
          <Link href="#">
           <SiTripadvisor />
          </Link>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center py-4 text-xs text-[#4b4032]">
        © 2025 The Dwarika&apos;s Hotel Kathmandu | Designed by Amadeus.
      </div>
    </footer>
  );
};

export default Footer;
