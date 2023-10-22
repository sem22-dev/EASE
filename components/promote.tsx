import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"


export default function Promote() {
    const sectionStyle = {
        backgroundImage: 'url("/gradient.webp")', // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section style={sectionStyle} className=" h-screen flex justify-center items-center text-white">
            <div className="container mx-auto text-center flex flex-col items-center gap-4 md:gap-10">
                <h2 className=" text-3xl sm:text-5xl md:text-8xl text-black font-semibold px-14 uppercase text-center font-foggyR">
                    Selling tickets online? <br /> We've got you 
                </h2>
                <Link href={'/'} className={buttonVariants({ variant: "default", size: 'lg' })}>List Your Eent</Link>
            </div>
        </section>
    );
}
