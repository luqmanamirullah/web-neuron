'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import './licenseSlides.css';

import { FreeMode } from 'swiper/modules';
import { licenses } from '@/data/license';
import { useMediaQuery } from '@mui/material';

const LicenseSlides = () => {
  const largeScreen = useMediaQuery('(min-width:1000px)');

  return (
    <div className="lg:mt-10 xs:mt-4 flex justify-center">
      <Swiper
        grabCursor={true}
        freeMode={true}
        slidesPerView={'auto'}
        modules={[FreeMode]}
        className="license-slides"
      >
        {licenses.map((item) => {
          return (
            <SwiperSlide>
              <Image
                className="lg:h-[10rem] xs:h-[6.25rem] lg:w-auto xs:w-[8rem] object-contain"
                width={300}
                height={300}
                alt={item.name}
                src={item.imageUrl}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LicenseSlides;
