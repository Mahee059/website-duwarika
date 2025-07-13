// components/ExploreRooms.tsx
import React from 'react';
import ImageCarousel from './ImageCarousel';
const ExploreRooms = () => {
  return (
    <>
    <div className="flex justify-center items-center min-h-[200px] bg-gray-100">
      <h1 className="text-3xl tracking-tight text-gray-800">
        Explore our rooms
      </h1>
      </div>
      <ImageCarousel />
    </>
  );
};

export default ExploreRooms;
