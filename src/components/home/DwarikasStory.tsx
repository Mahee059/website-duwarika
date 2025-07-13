import Image from 'next/image';
import React from 'react';
import { BiArrowFromLeft } from 'react-icons/bi';

const DwarikasStory = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto  items-center py-12 space-x-6 bg-gray-100'>
            <div className='flex flex-col space-y-4'>
                <h1 className='text-2xl text-gray-500'>The Dwarika's Story
                </h1>
                <p className='text-start text-xs'>With luxury hotels in Kathmandu and Dhulikhel, The Dwarika’s Group of Hotels and Resorts is dedicated to providing a unique brand of Nepal culture, tradition, and hospitality deeply rooted in architectural restoration, cultural preservation, vedic wellbeing and Buddhist philosophy. 

                </p>
                <button className='flex items-center gap-1 hover:text-gray-400 text-gray-500 cursor-pointer hover:border-b-1 w-fit'>Readmore <BiArrowFromLeft /></button>
            </div>
            <div className='col-span-2'>
                <Image src={"/image5.jpg"} alt='' width={1200} height={1200} className='w-full h-full'/>
            </div>
            
        </div>
        
    
    )
};

export default DwarikasStory;
