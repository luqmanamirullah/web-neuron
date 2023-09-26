'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './articleSlides.css';

import Button from '@/components/button';
import { type Article } from '@/interface';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { SvgIcon, useMediaQuery } from '@mui/material';
import { format } from 'date-fns';
import Image from 'next/image';
import { FreeMode } from 'swiper/modules';

interface Props {
  latestArticle: Article[];
}

const ArticleSlides: React.FC<Props> = ({ latestArticle }) => {
  const largeScreen = useMediaQuery('(min-width:1000px)');
  const mediumScreen = useMediaQuery('(min-width:768px)');

  return (
    <div className="flex flex-col items-center">
      <Swiper
        spaceBetween={24}
        slidesPerView={mediumScreen ? 3 : 'auto'}
        freeMode={true}
        modules={[FreeMode]}
        className="article-slides !px-4"
      >
        {latestArticle.map((item, index) => {
          if (index < 6) {
            return (
              <SwiperSlide
                key={index}
                className="!flex !flex-col lg:!gap-8 xs:!gap-4 !relative group "
              >
                <Image
                  className="w-full rounded-[0.3125rem]"
                  width={500}
                  height={500}
                  alt={item.title}
                  src={item.image}
                />

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h4 className="lg:text-desktop-title xs:text-mobile-title line-clamp-2 font-bold text-sys-light-onSurface transition-colors group-hover:text-sys-light-primary">
                    {item.title}
                  </h4>
                  <p className="lg:text-mobile-body xs:text-mobile-body line-clamp-3 text-sys-light-onSurfaceVariant transition-colors group-hover:text-sys-light-primary">
                    {item.description}
                  </p>
                </div>

                {/* Button */}
                <div className="lg:absolute lg:top-[1rem] lg:-right-[1rem]">
                  {largeScreen ? (
                    <button className="text-white bg-sys-light-primary p-4 transition-all xs:hidden lg:block translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      <SvgIcon fontSize="large">
                        <ArrowOutwardRounded />
                      </SvgIcon>
                    </button>
                  ) : (
                    <Button
                      buttonStyle="filled"
                      label="Read More"
                      size="sm"
                      withIcon={true}
                      icon={<ArrowOutwardRounded />}
                    />
                  )}
                </div>

                {/* Divider & Date */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline">
                    <span className="border-[1px] block w-full h-fit flex-1 border-[rgba(116,119,127,0.5)] transition-colors group-hover:border-sys-light-primary"></span>
                    <p className="lg:text-desktop-label xs:text-mobile-label text-sys-light-onSurfaceVariant ml-6 transition-colors group-hover:text-sys-light-primary">
                      {/* format data into like 09 Sep 2023 */}
                      {item.created_at === item.updated_at
                        ? format(new Date(item.created_at), 'dd MMM yyyy')
                        : format(new Date(item.updated_at), 'dd MMM yyyy')}
                    </p>
                  </div>
                  <span className="border-[1px] block w-full border-[rgba(116,119,127,0.5)] transition-colors group-hover:border-sys-light-primary"></span>
                </div>
              </SwiperSlide>
            );
          }
          return null;
        })}
      </Swiper>
      <Button
        className="lg:hidden"
        buttonStyle="text"
        label="See More"
        size="sm"
        withIcon={true}
        icon={<ArrowOutwardRounded />}
      />
    </div>
  );
};

export default ArticleSlides;
