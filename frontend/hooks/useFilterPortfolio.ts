import { type Option } from '@/components/select';
import { type Sorts } from '@/data/sortby';
import generateSelectOptions from '@/utils/generateSelectOptions';
import generateYears from '@/utils/generateYears';
import { useEffect, useState } from 'react';

interface FilterPortfolio {
  page: number;
  setPage: (page: number) => void;
  startYear: number | string | undefined;
  setStartYear: (year: number | string | undefined) => void;
  endYear: number | string | undefined;
  setEndYear: (year: number | string | undefined) => void;
  endRange: number[];
  setEndRange: (range: number[]) => void;
  startOptions: Option[];
  setStartOptions: (options: Option[]) => void;
  endOptions: Option[];
  setEndOptions: (options: Option[]) => void;
  sortBy: Sorts | undefined;
  setSortBy: (sort: Sorts | undefined) => void;
}

function useFilterPortfolio(initialYear: number): FilterPortfolio {
  // State
  const [page, setPage] = useState<number>(1);
  const [startYear, setStartYear] = useState<number | string>();
  const [endYear, setEndYear] = useState<number | string>();

  const [startRange, setStartRange] = useState<number[]>([]);
  const [endRange, setEndRange] = useState<number[]>([]);

  const [startOptions, setStartOptions] = useState<Option[]>([
    { value: 2020, label: 2020 },
  ]);
  const [endOptions, setEndOptions] = useState<Option[]>([]);
  const [sortBy, setSortBy] = useState<Sorts>();

  useEffect(() => {
    setStartRange(generateYears(initialYear));
  }, [initialYear]);

  useEffect(() => {
    setStartOptions(generateSelectOptions(startRange));
  }, [startRange]);

  useEffect(() => {
    setEndOptions(generateSelectOptions(endRange));
  }, [endRange]);

  return {
    page,
    setPage,
    startYear,
    setStartYear,
    endYear,
    setEndYear,
    startOptions,
    setStartOptions,
    endOptions,
    setEndOptions,
    endRange,
    setEndRange,
    sortBy,
    setSortBy,
  };
}

export default useFilterPortfolio;
