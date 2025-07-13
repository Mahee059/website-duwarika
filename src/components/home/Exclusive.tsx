// components/Exclusive.tsx
import React from 'react';
import Image from 'next/image';
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi';

const Exclusive = () => {
  return (
    <section className=" bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl tracking-tight text-[#2B2B2B]">
            Exclusive Offers
          </h1>
        </div>

        {/* Content Card */}
        <div className="max-w-sm mx-auto flex flex-col items-center text-center space-y-6">
          {/* Image */}
          <div className="w-[320px] h-[320px] relative rounded-md overflow-hidden">
            <Image
              src="/image10.jpg"  alt="Culture & Well-being"
              fill
              className="object-cover object-[50%_20%]" 
              // adjust the 20% to show the head higher or lower
            />
          </div>

          {/* Text */}
          <div className="space-y-4 px-4">
            <h2 className="text-xl font-serif text-[#2B2B2B]">
              Culture & Well-being
            </h2>
            <p className="text-[#3B3B3B] leading-relaxed">
           
            Explore the art and architecture of the medieval town squares of Kathmandu valley, 
              and experience the luxury of staying in an award-winning 'living museum'. 
              Then get away to the country and take in the infinite charms of rural landscapes.
            </p>
            <button className="flex items-center gap-1 text-[#7C7C7C] hover:text-[#555] font-light mx-auto">
              Read more <BiArrowFromLeft size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;
