import { useState, useRef, useEffect   } from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';
import { motion } from "framer-motion"
import UpcomingCards from '@/components/upcomingCards';

export default function Upcomings() {
  // Define events for the "Upcoming Events" category
  const upcomingEvents = [
    {
      id: 'event1',
      title: 'Live Concert Event 1',
      imageSrc: '/event1.png',
      date: 'Sep 15, 2023',
    },
    {
      id: 'event2',
      title: 'Sports Event 1',
      imageSrc: '/event2.jpg',
      date: 'Oct 10, 2023',
    },
    {
      id: 'event3',
      title: 'Cafe Gig Event 1',
      imageSrc: '/event3.jpg',
      date: 'Nov 5, 2023',
    },
    {
      id: 'event4',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event1.png',
      date: 'Dec 12, 2023',
    },
    {
      id: 'event5',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event2.jpg',
      date: 'Dec 12, 2023',
    },
        {
      id: 'event6',
      title: 'Theatre & Comedy Event 1',
      imageSrc: '/event1.png',
      date: 'Dec 12, 2023',
    },
    // Add more events...
  ];


  return (
    <section className="py-16 md:py-32 px-4 bg-white text-gray-800">
      <h2 className="text-lg md:ml-16 text-black mb-6">UPCOMING EVENTS</h2>
      {/* Event Display */}
      <UpcomingCards />
      <div className="flex flex-col md:flex-row gap-4 justify-around my-16 items-center">
        <p className="text-lg md:w-[650px] text-black font-medium">
          Check out some of the most popular events coming up in your city, from club nights and gigs to artist signings and comedy shows.
        </p>
        <Link href={'/'} className={buttonVariants({ variant: "default" })}>
          See more
        </Link>
      </div>
    </section>
  );
}
