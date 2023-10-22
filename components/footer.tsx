"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

export default function Footer() {

  const pathname = usePathname()

  return (
        <footer className={`${pathname === '/authentication' || pathname === '/authentication/login' ? 'hidden' : 'block'}  py-12 sm:py-16 lg:py-24   `}>
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="flex justify-center ">
      <Logo />
    </div>
    <nav className="columns-2 -mb-6 mt-8 sm:flex sm:justify-center sm:space-x-8" aria-label="Footer">
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 hover:underline" href="/pricing">About</Link>
      </div>
      <div className="pb-6">
        <Link href="/blog" className=" font-medium leading-6 transition-all duration-150 hover:underline">Events</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 hover:underline" href="/contact-us">Blogs</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 hover:underline" href="/terms">Request a refund</Link>
      </div>
      <div className="pb-6">
        <Link className="   font-medium leading-6 transition-all duration-150 hover:underline" href="/terms">Terms of use</Link>
      </div>
      <div className="pb-6">
        <Link target="_blank" rel="noopener noreferrer" href="/" className="   font-medium leading-6 transition-all duration-150 hover:underline">Help center</Link>
      </div>
    </nav>
    <div className="flex justify-center mt-8">
      <Link target="_blank" rel="noopener noreferrer" href="https://twitter.com/Thotsem22" className="  inline-flex items-center justify-center gap-1.5 bg-white text-sm font-medium text-gray-500 transition-all duration-150 rounded-xl border border-gray-200 px-3 py-2 hover:bg-white hover:text-black hover:border-black">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
        <span className="text-sm font-medium">Designed and Developed by Sem</span>
      </Link>
    </div>
  </div>
</footer>

    );
}
