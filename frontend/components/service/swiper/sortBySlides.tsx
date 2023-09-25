'use client';
import sorts, { type Sorts } from '@/data/sortby';
import cn from '@/utils/cn';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './sortBySlides.css';
interface Props {
  sortBy: Sorts | undefined;
  setSortBy: (sort: Sorts) => void;
}

const SortBy: React.FC<Props> = ({ setSortBy, sortBy }) => {
  const isLarge = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isLarge ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="sort-by-slides"
        >
          {sorts.map((sort, index) => (
            <SwiperSlide key={index}>
              <button
                className={cn(
                  'flex h-8 p-2 items-center bg-sys-light-surface text-sys-light-onSurfaceVariant border border-sys-light-outline rounded gap-s transition-all duration-300',
                  sortBy !== undefined && sortBy.id === sort.id
                    ? 'bg-sys-light-primaryContainer text-sys-light-onPrimaryContainer'
                    : 'bg-sys-light-surface text-sys-light-onSurfaceVariant',
                )}
                onClick={() => {
                  setSortBy(sort);
                }}
              >
                <span className="text-desktop-body">{sort.name}</span>
                <span className="text-subtitle">{sort.order}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        sorts.map((sort, index) => (
          <button
            key={index}
            className={cn(
              'flex md:h-8 h-fit p-2 items-center bg-sys-light-surface text-sys-light-onSurfaceVariant border border-sys-light-outline rounded gap-s transition-all duration-300',
              sortBy !== undefined && sortBy.id === sort.id
                ? 'bg-sys-light-primaryContainer text-sys-light-onPrimaryContainer'
                : 'bg-sys-light-surface text-sys-light-onSurfaceVariant',
            )}
            onClick={() => {
              setSortBy(sort);
            }}
          >
            <span className="text-desktop-body">{sort.name}</span>
            <span className="text-subtitle">{sort.order}</span>
          </button>
        ))
      )}
    </>
  );
};

export default SortBy;
