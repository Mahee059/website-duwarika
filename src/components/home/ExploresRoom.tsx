// components/ExploreRooms.tsx
'use client';

import React from 'react';
import ImageCarousel from './ImageCarousel';

const ExploreRooms = () => {
  return (
    <section className="w-full bg-gray-100 py-8 px-4 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center mb-6 px-4">
        <h1 className="text-2xl md:text-3xl tracking-tight text-gray-600">
          Explore our rooms
        </h1>
      </div>
      <div className="w-full max-w-4xl px-4">
        <ImageCarousel />
      </div>
    </section>
  );
};

export default ExploreRooms;
