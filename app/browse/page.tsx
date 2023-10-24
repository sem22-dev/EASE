import { Zap } from "lucide-react"
import EventCards from "../testting/page"

export default function Browse(){
    return(
        <main className="h-fit bg-black py-6 px-4  xl:px-24">
            <div className=" flex justify-start items-start gap-2">
                <Category name={'Shows'}/>
                <Category name={'Party'}/>
            </div>
            <EventCards />
        </main>
    )
}

function Category({name}: {name : string}){
    return(
    <div className=" h-[72px] w-[72px] flex flex-col gap-2  justify-center text-white text-center rounded-lg bg-[#222222] hover:bg-[#333333] cursor-pointer">
        <Zap className="ml-4"/>
        <h1 className="text-sm">{name}</h1>
    </div>
    )
}