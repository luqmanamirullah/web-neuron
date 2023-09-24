'use client';
import { useMediaQuery } from '@mui/material';
import React from 'react';
import Select, { type StylesConfig } from 'react-select';

interface Props {
  options: Option[];
  handleChange: any;
  defaultValue: Option;
  name?: string;
  isDisabled?: boolean;
}

export interface Option {
  readonly value: number | string;
  readonly label: number | string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

const NeuronSelect: React.FC<Props> = ({
  options,
  handleChange,
  defaultValue,
  name = 'select',
  isDisabled = false,
}) => {
  const isLarge = useMediaQuery('(min-width: 1024px)');
  const selectStyles: StylesConfig<Option, true> = {
    control: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: 'white',
      border: isFocused ? '1px solid #C00100' : '1px solid #d4d4d4',
      boxShadow: isFocused ? '0px 0px 1px #C00100' : 'none',
      '&:hover': {
        boxShadow: '0px 0px 1px #ff8b67',
      },
      borderRadius: '4px',
      fontSize: isLarge ? '1rem' : '0.875rem',
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
          ? '#FFDAD4'
          : isFocused
          ? '#FFDAD4'
          : undefined,
        color: isDisabled ? '#ccc' : isSelected ? '#410000' : 'black',
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? '#C00100'
              : 'white/20%'
            : undefined,
          outlineColor: !isDisabled
            ? isSelected
              ? '#C00100'
              : 'white/20%'
            : undefined,
        },
      };
    },
  };
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      defaultValue={defaultValue}
      isSearchable={true}
      name={name}
      isDisabled={isDisabled}
      options={options}
      styles={selectStyles}
      onChange={handleChange}
    />
  );
};

export default NeuronSelect;
