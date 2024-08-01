"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import img1 from '@/Images/hero/image1.jpg';
import img2 from '@/Images/hero/image2.jpg';
import img3 from '@/Images/hero/image3.jpg';
import img4 from '@/Images/hero/image4.jpg';
import img5 from '@/Images/hero/image5.jpg';
import img6 from '@/Images/hero/image6.jpg';
import img7 from '@/Images/hero/image7.jpg';
import Image from 'next/image';

const Hero = () => {
    const images = [
        img2, img1, img3, img4, img5, img6, img7
    ];

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image className='h-[650px] w-full' src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Hero;
