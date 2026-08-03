"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface BannerProps {
  images: string[] | string;
}

export default function Banner({ images = [] }: BannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const imageArray = Array.isArray(images) ? images : [images];
  
  useEffect(() => {
    if (imageArray.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageArray.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [imageArray.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? imageArray.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  return (
    <div className="relative w-full  lg:-mt-26 sm:-mt-8 md:-mt-8">
      <div className="relative w-full aspect-[21/9] overflow-hidden">
        {imageArray.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`Banner ${index + 1}`}
              fill
              className="object-contain"
              priority={index === 0}
              quality={100}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Only show if multiple images */}
      {imageArray.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all backdrop-blur-sm z-10"
            aria-label="Previous banner"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-lg transition-all backdrop-blur-sm z-10"
            aria-label="Next banner"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dot Indicators - Only show if multiple images */}
      {imageArray.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {imageArray.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all rounded-full ${
                index === currentIndex
                  ? "bg-white w-8 h-2 sm:w-10 sm:h-2.5"
                  : "bg-white/60 w-2 h-2 sm:w-2.5 sm:h-2.5 hover:bg-white/80"
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}