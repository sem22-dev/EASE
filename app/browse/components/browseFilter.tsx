
import { Zap } from "lucide-react"
import { Icons } from "@/components/icons"

export default function BrowseFilter(){
    return(
        <main className=" ">
            <div className="flex flex-col gap-4">
                <div className="text-white">
                    <Location name={'Imphal'}/>
                </div>
                <div className=" flex justify-start items-start gap-2">
                    <Category name={'Shows'} iconName="live"/>
                    <Category name={'Party'} iconName="power"/>
                    <Category name={'Comedy'} iconName="comedy"/>
                </div>
                <h1 className=" text-4xl text-white md:mt-4">Events <span className="text-gray-600"> in Imphal</span></h1>
            </div>
        </main>
    )
}

function Category({ name, iconName }: { name: string, iconName: keyof typeof Icons }) {
    const Icon = Icons[iconName]
    return(
    <div className=" h-[72px] w-[72px] flex flex-col gap-2 justify-center text-white text-center rounded-lg bg-[#222222] hover:bg-[#333333] cursor-pointer">
        <Icon className="w-5 ml-4"/>
        <h1 className="text-sm">{name}</h1>
    </div>
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