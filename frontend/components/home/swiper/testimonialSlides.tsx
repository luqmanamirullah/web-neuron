'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonials } from '@/data/testimonials';
import GradeRoundedIcon from '@mui/icons-material/GradeRounded';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './testimonialSlides.css';

import { Pagination, Navigation, EffectCreative } from 'swiper/modules';

interface Props {
  homeData: any;
}

const TestimonialSlides = ({ homeData }: Props) => {
  return (
    <div className="relative lg:h-fit xs:h-auto lg:w-fit xs:w-full">
      <Swiper
        spaceBetween={40}
        autoHeight={true}
        navigation={{
          nextEl: '.next-slide',
        }}
        pagination={true}
        loop
        noSwiping={true}
        noSwipingClass="no-swiping"
        modules={[Pagination, Navigation, EffectCreative]}
        className="testimonial-slides"
        effect={'creative'}
        creativeEffect={{
          prev: {
            translate: [0, -60, -200],
          },
          next: {
            shadow: true,
            translate: ['100%', '-20%', 0],
            rotate: [0, 0, 90],
          },
        }}
      >
        {homeData.testimonials.map((item: any) => {
          const stars = [];
          const starData = parseInt(item.star);

          for (let i = 0; i < starData; i++) {
            stars.push(
              <SvgIcon
                className="text-sys-light-primary relative z-[1]"
                fontSize="small"
                key={i}
              >
                <GradeRoundedIcon />
              </SvgIcon>,
            );
          }

          return (
            <SwiperSlide key={item.id} className="no-swiping next-slide">
              <div className="flex relative">
                {stars}
                <div className="flex absolute text-sys-light-surfaceContainer">
                  <SvgIcon fontSize="small">
                    <GradeRoundedIcon />
                  </SvgIcon>
                  <SvgIcon fontSize="small">
                    <GradeRoundedIcon />
                  </SvgIcon>
                  <SvgIcon fontSize="small">
                    <GradeRoundedIcon />
                  </SvgIcon>
                  <SvgIcon fontSize="small">
                    <GradeRoundedIcon />
                  </SvgIcon>
                  <SvgIcon fontSize="small">
                    <GradeRoundedIcon />
                  </SvgIcon>
                </div>
              </div>

              <p className="md:text-desktop-body xs:text-mobile-body">
                {item.desc}
              </p>

              <div className="flex items-center gap-3">
                <Image
                  className="md:w-[3.125rem] md:h-[3.125rem] xs:w-[2.1875rem] xs:h-[2.1875rem] object-cover rounded-full"
                  width={100}
                  height={100}
                  src={item.image}
                  alt="Reviewer Picture"
                />

                <div className="text-subtitle">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.job}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlides;
