'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './serviceSlides.css';

import Button from '@/components/button';
import { topService } from '@/data/services';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { FreeMode } from 'swiper/modules';

const ServiceSlides: React.FC = () => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <div className="flex flex-col items-center w-full xl:h-[34rem] lg:h-fit">
      <Swiper
        breakpoints={{
          0: {
            spaceBetween: 10,
          },
          1000: {
            spaceBetween: 0,
            noSwiping: true,
            noSwipingClass: 'no-swiping',
          },
        }}
        slidesPerView={'auto'}
        freeMode={true}
        modules={[FreeMode]}
        className="service-slides"
      >
        {topService.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              {/* Content */}
              <div className="md:p-6 pt-6 pb-4 px-4 relative z-[4]">
                <h4 className="lg:text-desktop-headline xs:text-mobile-headline font-bold text-sys-light-onPrimary mb-2">
                  {item.name}
                </h4>
                <p className="line-clamp-3 lg:text-desktop-body xs:text-mobile-body text-sys-light-onPrimary lg:mb-8 xs:mb-4">
                  {item.desc}
                </p>

                <Button
                  className="text-sys-light-onPrimary"
                  buttonStyle="outlined"
                  label="Read More"
                  size={largeScreen ? 'md' : 'sm'}
                  withIcon={true}
                  icon={<ArrowOutwardRounded />}
                />
              </div>

              <Image
                className="absolute top-0 w-full h-full object-cover"
                height={500}
                width={500}
                src={item.img}
                alt={item.name}
              />

              {/* Backdrop */}
              <div className="absolute top-0 w-full h-full z-[2] bg-[rgba(0,0,0,0.5)]"></div>
              {/* Red Gradient */}
              <div className="absolute bottom-0 w-full h-[70%] z-[3] bg-gradient-to-t from-[rgba(255,0,0,0.56)] to-transparent"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Button
        className="lg:hidden"
        buttonStyle="text"
        label="See More"
        size="sm"
        withIcon={true}
        icon={<ArrowOutwardRounded />}
      />
    </div>
  );
};

export default ServiceSlides;
