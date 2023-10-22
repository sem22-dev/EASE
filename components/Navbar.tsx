"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import { gsap } from "gsap"
import { AlignRight, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Logo from "./logo"


export default  function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)

    const pathname = usePathname();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: {duration: 1} })
    tl.fromTo("nav", { y: "-100%" }, { y: "0%" })
    }, [])

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

    return (
        <main className={` ${pathname === '/authentication' || pathname === '/authentication/login' ? "hidden" : ""}`}>
            <nav style={{ backdropFilter: 'blur(6.7px)' }} className={`  bg-opacity-30 bg-white z-50 hidden lg:flex justify-center items-center fixed top-0 left-0 right-0 py-4 lg:px-8 xl:px-12`}>
                <div className=" w-full hidden lg:flex justify-between text-base text-black items-center">
                    <Logo />
                    <div className="flex items-center gap-8">
                        <Link href={'/'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}>Browse events</Link>
                        <Link href={'/'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}>Blogs</Link>
                        <Link href={'/'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}>About</Link>
                        <Link href={'/'} className={buttonVariants({ variant: "default", size: 'lg' })}>List Your Eent</Link>
                        <Link href={'/authentication'} className=" rounded-md py-2 px-3 border border-black ">LOG IN</Link>
                    </div>
                </div>
            </nav>
                        {/* smaller screens */}
            <div className="lg:hidden text-white fixed w-full px-3 py-4 bg-black flex justify-between items-center top-0 z-50">
                    <Link href="/">
                        EVENT
                    </Link>
                <div onClick={() => setShowMenu(true)} >
                    <AlignRight />
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} text-slate-600 text-lg fixed top-0 z-50  min-h-screen w-full`}>
                
                    <div  className={`${showMenu ? "right-0 " : "-right-[100%]"} flex flex-col items-center  bg-white z-50 py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-full gap-8 fixed top-0 overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5 "><X /></button>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Features</Link>
                        <Link className="" onClick={() => setShowMenu(false)} href={'/'}>Pricing</Link>
                    </div>
                </div>
            </div>
        </main>
    )
  }
