'use client'

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion";


export default function Promote() {
    const sectionStyle = {
        backgroundImage: 'url("/gradient.webp")', // Replace with the actual image URL
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section style={sectionStyle} className=" h-screen flex justify-center md:items-center py-12 md:py-0 text-white">
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.1 }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 100 }
                }}
                viewport={{ once: true }}
                className="container mx-auto text-center flex flex-col items-center gap-8 md:gap-10"
            >
                <h2 className=" text-3xl sm:text-5xl md:text-8xl text-black font-semibold px-14 uppercase text-center font-foggyR">
                   List your Event
                </h2>
                <p className="text-black text-xl md:text-3xl">
                Amplify your reach, effortlessly sell tickets, and seamlessly host both virtual and in-person gatherings on EventBrite. Share your event with the world—start publishing today!
                </p>
                <Link href={'/publish/eventForm'} className={buttonVariants({ variant: "defaultBlack", size: 'lg' })}>Start now</Link>
            </motion.div>
        </section>
    );
}
