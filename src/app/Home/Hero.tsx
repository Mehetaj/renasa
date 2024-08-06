"use client"

import img1 from '@/Images/hero/image1.jpg';
import img2 from '@/Images/hero/image2.jpg';
import img3 from '@/Images/hero/image3.jpg';
import img4 from '@/Images/hero/image4.jpg';
import img5 from '@/Images/hero/image5.jpg';
import img6 from '@/Images/hero/image6.jpg';
import img7 from '@/Images/hero/image7.jpg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full mx-auto">
      <div className="overflow-hidden relative h-64 sm:h-80 md:h-[450px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-transform transform ${
              index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        ))}
      </div>
      <Button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-white/70"
        startIcon={<ArrowBackIosIcon />}
      />
      <Button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-white/70"
        endIcon={<ArrowForwardIosIcon />}
      />
    </div>
  );
};

export default Hero;
