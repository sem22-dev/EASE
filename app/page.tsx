"use client"

import Carousel from "../components/carousel"
import Upcomings from "../components/upcomings"
import Promote from "../components/promote"

export default function Home() {
  return (
  <main className=" py-10" >
      <Carousel />   
      <Upcomings />   
      <Promote />
  </main>

  )
}
