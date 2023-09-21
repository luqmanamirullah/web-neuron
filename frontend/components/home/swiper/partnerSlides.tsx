'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './partnerSlides.css';

import { FreeMode, Autoplay, A11y } from 'swiper/modules';
import Image from 'next/image';
import { Partner, partners } from '@/data/partners';

interface Props {
  reverse: boolean;
  partnerData: Partner[];
}

const PartnerSlides = ({ reverse, partnerData }: Props) => {
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
        {partnerData.map((item) => {
          return (
            <SwiperSlide>
              <Image
                className="lg:w-[14.875rem] xs:w-[9.25rem] lg:h-[5.9375rem] xs:h-[5.4375rem] object-contain"
                width={500}
                height={500}
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

export default PartnerSlides;
