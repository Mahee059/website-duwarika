"use client";

import Image from "next/image";

export default function HomeMade() {
  return (
    <section className="bg-[#f0ece3] px-4 md:px-12 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-[300px] aspect-[4/4] rectangle-lg overflow-hidden shadow-lg">
            <Image
              src="/RoomCard5.jpg" 
              alt="Himalayan Amenities"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-4/4 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl md:text-2xl font-serif  mb-6 leading-snug text-gray-800">
                      Our Himalayan Homemade Amenities
          </h2>

          <p className="text-gray-800 mb-4 max-w-xl">
            Our himalayan handmade bathroom amenities embody the purity and vitality of the Himalayas. Thoughtfully crafted by our artisans at our Pancha Kosha Spa, each product is made in-house using locally sourced, organic ingredients and handpicked Himalayan herbs. Designed to nurture well-being and reconnect you with nature, these artisanal creations seamlessly blend Nepalese tradition and sustainability.
          </p>

          <p className="text-gray-800 max-w-xl">
            From herb-infused creams and oils to artisanal bath essentials, every element is curated to restore and uplift your senses. Immerse yourself in the healing properties of Himalayan botanicals, and experience a rejuvenating ritual that honors the harmony between tradition and the natural world.
          </p>
        </div>
      </div>
    </section>
  );
}
