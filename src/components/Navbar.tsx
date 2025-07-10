"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full z-50 text-gray-300 bg-transparent ">
      <div className="flex justify-between items-center max-w-7xl mx-auto  px-4 py-4">
        {/* Logo */}
        <Link href="/" className="" >
 <Image src={"/logo.png"} alt="" width={80} height={50} objectFit="contain" className="absolute top-0"/>
        </Link> 

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 uppercase font-light text-sm">
          <Link href="/our-story" >Our Story</Link>
          <Link href="/rooms-suites">Rooms & Suites</Link>
          <Link href="/dining">Dining</Link>
          <Link href="/experiences">Experiences</Link>

          {/* ✅ MENU button with icon/photo */}
          <div className="flex items-center gap-[1px]">
          <button
            onClick={toggleMenu}
            className="flex items-center gap-2  text-white px-3 py-1 text-xs uppercase">
            <IoIosMenu size={25}/>
          </button>
          <Link
            href="/book"
            className="hidden md:inline-block border text-gray-700 bg-white opacity-35 border-white px-4 py-2 text-xs uppercase"
          >
            Book Now
            </Link>
            </div>
        </div>

        {/* Right side: Book Now and mobile toggle */}
        <div className="flex items-center gap-4">
          

          {/* Mobile toggle button (hamburger) */}
          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* ✅ Desktop MENU hidden links */}
      {isOpen && (
        <div className="hidden md:flex flex-col absolute right-8 top-20 w-64 bg-white border border-gray-400 rounded shadow-md py-4 px-6 space-y-2 uppercase text-sm z-50">
          <Link href="/programs" onClick={toggleMenu}>
            The Dwarika's Programs
          </Link>
          <Link href="/spaces" onClick={toggleMenu}>
            The Dwarika's Spaces
          </Link>
          <Link href="/spa" onClick={toggleMenu}>
            Pancha Kosha SPA
          </Link>
          <Link href="/events-meetings" onClick={toggleMenu}>
            Events & Meetings
          </Link>
          <Link href="/himalayan-wellbeing-retreat" onClick={toggleMenu}>
            The Dwarika's Himalayan Wellbeing Retreat
          </Link>
        </div>
      )}

      {/* ✅ Mobile nav links (full screen) */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-8 uppercase font-semibold text-sm">
          <Link href="/our-story" onClick={toggleMenu}>
            Our Story
          </Link>
          <Link href="/rooms-suites" onClick={toggleMenu}>
            Rooms & Suites
          </Link>
          <Link href="/dining" onClick={toggleMenu}>
            Dining
          </Link>
          <Link href="/experiences" onClick={toggleMenu}>
            Experiences
          </Link>
          <Link href="/programs" onClick={toggleMenu}>
            The Dwarika's Programs
          </Link>
          <Link href="/spaces" onClick={toggleMenu}>
            The Dwarika's Spaces
          </Link>
          <Link href="/spa" onClick={toggleMenu}>
            Pancha Kosha SPA
          </Link>
          <Link href="/events-meetings" onClick={toggleMenu}>
            Events & Meetings
          </Link>
          <Link href="/himalayan-wellbeing-retreat" onClick={toggleMenu}>
            The Dwarika's Himalayan Wellbeing Retreat
          </Link>
          <Link
            href="/book"
            className="border border-white px-4 py-2 text-xs"
            onClick={toggleMenu}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}
