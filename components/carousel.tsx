"use client"

import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { motion } from 'framer-motion'

export default function MySwiperComponent() {
  return (
    <main className=' z-0 '>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3}}
        variants={{
            visible: { y: 0 },
            hidden: { y: 75 }
        }}
        viewport={{ once: true }}
        className='hidden md:block px-4 xl:px-12 2xl:px-24'
      >
        <Swiper
          grabCursor={true}
          // navigation={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[ FreeMode, Autoplay]}
          className='flex  justify-center items-center ' 
        >
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event1.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 1"
              className=' object-cover  rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event2.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 2"
              className=' object-cover   rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event3.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 3"
              className=' object-cover   rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event3.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 3"
              className=' object-cover  rounded-xl'
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>
      {/* for mobile */}
      <div className='md:hidden px-2 ' style={{ zIndex: -1 }}>
        <Swiper
          grabCursor={true}
          // navigation={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[ FreeMode, Navigation, Autoplay]}
          className='gameSwiper' 
        >
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event1.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 1"
              className=' h-[400px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event2.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 2"
              className=' h-[400px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/event3.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 3"
              className=' h-[400px] object-cover rounded-xl'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
            width={1000}
            height={1000}
              src="/dogeNFT.webp" // Adjust the height (e.g., 650x450)
              alt="Slide 4"
              className=' h-[400px] object-cover rounded-xl'
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </main>
  );
}
