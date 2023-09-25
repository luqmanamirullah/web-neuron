'use client';
import Heading from '@/components/heading';
import { all } from '@/data/portfolio';
import useFilterPortfolio from '@/hooks/useFilterPortfolio';
import generateSelectOptions from '@/utils/generateSelectOptions';
import generateYears from '@/utils/generateYears';
import { Pagination, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import Filter from '../filter';
import PortfolioCard from '../portfolioCard';
// interface Props {}

interface Option {
  readonly value: number | string;
  readonly label: number | string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const Portfolio: React.FC = () => {
  // data
  const initialYear = 2008;
  const { pages, currPage, data } = all;

  // Ref
  const portfolioRef = useRef<HTMLDivElement>(null);

  // filter hooks
  const {
    startYear,
    endYear,
    endRange,
    startOptions,
    endOptions,
    sortBy,
    setStartYear,
    setEndOptions,
    setEndRange,
    setPage,
    page,
    setEndYear,
    setSortBy,
  } = useFilterPortfolio(initialYear);

  // Method
  const handleFromChange: any = (change: Option) => {
    setStartYear(change.value);
    setEndRange(generateYears(parseInt(change.value.toString())));
    setEndOptions(generateSelectOptions(endRange));
  };

  const handleUntilChange: any = (change: Option) => {
    setEndYear(change.value);
  };

  const handleDeleteFilter: any = () => {
    setStartYear(undefined);
    setEndYear(undefined);
    setSortBy(undefined);
  };

  // Hooks
  const isMedium = useMediaQuery('(min-width: 768px)');

  return (
    <section className="lg:p-10 md:p-8 p-4 text-black transition-all duration-300">
      <Heading
        darkBg={false}
        heading={'The Best Gives The Best'}
        subheading={'Our Work'}
      />
      <Filter
        currPage={currPage}
        pages={pages}
        endOptions={endOptions}
        startOptions={startOptions}
        setSortBy={setSortBy}
        handleFromChange={handleFromChange}
        handleUntilChange={handleUntilChange}
        handleDeleteFilter={handleDeleteFilter}
        startYear={startYear}
        endYear={endYear}
        sortBy={sortBy}
        endStickyRef={portfolioRef}
      />

      {/* Portfolio */}
      <div
        ref={portfolioRef}
        className="mt-8 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-md lg:px-0 sm:px-10 px-2 transition-all duration-300"
      >
        {/* Portfolio Item */}
        {data.map((portfolio, index) => (
          <PortfolioCard
            key={index}
            className="col-span-1"
            name={portfolio.name}
            clientName={portfolio.clientName}
            desc={portfolio.desc}
            id={portfolio.id}
            img={portfolio.img}
            link={portfolio.link}
            type={portfolio.type}
            createdAt={portfolio.createdAt}
          />
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-8 inline-flex items-center justify-center w-full ">
        <Pagination
          count={10}
          page={page}
          variant="outlined"
          size={isMedium ? 'large' : 'small'}
          shape="rounded"
          onChange={(e, page) => {
            setPage(page);
          }}
        />
      </div>
    </section>
  );
};

export default Portfolio;
