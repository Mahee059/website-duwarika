// components/Exclusive.tsx
import React from 'react';
import Image from 'next/image';
import { BiArrowFromLeft } from 'react-icons/bi';

const SocialGathering = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-7">
        
        {/* Image */}
        <div className="w-full md:w-1/2 relative overflow-hidden aspect-[4/3] md:aspect-square">
          <Image
            src="/image11.jpg"
            alt="Dining at Dwarika's Hotel Kathmandu"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-5">
          <h2 className="text-2xl md:text-2xl w-full font-serif text-gray-900 text-center leading-snug">
            Dining at Dwarika&apos;s Hotel <br />Kathmandu
          </h2>
          <p className="text-[#3B3B3B] leading-relaxed max-w-md mx-auto text-center md:mx-0">
            Experience the magic of dining in the courtyards of The Dwarika’s Hotel,
            where exquisite cuisine meets timeless heritage.
          </p>
          <div className="flex w-full align-center items-center justify-center">
            <button className="flex w-full items-center text-center justify-center md:justify-start gap-1 text-[#7C7C7C] hover:text-[#555] font-light mx-auto md:mx-0">
            Read more <BiArrowFromLeft size={16} />
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialGathering;
