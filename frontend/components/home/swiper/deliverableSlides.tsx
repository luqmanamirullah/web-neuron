'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './deliverableSlides.css';

import { EffectCreative, Navigation, Pagination } from 'swiper/modules';

interface Props {
  delivarables: string[] | [];
  portfolioIndex: number;
}

const DeliverableSlides: React.FC<Props> = ({
  delivarables,
  portfolioIndex,
}) => {
  return (
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
      {delivarables.length > 0 &&
        delivarables.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`no-swiping next-slide-${portfolioIndex}`}
            >
              <p className="lg:text-desktop-body font-semibold text-center">
                {item}
              </p>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default DeliverableSlides;
