'use client';
import { type Portfolio } from '@/data/portfolio';
import cn from '@/utils/cn';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { SvgIcon } from '@mui/material';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props extends Portfolio {
  className: string;
}

const PortfolioCard: React.FC<Props> = ({
  name,
  desc,
  img,
  id,
  clientName,
  link,
  type,
  createdAt,
  className,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      id={`${id}`}
      className={cn(
        'relative flex flex-col items-start md:gap-s gap-2 flex-shrink-0 md:p-6 p-4 rounded border border-sys-light-outline w-full bg-white cursor-pointer',
        className,
      )}
      onMouseEnter={() => {
        setHover((hover) => !hover);
      }}
      onMouseLeave={() => {
        setHover((hover) => !hover);
      }}
    >
      <div
        className={cn(
          'absolute top-8 md:-right-8 -right-2 inline-flex sm:p-4 p-2 justify-center items-center bg-core-primary z-20 transition-all duration-300 ',
          hover ? 'opacity-100 visible top-8' : 'opacity-0 invisible top-16',
        )}
      >
        <SvgIcon className="md:text-[2.5rem] text-[1rem] text-sys-light-onPrimary">
          <ArrowForwardRoundedIcon />
        </SvgIcon>
      </div>
      <Image
        src={img}
        alt={name}
        width={300}
        height={300}
        className="rounded w-full md:h-40 h-32 object-cover bg-center bg-no-repeat"
      />
      <div className="flex flex-col items-start gap-s self-stretch">
        {/* Type */}
        <div className="w-full inline-flex items-center justify-end">
          <div className="inline-flex py-2 px-4 rounded bg-core-primary">
            <span className="text-mobile-label text-sys-light-onPrimary">
              {type}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col items-start gap-1">
          <h1 className="md:text-desktop-title text-mobile-title font-bold">
            {name}
          </h1>
          <Link href={link}>
            <span className="md:text-hyperlink ">{clientName}</span>
          </Link>
        </div>

        {/* Desc */}
        <p className="md:text-desktop-body text-mobile-body">{desc}</p>

        <div className="w-full inline-flex items-center justify-end ">
          <p className="text-subtitle text-end">
            {format(new Date(createdAt), 'dd MMM yyyy')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
