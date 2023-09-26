'use client';
import { type Option } from '@/components/select';
import api from '@/utils/api';
import cn from '@/utils/cn';
import { useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './categorySlides.css';
interface Props {
  category: Option;
  setCategory: (category: Option) => void;
}

const Category: React.FC<Props> = ({ setCategory, category }) => {
  const { data, isLoading, isError } = useQuery(
    ['category'],
    async () => await api.get('/portfolio/category').then((res) => res.data),
  );

  const isLarge = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (data !== undefined) {
      setCategory({
        value: data[0],
        label: data[0],
      });
    }
  }, [data, setCategory]);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <>
      {isLarge ? (
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode]}
          className="category-by-slides"
        >
          {data.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <button
                className={cn(
                  'flex h-8 p-2 items-center bg-sys-light-surface text-sys-light-onSurfaceVariant border border-sys-light-outline rounded gap-s transition-all duration-300',
                  item !== undefined && category.value === item
                    ? 'bg-sys-light-primaryContainer text-sys-light-onPrimaryContainer'
                    : 'bg-sys-light-surface text-sys-light-onSurfaceVariant',
                )}
                onClick={() => {
                  setCategory({
                    value: item,
                    label: item,
                  });
                }}
              >
                <span className="text-desktop-body">{item}</span>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        data.map((item: string, index: number) => (
          <button
            key={index}
            className={cn(
              'flex md:h-8 h-fit p-2 items-center bg-sys-light-surface text-sys-light-onSurfaceVariant border border-sys-light-outline rounded gap-s transition-all duration-300',
              category !== undefined && item === category.value
                ? 'bg-sys-light-primaryContainer text-sys-light-onPrimaryContainer'
                : 'bg-sys-light-surface text-sys-light-onSurfaceVariant',
            )}
            onClick={() => {
              setCategory({
                value: item,
                label: item,
              });
            }}
          >
            <span className="text-desktop-body">{item}</span>
          </button>
        ))
      )}
    </>
  );
};

export default Category;
