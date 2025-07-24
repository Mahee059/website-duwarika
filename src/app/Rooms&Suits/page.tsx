import React from 'react';
import HeroSection from '@/components/Rooms&Suits/HeroSection';
import Nepali from '@/components/Rooms&Suits/Nepali';
import BookNow from '@/components/Rooms&Suits/BookNow'; 
import RoomCard from '@/components/Rooms&Suits/RoomCard'; 
import HomeMade from '@/components/Rooms&Suits/HomeMade'; 
const Page = () => {
    return (
      
        <>
            <HeroSection />
            <Nepali />
            <BookNow />
            <RoomCard />
            <HomeMade />


        </>



        );
};

export default Page;