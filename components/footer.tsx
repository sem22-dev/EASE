"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "./logo";

export default function Footer() {

  const pathname = usePathname()

  return (
        <footer className={`${pathname === '/authentication' || pathname === '/authentication/login' ? 'hidden' : 'block'}  py-12 sm:py-16 lg:py-24   `}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex md:justify-center ">
      <Logo />
    </div>
    <nav className="columns-2 -mb-6 mt-8 sm:flex sm:justify-center sm:space-x-8" aria-label="Footer">
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/pricing">About</Link>
      </div>
      <div className="pb-6">
        <Link href="/blog" className=" font-medium leading-6 transition-all duration-150 footer-underline py-2">Events</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/contact-us">Blogs</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/terms">Request a refund</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 footer-underline py-2" href="/terms">Terms of use</Link>
      </div>
      <div className="pb-6">
        <Link target="_blank" rel="noopener noreferrer" href="/" className="  footer-underline py-2  font-medium leading-6 transition-all duration-150">Help center</Link>
      </div>
    </nav>
    <div className="flex justify-center mt-8">
      <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/Thotsem22" className="  inline-flex items-center justify-center gap-3 bg-white text-sm font-medium text-gray-500 transition-all duration-150 rounded-xl border border-gray-200 px-3 py-2 hover:bg-white hover:text-black hover:border-black">
        <Image src={'/xTwitter.svg'} width={500} height={500} alt="twitter" className="w-4 h-4" />
        <span className="text-sm font-medium ">Designed and Developed by Sem</span>
      </Link>
    </div>
  </div>
</footer>

    );
}
