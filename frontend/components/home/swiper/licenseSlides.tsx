'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './licenseSlides.css';

import { FreeMode } from 'swiper/modules';

interface Props {
  licenseData: any;
}

const LicenseSlides: React.FC<Props> = ({ licenseData }) => {
  return (
    <div className="lg:mt-10 xs:mt-4 flex justify-center">
      <Swiper
        grabCursor={true}
        freeMode={true}
        slidesPerView={'auto'}
        modules={[FreeMode]}
        className="license-slides"
      >
        {licenseData.map((item: any, index: number) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className="lg:h-[10rem] xs:h-[6.25rem] lg:w-auto xs:w-[8rem] object-contain"
                width={500}
                height={500}
                alt={item.id}
                src={item.image}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default LicenseSlides;
