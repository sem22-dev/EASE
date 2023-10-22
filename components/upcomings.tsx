import { useState } from 'react';
import Link from 'next/link';
import { buttonVariants } from "@/components/ui/button"
import Image from 'next/image';

export default function Upcomings() {
  const categories = [
    { id: 'all', name: 'Top Picks' }, // Add "All Categories" option
    { id: 'live-concerts', name: 'Live Concerts' },
    { id: 'sports', name: 'Sports' },
    { id: 'cafe-gigs', name: 'Cafe Gigs' },
    { id: 'theatre-comedy', name: 'Theatre & Comedy' },
    // Add more categories as needed
  ];

  // Separate arrays for each category
  const liveConcertsEvents = [
    {
      id: 'event1',
      title: 'Live Concert Event 1',
      imageSrc: '/event1.png',
      date: 'Sep 15, 2023',
    },
    // Add more live concerts events...
  ];

  const sportsEvents = [
    {
      id: 'event1',
      title: 'Sports Event 1',
      imageSrc: '/event2.jpg',
      date: 'Oct 10, 2023',
    },
    // Add more sports events...
  ];

 // Define events for the "Cafe Gigs" category
const cafeGigsEvents = [
  {
    id: 'event1',
    title: 'Cafe Gig Event 1',
    imageSrc: '/event3.jpg',
    date: 'Nov 5, 2023',
  },
  // Add more Cafe Gigs events...
];

// Define events for the "Theatre & Comedy" category
const theatreComedyEvents = [
  {
    id: 'event1',
    title: 'Theatre & Comedy Event 1',
    imageSrc: '/event1.png',
    date: 'Dec 12, 2023',
  },
  // Add more Theatre & Comedy events...
];
 

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  // Function to handle category click
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  // Function to get events based on the selected category
  const getEventsForCategory = (categoryId: string) => {
    switch (categoryId) {
      case 'all':
      return [
        ...liveConcertsEvents,
        ...sportsEvents,
        ...cafeGigsEvents,
        ...theatreComedyEvents, 
      ];
      case 'live-concerts':
        return liveConcertsEvents;
      case 'sports':
        return sportsEvents;
        case 'cafe-gigs':
      return cafeGigsEvents;
    case 'theatre-comedy':
      return theatreComedyEvents;
      default:
        return [];
    }
  };

  const filteredEvents = getEventsForCategory(selectedCategory);

  return (
    <section className=" py-16 md:py-32 px-4 bg-white text-gray-800">
      <h2 className="text-lg md:ml-16 text-black mb-6">UPCOMING EVENTS</h2>
      {/* Event Display */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredEvents.map((event) => (
          <Link href={'/'} key={event.id} className="relative rounded-lg overflow-hidden flex flex-col  border-red-500">
            <Image src={event.imageSrc} width={1000} height={1000} alt={event.title} className=" object-cover rounded-lg" />
            <div className=" flex flex-col justify-end text-black py-2">
              <h3 className=" text-lg font-medium">{event.title}</h3>
              <p className="text-gray-500 text-sm">{event.date}</p>
              <p className='text-sm text-gray-500'>ORION LIVE CLUB</p>
              <p className='text-sm text-gray-500'>$7</p>
            </div>
          </Link>
        ))}
      </div>
      <div className=' flex flex-col md:flex-row gap-4 justify-around my-16 items-center'>
        <p className='text-lg md:w-[650px] text-black font-medium'>Check out some of the most popular events coming up in your city, from club nights and gigs to artist signings and comedy shows.</p>
        <Link href={'/'} className={buttonVariants({ variant: "default" })}>See more</Link>
      </div>
    </section>
  );
}
