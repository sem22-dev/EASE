
"use client"

import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import Image from 'next/image';
import { motion } from 'framer-motion'
import Link from 'next/link';

export default function UpcomingCards() {

      const upcomingEvents = [
    {
      id: 'event1',
      title: 'Live Concert Event 1',
      imageSrc: '/event1.webp',
      date: 'Sep 15, 2023',
    },
    {
      id: 'event2',
      title: 'Sports Event 1',
      imageSrc: '/event2.webp',
      date: 'Oct 10, 2023',
    },
    {
      id: 'event3',
      title: 'Cafe Gig Event 1',
      imageSrc: '/event3.webp',
      date: 'Nov 5, 2023',
    },
    {
      id: 'event4',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event1.webp',
      date: 'Dec 12, 2023',
    },
    {
      id: 'event5',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event2.webp',
      date: 'Dec 12, 2023',
    },
        {
      id: 'event6',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event1.webp',
      date: 'Dec 12, 2023',
    },
    {
      id: 'event7',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event1.webp',
      date: 'Dec 12, 2023',
    },
    {
      id: 'event8',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event2.webp',
      date: 'Dec 12, 2023',
    },
    // Add more events...
  ];

  return (
    <main className='md:px-3 z-0'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3}}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 }
        }}
        viewport={{ once: true }}
        className='hidden md:block'
      >
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 10,
            disableOnInteraction: false,
          }}
          modules={[ FreeMode, Autoplay]}
          className='gameSwiper' 
        >
        {upcomingEvents.map((event) => (
        <SwiperSlide key={event.id}>
          <Link
            href={'/'}
            key={event.id}
            className="relative rounded-lg overflow-hidden flex flex-col border-red-500"
          >
            <div className="relative group">
              <Image
                src={event.imageSrc}
                width={1000}
                height={1000}
                alt={event.title}
                className="object-cover rounded-lg transition-transform group-hover:scale-100"
              />
              <div className="group-hover:flex items-center justify-center rounded-lg bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 hidden">
                <span className="text-white p-2 rounded uppercase text-lg font-medium">Get ticket</span>
              </div>
            </div>
            <div className="flex flex-col justify-end text-black py-2">
              <h3 className="text-lg font-medium">{event.title}</h3>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className="text-sm text-gray-500">ORION LIVE CLUB</p>
              <p className="text-sm text-gray-500">$7</p>
            </div>
          </Link>

          </SwiperSlide>
        ))}
        </Swiper>
      </motion.div>
      {/* for mobile */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.3}}
        variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 75 }
        }}
        viewport={{ once: true }}
        className='md:hidden' style={{ zIndex: -1 }}
      >
        <Swiper
          grabCursor={true}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          speed={1500}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          modules={[ FreeMode, Autoplay]}
          className='gameSwiper ' 
        >
        {upcomingEvents.map((event) => (
        <SwiperSlide key={event.id}>
          <Link href={'/'} className="relative rounded-lg overflow-hidden flex flex-col border-red-500">
            <Image src={event.imageSrc} width={1000} height={1000} alt={event.title} className="object-cover rounded-lg" />
            <div className="flex flex-col justify-end text-black py-2 gap-1">
              <h3 className=" text-base font-medium leading-5">{event.title}</h3>
              <p className="text-gray-500 text-xs">{event.date}</p>
              <p className="text-xs text-gray-500">ORION LIVE CLUB</p>
              <p className="text-xs text-gray-500">$7</p>
            </div>
          </Link>
          </SwiperSlide>
        ))}
        </Swiper>
      </motion.div>
    </main>
  );
}
