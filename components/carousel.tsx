"use client"

import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';

export default function MySwiperComponent() {
  return (
    <main className=' '>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 35,
          stretch: 200,
          depth: 259,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Navigation, Autoplay]}
        className='gameSwiper'
      >
        <SwiperSlide>
          <Image
          width={1000}
          height={1000}
            src="/event1.png" // Adjust the height (e.g., 650x450)
            alt="Slide 1"
            className=' h-[400px] object-cover w-[650px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          width={1000}
          height={1000}
            src="/event2.jpg" // Adjust the height (e.g., 650x450)
            alt="Slide 2"
            className=' h-[400px] object-cover w-[650px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          width={1000}
          height={1000}
            src="/event3.jpg" // Adjust the height (e.g., 650x450)
            alt="Slide 3"
            className=' h-[400px] object-cover w-[650px]'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
          width={1000}
          height={1000}
            src="/dogeNFT.png" // Adjust the height (e.g., 650x450)
            alt="Slide 4"
            className=' h-[400px] object-cover w-[650px]'
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
