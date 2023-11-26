import { Zap } from "lucide-react"
import EventCards from "./components/Cards"
import { Icons } from "@/components/icons"
import BrowseFilter from "./components/browseFilter"
import LiveShows from "./shows/page"
import { Suspense } from "react"
import Loading from "../loading"

export default function Browse({children}:{children: React.ReactNode}){

    

    return(
        <main className="min-h-screen bg-black py-6 px-4  xl:px-24">
            <BrowseFilter />
            <Suspense fallback={<Loading />}> 
                <div>
                {children}
                </div>
            </Suspense>
        </main>
    )
}
