

import Link from 'next/link';
import Image from 'next/image';

interface LiveStreamCardProps {
  href: string;
  imageSrc: string;
  eventName: string;
  date: string;
}

export default function LiveStreamCard({
  href,
  imageSrc,
  eventName,
  date,
}: LiveStreamCardProps) {
  return (
    <Link href={`${href}`} className='flex flex-col gap-1 overflow-hidden '>
      <div className=' rounded-lg  relative h-[220px] md:h-[270px]'>
        {/* Image */}
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          alt='Live Stream Thumbnail'
          className='w-full h-full object-cover rounded-lg'
        />
      </div>
      <div className='flex flex-col md:flex-row gap-2 text-base'>
          {/* for mobile */}
          <div className='flex md:hidden gap-2 px-1'>
            <div className=' text-sm md:text-base md:w-[188px]'>
              <h1 className='overflow-hidden whitespace-nowrap truncate'>
                  {eventName}
              </h1>
            </div>
          </div>
          {/* for pc */}
          <div className='  text-sm hidden pb-1 md:block md:text-base md:w-[188px]'>
              <h1 className='overflow-hidden text-bgGreen whitespace-nowrap  truncate'>
                  {eventName}
              </h1>
              <h1 className='text-base  overflow-hidden mt-0.5 whitespace-normal truncate leading-4'>
                  {date}
              </h1>
          </div>
            {/* for mobile */}
              <div className=' md:hidden px-1 mb-2'>
                <h1 className='text-base   overflow-hidden whitespace-normal truncate leading-4 md:leading-normal'>
                    {date}
                </h1>
            </div>
      </div>
    </Link>
  );
}
