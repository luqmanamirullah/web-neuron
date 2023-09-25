import getLatestPortfolio from '@/api/getLatestPortfolio';
import cn from '@/utils/cn';
import Image from 'next/image';
import React from 'react';

interface Props {
  inverse?: boolean;
}

const ScrollingImage: React.FC<Props> = async ({ inverse = false }) => {
  const latestPortfolio = await getLatestPortfolio();
  const portfolio =
    latestPortfolio?.length >= 6
      ? latestPortfolio
      : [
          ...latestPortfolio,
          ...latestPortfolio.slice(0, 6 - (latestPortfolio.length > 0 ? 1 : 0)),
        ];
  return (
    <>
      {portfolio.slice(0, 3).map((item) => (
        <div
          key={item.id}
          className={cn(
            ' w-full flex flex-col md:gap-md gap-s',
            inverse ? 'animate-auto-scroll-inverse' : 'animate-auto-scroll',
          )}
        >
          {portfolio.map((item) => (
            <Image
              className="shadow-xl w-full  h-auto object-cover bg-center"
              key={item.id}
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default ScrollingImage;
