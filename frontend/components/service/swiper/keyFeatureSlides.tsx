'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './keyFeatureSlides.css';

import { EffectCreative, Navigation, Pagination } from 'swiper/modules';

interface Props {
  item: string[];
  index: string | number;
  className?: string;
}

const KeyFeatureSlides: React.FC<Props> = ({ item, index, className = '' }) => {
  return (
    <div className={className}>
      <Swiper
        navigation={{
          nextEl: `.next-slide-${index}`,
        }}
        pagination={true}
        loop
        noSwiping={true}
        noSwipingClass="no-swiping"
        modules={[Pagination, Navigation, EffectCreative]}
        className="swipe-card"
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: [0, -20, -100],
          },
          next: {
            shadow: false,
            translate: ['100%', '-20%', 0],
            rotate: [0, 0, 90],
          },
        }}
      >
        {item.map((value, i) => {
          return (
            <SwiperSlide key={i} className={`no-swiping next-slide-${index}`}>
              <p className="lg:text-desktop-body font-bold text-center">
                {value}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default KeyFeatureSlides;
