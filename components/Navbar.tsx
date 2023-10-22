"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import { AlignRight, X } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Logo from "./logo"


export default  function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [rotate, setRotate] = useState(false)
      const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if(showMenu) {
            document.body.style.overflowY = "hidden"
        } else {
            document.body.style.overflowY = "auto";
            setRotate(false)
        }
    },[showMenu])

      useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <main className={` ${pathname === '/authentication' || pathname === '/authentication/login' ? "hidden" : ""}`}>
            <nav style={{ backdropFilter: 'blur(6.7px)' }} className={` ${pathname ==='/browse' ? 'bg-black text-white' : 'bg-white text-black'} ${scrolled ? 'bg-opacity-30' : ''}  z-50 hidden lg:flex justify-center items-center fixed top-0 left-0 right-0 py-4 lg:px-8 xl:px-12`}>
                <div className=" w-full hidden lg:flex justify-between text-base  items-center">
                    <Logo />
                    <div className="flex items-center gap-8">
                        <Link href={'/browse'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}><p className={` ${pathname === '/browse' ? 'underline-white' : 'underline-black'} under-ani py-2`}>Browse events</p></Link>
                        <Link href={'/'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}><p className={` ${pathname === '/browse' ? 'underline-white' : 'underline-black'} under-ani py-2`}>About</p></Link>
                        <Link href={'/'} className={`${pathname === '/' ? ' ' : ''} px-2 py-1 rounded-lg`}><p className={` ${pathname === '/browse' ? 'underline-white' : 'underline-black'} under-ani py-2`}>Blog</p></Link>
                        
                        {pathname === '/browse' ?
                        (
                        <Link href={'/'} className={buttonVariants({ variant: "defaultWhite", size: 'lg' })}>List your event</Link>
                        ) : (
                        <Link href={'/'} className={buttonVariants({ variant: "defaultBlack", size: 'lg' })}>List your event</Link>
                        )}

                        <Link href={'/authentication'} className={` ${pathname === '/browse' ? 'border-white' : 'border-black'} rounded-md py-2 px-3 border `}>LOG IN</Link>
                    </div>
                </div>
            </nav>
                        {/* smaller screens */}
            <nav style={{ backdropFilter: 'blur(6.7px)' }} className={`  bg-opacity-30 bg-white z-50 flex w-full lg:hidden justify-between items-center fixed top-0 left-0 right-0 py-3 px-4`}>
                <Logo />
                <div onClick={() => setShowMenu(true)} className="bg-black text-white p-1.5 rounded-full" >
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
            </nav>
        </main>
    )
  }
