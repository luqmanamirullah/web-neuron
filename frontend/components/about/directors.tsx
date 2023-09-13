'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type DirectorData = {
  id: number;
  name: string;
  role: string;
};

const data: DirectorData[] = [
  {
    id: 1,
    name: 'Sriyanto',
    role: 'Director',
  },
  {
    id: 2,
    name: 'Sriyanto',
    role: 'Director',
  },
  {
    id: 3,
    name: 'Sriyanto',
    role: 'Director',
  },
  {
    id: 4,
    name: 'Sriyanto',
    role: 'Director',
  },
  {
    id: 5,
    name: 'Sriyanto',
    role: 'Director',
  },
];

const Directors = () => {
  const [isExpand, setExpand] = useState<number>(1);

  return (
    <div className="w-full flex gap-6">
      {/* Director Card */}
      {data.map((item, index) => {
        return (
          <div
            key={index}
            className="relative rounded overflow-hidden"
            onMouseEnter={() => setExpand(item.id)}
          >
            <Image
              className={
                isExpand === item.id
                  ? `transition-all h-[400px] w-[436px] object-cover`
                  : `transition-all h-[400px] w-[200px] object-cover`
              }
              width={500}
              height={500}
              src="/assets/images/director.jpg"
              alt="Neuron Director"
            />

            {/* Card Content Container */}
            <div className="absolute bottom-0 text-white w-full h-[60%] p-6 flex flex-col gap-1 justify-end bg-gradient-to-t from-red-800 via-transparent to-transparent">
              <div
                className={
                  isExpand === item.id
                    ? `transition-all`
                    : `transition-all translate-y-28`
                }
              >
                <h5 className="text-2xl font-bold">{item.name}</h5>
                <div className="flex justify-between">
                  <span className="text-base font-normal">{item.role}</span>
                  <Image
                    className="h-[24px] object-cover text-white"
                    width={24}
                    height={24}
                    src="/assets/images/linkedin.png"
                    alt="Linkedin Logo"
                  />
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
