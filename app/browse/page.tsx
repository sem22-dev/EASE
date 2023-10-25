import { Zap } from "lucide-react"
import EventCards from "./components/Cards"
import { Icons } from "@/components/icons"
import BrowseFilter from "./components/browseFilter"

export default function Browse(){
    return(
        <main className="min-h-screen bg-black py-6 px-4  xl:px-24">
            <BrowseFilter />
            <EventCards />
        </main>
    )
}
