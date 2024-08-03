"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image className=' w-full' src={image} alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Hero;
