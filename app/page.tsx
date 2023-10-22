"use client"

import Carousel from "../components/carousel"
import Upcomings from "../components/upcomings"
import Promote from "../components/promote"

export default function Home() {
  return (
  <main className="pt-32 pb-6" >
      <Carousel />   
      <Upcomings />   
      <Promote />
  </main>

  )
}
