import { Zap } from "lucide-react"

export default function Browse(){
    return(
        <main className="h-screen bg-black flex justify-start items-start gap-2  py-6 lg:px-8 xl:px-24">
            <Category name={'Shows'}/>
            <Category name={'Party'}/>
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