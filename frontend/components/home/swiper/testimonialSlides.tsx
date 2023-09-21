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

const TestimonialSlides = () => {
  return (
    <div className="relative lg:h-fit xs:h-auto lg:w-fit xs:w-full">
      <Swiper
        spaceBetween={40}
        autoHeight={true}
        navigation={{
          nextEl: '.next-slide',
        }}
        initialSlide={1}
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
        {testimonials.map((item) => {
          return (
            <SwiperSlide className="no-swiping next-slide">
              <div className="flex text-sys-light-primary">
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

              <p className="md:text-desktop-body xs:text-mobile-body">
                “ {item.quote} ”
              </p>

              <div className="flex items-center gap-3">
                <Image
                  className="md:w-[3.125rem] md:h-[3.125rem] xs:w-[2.1875rem] xs:h-[2.1875rem] object-cover rounded-full"
                  width={100}
                  height={100}
                  src={item.imageUrl}
                  alt="Reviewer Picture"
                />

                <div className="text-subtitle">
                  <p className="font-bold">{item.name}</p>
                  <p>{item.role}</p>
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
