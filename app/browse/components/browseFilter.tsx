"use client"
import { Zap } from "lucide-react"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BrowseFilter(){

    const pathname = usePathname();

    return(
        <main className=" ">
            <div className="flex flex-col gap-4">
                {/* <div className="text-white">
                    <Location name={'Imphal'}/>
                </div> */}
                <div className=" flex justify-start items-start gap-2">
                    <Category name={'Shows'} iconName="live" path="/browse/shows" />
                    <Category name={'Party'} iconName="power" path="/browse/party" />
                    <Category name={'Comedy'} iconName="comedy" path="/browse/comedy" />
                </div>
                <h1 className=" text-4xl text-white md:mt-4">Events <span className="text-gray-600"> in Chennai</span></h1>
            </div>
        </main>
    )
}

function Category({ name, iconName, path }: { name: string, iconName: keyof typeof Icons, path: string }) {
    const Icon = Icons[iconName]
    const isActive = usePathname() === path;

    return(
        <Link href={path} className={`h-[72px] w-[72px] flex flex-col  ${isActive ? 'bg-white text-black' : 'bg-[#222222] text-white hover:bg-[#333333]'} gap-2 justify-center text-center rounded-lg  cursor-pointer`}>
        <Icon className="w-5 ml-4"/>
        <h1 className="text-sm">{name}</h1>
    </Link>
    )
}

function Location({name}: {name : string}){
    return(
    <div className="  inline-flex gap-2 items-center p-3 text-white rounded-lg bg-[#222222] hover:bg-[#333333] cursor-pointer">
        <Icons.location />
        <h1 className="text-sm">{name}</h1>
    </div>
    )
}