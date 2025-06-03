'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
    '/images/banner-1.jpg',
    '/images/banner-2.jpg',
];

const HeroSlider = () => {
    return (
        <div className="w-full max-w-full sm:max-w-4xl lg:max-w-6xl mx-auto mt-25 px-4 rounded-xl overflow-hidden">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                navigation
                pagination={{ clickable: true }}
                className="mySwiper"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <Image src={src} alt={`Slide ${index}`} width={400} height={300} className="w-full h-40 sm:h-56 md:h-72 lg:h-96 rounded-xl object-cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default HeroSlider