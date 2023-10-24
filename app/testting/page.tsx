"use client"

import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from "react";
import LiveStreamCard from "@/components/liveStreamCard";


function EventCards() {

  return(
        <div className='text-white py-8 grid grid-cols-fluid items-center gap-4 md:gap-8 '>
          <LiveStreamCard
            href={'/'}
            imageSrc={'/event1.webp'}
            eventName={"sem"}
            date={' THis is title'}
          /> 
                    <LiveStreamCard
            href={'/'}
            imageSrc={'/event1.webp'}
            eventName={"sem"}
            date={' THis is title'}
          /> 
                    <LiveStreamCard
            href={'/'}
            imageSrc={'/event1.webp'}
            eventName={"sem"}
            date={' THis is title'}
          /> 
                    <LiveStreamCard
            href={'/'}
            imageSrc={'/event1.webp'}
            eventName={"sem"}
            date={' THis is title'}
          /> 
        </div>
  )
}

export default EventCards; // Apply the middleware to the page
