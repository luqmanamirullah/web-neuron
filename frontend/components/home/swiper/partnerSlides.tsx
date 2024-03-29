'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './partnerSlides.css';

import { type Partners } from '@/interface';
import Image from 'next/image';
import { A11y, Autoplay, FreeMode } from 'swiper/modules';

interface Props {
  reverse: boolean;
  partnerData: Partners[];
}

const PartnerSlides: React.FC<Props> = ({ reverse, partnerData }) => {
  return (
    <div>
      <Swiper
        spaceBetween={8}
        grabCursor={true}
        freeMode={true}
        speed={10000}
        loop={true}
        slidesPerView={'auto'}
        modules={[FreeMode, Autoplay, A11y]}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        className="partner-slides"
      >
        {partnerData.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              className="lg:w-[14.875rem] xs:w-[9.25rem] lg:h-[5.9375rem] xs:h-[5.4375rem] object-contain"
              width={500}
              height={500}
              alt="our partner"
              src={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnerSlides;
