import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
      <div className='relative h-screen w-full'>
          <Image src={"/Background2.jpg"} alt='hero image' fill objectFit='cover' quality={100} loading='eager' />
    </div>
  )
}

export default HeroSection