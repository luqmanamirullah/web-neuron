'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import { directorsData } from '@/data/directors';

const Directors = () => {
  const [isExpand, setExpand] = useState<number>(1);

  return (
    <div className="w-full flex md:flex-row xs:flex-col md:gap-6 xs:gap-2">
      {/* Director Card */}
      {directorsData.map((item, index) => {
        return (
          <div
            key={index}
            className="relative rounded overflow-hidden"
            onMouseEnter={() => setExpand(item.id)}
          >
            <Image
              className={
                isExpand === item.id
                  ? `transition-all md:h-[25rem] xs:h-[19.75rem] md:w-[27.25rem] xs:w-full object-cover`
                  : `transition-all md:h-[25rem] xs:h-[19.75rem] md:w-[12.5rem] xs:w-full object-cover`
              }
              width={500}
              height={500}
              src={item.image}
              alt="Neuron Director"
            />

            {/* Card Content Container */}
            <div className="absolute bottom-0 text-white w-full h-[70%] p-6 flex flex-col gap-1 justify-end bg-gradient-to-t from-red-800 via-transparent to-transparent">
              <div
                className={
                  isExpand === item.id
                    ? `transition-all flex flex-col md:gap-1 xs:gap-2`
                    : `transition-all md:translate-y-28 xs:translate-y-0 flex flex-col md:gap-1 xs:gap-2`
                }
              >
                <h5 className="text-desktop-title font-raleway font-bold">
                  {item.name}
                </h5>

                <div className="flex justify-between">
                  <span className="text-desktop-body-small font-inter font-normal">
                    {item.role}
                  </span>
                  <Link href="#">
                    <SvgIcon>
                      <LinkedInIcon />
                    </SvgIcon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Directors;
