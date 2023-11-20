"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Login } from "./login"
import Logo from "@/components/logo"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function AuthenticationPage() {

  const { data: session, status } = useSession();
  const router = useRouter()

  if (status === "loading") {
    return(
    <div className={`h-screen fixed z-50 w-full bg-white flex items-center justify-center`}>
            <h1 className="fixed top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black rounded-full px-3 py-1 text-lg">Loggin in...</h1>
    </div>
    ) 
  }

  return (
    <>
      <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
          href="/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Sign Up
        </Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0" style={{ backgroundImage: `url('/graphic2.webp')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>

          <div className="relative z-20 flex items-center text-lg font-medium">
            <Logo />
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
            <Login />
          </div>
        </div>
      </div>
    </>
  )
}