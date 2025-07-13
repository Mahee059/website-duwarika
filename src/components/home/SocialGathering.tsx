// components/Exclusive.tsx
import React from 'react';
import Image from 'next/image';
import { BiArrowFromLeft  } from 'react-icons/bi';

const SocialGathering = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-10">
        {/* Image */}
        <div className="w-full md:w-1/2 relative rounded-md overflow-hidden aspect-[4/3] md:aspect-square">
          <Image
            src="/image11.jpg" 
            alt="Dining at Dwarika's Hotel Kathmandu"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5 mt-8 md:mt-0">
          <h2 className="text-2xl md:text-3xl font-serif text-[#2B2B2B] leading-snug">
            Dining at Dwarika&apos;s Hotel<br />Kathmandu
          </h2>
          <p className="text-[#3B3B3B] leading-relaxed max-w-md mx-auto md:mx-0">
            Experience the magic of dining in the courtyards of The Dwarika’s Hotel,
            where exquisite cuisine meets timeless heritage.
          </p>
          <button className="flex items-center justify-center md:justify-start gap-1 text-[#7C7C7C] hover:text-[#555] font-light mx-auto md:mx-0">
            Read more <BiArrowFromLeft size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialGathering;
