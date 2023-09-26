'use client';

import { type About } from '@/interface';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SvgIcon from '@mui/material/SvgIcon';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Props {
  aboutData: About;
}

const Directors: React.FC<Props> = ({ aboutData }) => {
  const [isExpand, setExpand] = useState<number>(0);

  return (
    <div className="w-full flex md:flex-row xs:flex-col md:gap-6 xs:gap-2">
      {/* Director Card */}
      {aboutData.data.director_lists.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="relative rounded overflow-hidden"
            onMouseEnter={() => {
              setExpand(index);
            }}
          >
            <Image
              className={
                isExpand === index
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
                  isExpand === index
                    ? `transition-all flex flex-col md:gap-1 xs:gap-2`
                    : `transition-all md:translate-y-36 xs:translate-y-0 flex flex-col md:gap-1 xs:gap-2`
                }
              >
                <h5 className="text-desktop-title font-raleway font-bold">
                  {item.name}
                </h5>

                <div className="flex justify-between">
                  <span className="text-desktop-body-small font-inter font-normal">
                    {item.position}
                  </span>
                  <Link href={item.link}>
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
