// components/gallery/DwarikasGallery.tsx
import Image from 'next/image';
import React from 'react';

const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto items-start py-12 space-x-6 bg-gray-100'>  {/*grid columns*/}
            {/* left section */}{   }
            <div className='max-sm:mb-4'>
                <Image src={"/image1.jpg"} alt='' width={1200} height={1200} className='w-full h-full object-cover' />
            </div>
            {/* right section */}
            <div className='flex flex-col space-y-4'>
            <Image src={"/image2.jpg"} alt='' width={1000} height={1200} className='w-full h-full object-cover' />
               <p className='text-xs text-center py-16 mx-8'>With stunning architecture inspired by Newari craftsmanship, every corner of The Dwarika`s Hotel exudes timeless elegance. The peaceful courtyards display grand architectural wooden masterpieces that date as far back as the 13th century. </p>
            </div>

            {/*left section*/}
            <div className='flex flex-col space-y-4'>
               <p className='text-xs text-center py-16 mx-8'>Walking through the courtyards and corridors, you can`t help but be immersed in Nepal`s rich heritage and culture. The decorative details found in every corner of The Dwarika`s Hotel take you on a journey through time. </p>
            </div>
            
            <div className='max-sm:mb-4'>
                <Image src={"/image3.jpg"} alt='' width={1200} height={1200} className='w-full h-full object-cover' />
                
            </div>
              
            
              {/* right section */}
            <div className='relative h-full w-full overflow-visible space-x-6'>
                <Image src={"/image4.jpg"} alt='' width={1200} height={1200} className='w-[312px] h-full object-cover absolute overflow-y-visible -top-32' />
              </div>
            
            {/*right section*/}
            <div className='flex flex-col space-y-4'>
               <p className='text-xs text-center py-16 mx-8'> To date, The Dwarika`s Hotel holds one of the world`s most extensive and significant architectural woodwork collections, creating a magical blend of history, culture, and luxury hospitality.  </p>
            </div> 

    </div>
)
  
};

export default Gallery;
