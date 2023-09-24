import { latest } from '@/data/portfolio';
import cn from '@/utils/cn';
import Image from 'next/image';
import React from 'react';

interface Props {
  inverse?: boolean;
}

const ScrollingImage: React.FC<Props> = ({ inverse = false }) => {
  const latestPortfolio = latest;

  return (
    <>
      <div
        className={cn(
          ' w-full flex flex-col md:gap-md gap-s',
          inverse ? 'animate-auto-scroll-inverse' : 'animate-auto-scroll',
        )}
      >
        {latestPortfolio.map((item) => (
          <Image
            className="shadow-xl w-full  h-auto object-cover bg-center"
            key={item.id}
            src={item.img}
            alt={item.name}
            width={100}
            height={100}
          />
        ))}
      </div>
      <div
        className={cn(
          ' w-full flex flex-col md:gap-md gap-s',
          inverse ? 'animate-auto-scroll-inverse' : 'animate-auto-scroll',
        )}
      >
        {latestPortfolio.map((item) => (
          <Image
            className="shadow-xl w-full  h-auto object-cover bg-center"
            key={item.id}
            src={item.img}
            alt={item.name}
            width={100}
            height={100}
          />
        ))}
      </div>
      <div
        className={cn(
          ' w-full flex flex-col md:gap-md gap-s',
          inverse ? 'animate-auto-scroll-inverse' : 'animate-auto-scroll',
        )}
      >
        {latestPortfolio.map((item) => (
          <Image
            className="shadow-xl w-full  h-auto object-cover bg-center"
            key={item.id}
            src={item.img}
            alt={item.name}
            width={100}
            height={100}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollingImage;
