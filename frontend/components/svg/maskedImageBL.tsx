import React from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  className: string;
}

const MaskedImageBL: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={twMerge('w-[6.0625rem] h-[3.40625rem]', className)}
      width="98"
      height="55"
      viewBox="0 0 98 55"
      fill="none"
    >
      <path d="M1 0V29.5L43 54.5H98" stroke="#74777F" />
    </svg>
  );
};

export default MaskedImageBL;
