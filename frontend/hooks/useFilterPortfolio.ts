import { type Option } from '@/components/select';
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
  sortBy: Option;
  setSortBy: (sort: Option) => void;
  setSortByOptions: (options: Option[]) => void;
  sortByOptions: Option[];
  category: string | undefined;
  setCategory: (category: string | undefined) => void;
}

function useFilterPortfolio(
  initialYear: number,
  lastYear: number,
): FilterPortfolio {
  // State
  const [page, setPage] = useState<number>(1);
  const [startYear, setStartYear] = useState<number | string>();
  const [endYear, setEndYear] = useState<number | string>();

  const [startRange, setStartRange] = useState<number[]>([]);
  const [endRange, setEndRange] = useState<number[]>([]);
  const [category, setCategory] = useState<string>();
  const [startOptions, setStartOptions] = useState<Option[]>([
    { value: 2020, label: 2020 },
  ]);
  const [endOptions, setEndOptions] = useState<Option[]>([]);
  const [sortBy, setSortBy] = useState<Option>({
    value: 'desc',
    label: 'Date',
  });
  const [sortByOptions, setSortByOptions] = useState<Option[]>([
    { value: 'asc', label: 'Date' },
    { value: 'desc', label: 'Date' },
    { value: 'asc', label: 'Name' },
    { value: 'desc', label: 'Name' },
  ]);

  useEffect(() => {
    setStartRange(generateYears(initialYear, lastYear));
  }, [initialYear, lastYear]);

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
    sortByOptions,
    setSortByOptions,
    sortBy,
    setSortBy,
    category,
    setCategory,
  };
}

export default useFilterPortfolio;
