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
        <div className={` ${pathname === '/authentication' || pathname === '/authentication/login' ? "hidden" : " inline"} `}>
            <nav style={{ backdropFilter: 'blur(6.7px)' }} className={` ${pathname ==='/browse' ? 'bg-black text-white' : 'bg-white text-black'} ${scrolled ? 'bg-opacity-30' : ''}  z-50 hidden lg:flex justify-center items-center sticky top-0  py-4 lg:px-8 xl:px-12`}>
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
             {/* Smaller screens */}
      <nav
        style={{ backdropFilter: 'blur(6.7px)' }}
        className={` ${
          pathname === '/browse' ? 'bg-black text-white' : 'bg-white text-black'
        } ${scrolled ? 'bg-opacity-30' : ''} z-50 flex w-full lg:hidden justify-between items-center sticky top-0 py-3 px-4`}
      >
                <Logo />
                <div onClick={() => setShowMenu(true)} className="bg-black text-white p-1 rounded-full" >
                    <AlignRight size={20}/>
                </div>
      </nav>

        {showMenu && (
          <div className="fixed  top-0 left-0 right-0 bottom-0 z-50 flex ">
            <div style={{ backdropFilter: 'blur(5.7px)' }} className="bg-black bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
              <button
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 rounded-full p-1 bg-white duration-300 text-black hover:bg-[#bebcbc]"
              >
                <X size={23}/>
              </button>
            <div className="bg-white rounded-lg p-4 text-black text-[20px]  w-full mx-4 mt-14 z-10 h-fit">
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                Browse events
              </Link>
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                About
              </Link>
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                Blog
              </Link>
              <Link className="block py-4 border-b" onClick={() => setShowMenu(false)} href={'/'}>
                List your event
              </Link>
              <Link className="block py-6 text-center uppercase text-sm" onClick={() => setShowMenu(false)} href={'/'}>
                Log in/Sign up
              </Link>
            </div>
          </div>
        )}

        </div>
    )
  }



