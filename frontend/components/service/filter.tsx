'use client';
import Button from '@/components/button';
import { type Sorts } from '@/data/sortby';
import useSticky from '@/hooks/useSticky';
import cn from '@/utils/cn';
import FilterAltOffRoundedIcon from '@mui/icons-material/FilterAltOffRounded';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import { SvgIcon } from '@mui/material';
import React, { useRef, useState } from 'react';
import NeuronSelect, { type Option } from '../select';
import Category from './swiper/categorySlides';

interface Props {
  pages: number;
  currPage: number;
  startYear: number | string | undefined;
  endYear: number | string | undefined;
  sortBy: Sorts | undefined;
  setSortBy: (sort: Sorts) => void;
  handleFromChange: (e: any) => void;
  handleUntilChange: (e: any) => void;
  handleDeleteFilter: () => void;
  handleSortByChange: (e: any) => void;
  sortByOptions: Option[];
  startOptions: Option[];
  endOptions: Option[];
  endStickyRef: React.RefObject<HTMLDivElement>;
  category: Option;
  setCategory: (category: Option) => void;
}

const Filter: React.FC<Props> = ({
  currPage,
  pages,
  startYear,
  startOptions,
  endYear,
  endOptions,
  handleFromChange,
  handleUntilChange,
  sortBy,
  sortByOptions,
  handleSortByChange,
  setSortBy,
  handleDeleteFilter,
  endStickyRef,
  category,
  setCategory,
}) => {
  // state
  const [mobileFilterActive, setMobileFilterActive] = useState<boolean>(false);

  // sticky effect
  const filterContainer = useRef<HTMLDivElement>(null);

  const isSticky = useSticky(filterContainer, endStickyRef);

  return (
    <>
      {/* Filter Bar */}
      <div ref={filterContainer}>
        <div
          className={cn(
            'pt-8  flex items-center w-full md:justify-start justify-between gap-md transition-all duration-500 z-[501] bg-white ',
            isSticky
              ? 'max-w-[1440px] 2xl:left-1/2 2xl:-translate-x-1/2 fixed lg:top-24 top-20  left-0 lg:p-10 md:p-8 border-b border-sys-light-outline  py-4 px-2 mb-10'
              : ' relative mb-0',
          )}
        >
          {/* Shown */}
          <p className="text-subtitle min-w-[4rem]">
            Page {currPage}/{pages}
          </p>

          {/* Date Range */}
          <div className="white-space-nowrap md:flex hidden items-center gap-s">
            <h1 className="whitespace-nowrap text-mobile-title lg:text-desktop-title font-bold">
              Date Range
            </h1>
            <div className="flex gap-2 min-w-[12rem] ">
              <NeuronSelect
                handleChange={handleFromChange}
                defaultValue={{ value: '', label: 'From' }}
                options={[...startOptions]}
                name="from"
              />
              <NeuronSelect
                handleChange={handleUntilChange}
                defaultValue={{ value: '', label: 'Until' }}
                options={[...endOptions]}
                name="until"
                isDisabled={startYear === undefined}
              />
            </div>
          </div>
          {/* Sort By */}
          <div className="white-space-nowrap md:flex hidden items-center gap-s">
            <h1 className="whitespace-nowrap text-mobile-title lg:text-desktop-title font-bold">
              Sort By
            </h1>
            <div className="flex gap-2 min-w-[6rem] ">
              <NeuronSelect
                handleChange={handleSortByChange}
                defaultValue={{ value: '', label: 'Date Asc' }}
                options={[...sortByOptions]}
                name="sortBy"
              />
            </div>
          </div>
          {/* Category */}
          <div className="md:flex hidden gap-s items-center overflow-x-hidden ">
            <h1 className="min-w-fit whitespace-nowrap text-mobile-title lg:text-desktop-title font-bold">
              Sort By
            </h1>
            <Category category={category} setCategory={setCategory} />
          </div>
          <div
            className="inline-flex md:hidden items-center gap-s"
            onClick={() => {
              setMobileFilterActive(true);
            }}
          >
            <h1 className="text-mobile-title font-bold">
              {startYear !== undefined ||
              endYear !== undefined ||
              sortBy !== undefined
                ? 'Active'
                : 'Filter'}
            </h1>
            <SvgIcon fontSize="medium" className="text-black ">
              <FilterAltRoundedIcon />
            </SvgIcon>
          </div>
        </div>
        {/* Devider */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="w-full h-[1px] bg-sys-light-outline"></div>
          <div className="w-4/5 h-[1px] bg-sys-light-outline"></div>
        </div>
      </div>

      {/* Filter Mobile */}
      <div
        className={cn(
          '-translate-x-full invisible fixed top-0 left-0 w-full h-screen bg-white z-[503] transition-all duration-300',
          mobileFilterActive
            ? 'visible translate-x-0'
            : '-translate-x-full invisible',
        )}
      >
        <div className="inline-flex w-full border border-sys-light-outline items-center justify-between py-4 px-4">
          <h1 className="text-mobile-headline font-bold">Filter</h1>
          <button
            onClick={() => {
              setMobileFilterActive(false);
              handleDeleteFilter();
            }}
          >
            <SvgIcon fontSize="medium" className="text-core-primary">
              <FilterAltOffRoundedIcon />
            </SvgIcon>
          </button>
        </div>
        <div className="flex flex-col items-start justify-between  gap-md ">
          <div className="flex flex-col items-start justify-start gap-4 mt-10 px-4 relative">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-2 ">
                <h1 className="text-mobile-title font-semibold">Date Range</h1>
                <div className="flex flex-col sm:flex-row sm:gap-lg gap-2  ">
                  <NeuronSelect
                    handleChange={handleFromChange}
                    defaultValue={{ value: '', label: 'From Year' }}
                    options={[...startOptions]}
                    name="from"
                  />
                  <NeuronSelect
                    handleChange={handleUntilChange}
                    defaultValue={{ value: '', label: 'Until Year' }}
                    isDisabled={startYear === undefined}
                    options={[...endOptions]}
                    name="until"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h1 className="text-mobile-title font-semibold">Category</h1>
              <Category category={category} setCategory={setCategory} />
            </div>
          </div>
          <div className="flex items-center justify-center w-full absolute bottom-0 left-0 mb-10">
            <Button
              size="md"
              buttonStyle="filled"
              label="Apply Filter"
              withIcon
              icon={<FilterAltRoundedIcon />}
              onClick={(e) => {
                setMobileFilterActive(false);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
