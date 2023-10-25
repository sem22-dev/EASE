
import EventCard from "@/components/browseCard";


function EventCards() {

  return(
        <div className='text-white py-8 grid grid-cols-fluid items-center gap-4 md:gap-8 '>
          <EventCard
            href={'/'}
            imageSrc={'/event1.webp'}
            eventName={"Live tribute to slash"}
            date={'12 nov'}
            place={'Indoor stadium, Imphal'}
            price={'$10'}
          /> 
        </div>
  )
}

export default EventCards; // Apply the middleware to the page
