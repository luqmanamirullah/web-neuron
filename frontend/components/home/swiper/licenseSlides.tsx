'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './licenseSlides.css';

import { type Certificate } from '@/interface';
import { FreeMode } from 'swiper/modules';

interface Props {
  licenseData: Certificate[];
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
        {licenseData.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Image
                className="lg:h-[10rem] xs:h-[6.25rem] lg:w-auto xs:w-[8rem] object-contain"
                width={500}
                height={500}
                alt='our license'
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
