'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    {
      url: '/image6.jpg',
      title: 'Heritage Deluxe Room',
      subtitle: 'Discover More',
    },
    {
      url: 'image7.jpg',
      title: 'Heritage Junior Suite',
      subtitle: 'Discover More',
    },
    {
      url: 'image8.jpg',
      title: 'Heritage Excutive Suite',
      subtitle: 'Discover More',
    },
    {
      url: 'image9.jpg',
      title: 'Heritage Royal Suite',
      subtitle: 'Discover More',
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Main Image Container */}
      <div className="relative w-full h-[200px] md:h-[400px] Rectangle-lg overflow-hidden shadow-2xl">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
              index === currentSlide
                ? 'translate-x-0'
                : index < currentSlide
                ? '-translate-x-full'
                : 'translate-x-full'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${image.url}')` }}
            >
              {/* Dark Overlay */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
            </div>
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center">
              <div className="text-white px-4 md:px-8 py-4">
                <h2 className="text-xl md:text-3xl font-light mb-2 md:mb-4 tracking-wide">
                  {image.title}
                </h2>
                <button className="flex items-center text-xs md:text-base font-light hover:text-gray-300 transition-colors duration-300">
                  <span className="mr-2 md:mr-3">{image.subtitle}</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Controls */}
        <div className="absolute bottom-3 md:bottom-5 right-3 md:right-5 flex items-center space-x-2 md:space-x-4">
          <span className="text-white text-xs md:text-sm font-light">
            {currentSlide + 1} / {images.length}
          </span>

          <button
            onClick={prevSlide}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
          </button>
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            {isPlaying ? (
              <Pause className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
            ) : (
              <Play className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
            )}
          </button>
          <button
            onClick={nextSlide}
            className="text-white hover:text-gray-300 transition-colors duration-300"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 md:bottom-5 left-3 md:left-5 flex space-x-1 md:space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;