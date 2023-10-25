

import Link from 'next/link';
import Image from 'next/image';

interface EventProps {
  href: string;
  imageSrc: string;
  eventName: string;
  date: string;
    place: string;
      price: string;
}

export default function EventCard({
  href,
  imageSrc,
  eventName,
  date,
  place,
  price
}: EventProps) {
  return (
    <Link href={`${href}`} className='flex flex-col gap-1 sm:min-h-[400px] overflow-hidden relative'>
      <div className=' rounded-lg  relative h-[220px] md:min-h-[250px] group duration-300'>
        {/* Image */}
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          alt='Event Thumbnail'
          className='w-full h-full object-cover rounded-lg group-hover:scale-100'
        />
          <div className="group-hover:flex duration-300 items-center justify-center rounded-lg bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 hidden">
            <span className="text-yellow-300 p-2 rounded uppercase text-lg font-medium">Get ticket</span>
          </div>
      </div>
      <div className='flex flex-col md:flex-row text-base max-w-[250px]'>
          <div className=' pb-1'>
              <h1 className=' text-lg overflow-hidden leading-5'>
                  {eventName}
              </h1>
              <h1 className='text-base text-yellow-300 overflow-hidden mt-1 whitespace-normal truncate leading-4'>
                  {date}
              </h1>
              <h1 className='text-sm overflow-hidden mt-1 whitespace-normal truncate leading-4'>
                {place}
              </h1>
              <h1 className='text-sm overflow-hidden mt-1 whitespace-normal truncate leading-4'>
                {price}
              </h1>
          </div>
      </div>
    </Link>
  );
}
