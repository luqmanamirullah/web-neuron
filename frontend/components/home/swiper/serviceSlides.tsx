'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './serviceSlides.css';

import { FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import { services } from '@/data/services';
import { useMediaQuery } from '@mui/material';

const ServiceSlides = () => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <div className="flex flex-col items-center w-full">
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
        {services.map((item, index) => {
          if (index < 3) {
            return (
              <SwiperSlide className={largeScreen ? 'no-swiping' : ''}>
                {/* Content */}
                <div className="p-6 relative z-[4]">
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
                    icon={<ArrowForwardRounded />}
                  />
                </div>

                <Image
                  className="absolute top-0 w-full h-full object-cover"
                  height={500}
                  width={500}
                  src={item.imageUrl}
                  alt={item.name}
                />

                {/* Backdrop */}
                <div className="absolute top-0 w-full h-full z-[2] bg-[rgba(0,0,0,0.5)]"></div>
                {/* Red Gradient */}
                <div className="absolute bottom-0 w-full h-[70%] z-[3] bg-gradient-to-t from-[rgba(255,0,0,0.56)] to-transparent"></div>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>

      <Button
        className="lg:hidden"
        buttonStyle="text"
        label="See More"
        size="sm"
        withIcon={true}
        icon={<ArrowForwardRounded />}
      />
    </div>
  );
};

export default ServiceSlides;
