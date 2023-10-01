"use client"

import Carousel from "../components/carousel"
import Categories from "../components/categories"
import Promote from "../components/promote"
import { Button } from "./livekit/ui"

export default function Home() {
  return (
  <main className="pt-32 bg-black px-8" >
      <Carousel />   
      <Categories />   
      <Promote />
      <Button>
        Hello
      </Button>
  </main>

  )
}
