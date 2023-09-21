'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './deliverableSlides.css';

import { Pagination, Navigation, EffectCreative } from 'swiper/modules';
import { Portfolio } from '@/data/portfolio';

interface Props {
  portfolioItem: Portfolio;
  portfolioIndex: number;
}

const DeliverableSlides = ({ portfolioItem, portfolioIndex }: Props) => {
  return (
    <div>
      <Swiper
        navigation={{
          nextEl: `.next-slide-${portfolioIndex}`,
        }}
        pagination={true}
        loop
        noSwiping={true}
        noSwipingClass="no-swiping"
        modules={[Pagination, Navigation, EffectCreative]}
        className="deliverable-slides"
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: [0, -20, -100],
          },
          next: {
            shadow: true,
            translate: ['100%', '-20%', 0],
            rotate: [0, 0, 90],
          },
        }}
      >
        {portfolioItem.deliverables.map((item) => {
          return (
            <SwiperSlide className={`no-swiping next-slide-${portfolioIndex}`}>
              <p className="lg:text-desktop-body font-bold text-center">
                {item}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default DeliverableSlides;
