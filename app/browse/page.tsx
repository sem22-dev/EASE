import { Zap } from "lucide-react"

export default function Browse(){
    return(
        <main className="h-screen bg-black flex items-center justify-center">
            <div className=" h-20 w-20 flex flex-col gap-2  justify-center text-white text-center rounded-xl bg-[#222222] hover:bg-[#333333] cursor-pointer">
                <Zap className="ml-4"/>
                <h1 className="text-sm">Shows</h1>
            </div>
        </main>
    )
}