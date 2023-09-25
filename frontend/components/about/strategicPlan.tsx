'use client';

import React, { useState } from 'react';
import { useSpring, config } from '@react-spring/web';
import StrategicPlanList from './strategicPlanList';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import SvgIcon from '@mui/material/SvgIcon';
import { planData } from '@/data/strategicPlan';
import { About } from '@/interface';

interface Props {
  aboutData: About;
}

const StrategicPlan = ({ aboutData }: Props) => {
  const [isActive, setIsActive] = useState<number>(-1);

  const toggleActive = (id: number) => {
    setIsActive(isActive === id ? -1 : id);
  };

  return (
    <div className="flex flex-col gap-4">
      {aboutData.data.management_strategies.map((item: any, index: number) => {
        const isItemActive = isActive === index;

        const contentSpring = useSpring({
          maxHeight: isItemActive ? '1000px' : '0px',
          opacity: isItemActive ? 1 : 0,
          config: { ...config.gentle, duration: 200 },
        });

        return (
          <div className="w-full border-[0.5px] border-sys-dark-onSurface rounded md:px-6 xs:px-4 md:py-4 xs:py-2 flex flex-col transition-all duration-[200ms]">
            {/* Plan Title */}
            <div
              onClick={() => toggleActive(index)}
              className="flex items-center justify-between cursor-pointer"
            >
              <h1 className="md:text-desktop-headline xs:text-mobile-headline font-bold text-white">
                {item.title}
              </h1>

              <SvgIcon
                fontSize="large"
                className={
                  isActive === index
                    ? 'text-white transition duration-[600ms] -rotate-180'
                    : 'text-white transition duration-[600ms]'
                }
              >
                <ArrowDropDownRounded />
              </SvgIcon>
            </div>

            <StrategicPlanList
              strategyIndex={index}
              springConfig={contentSpring}
              strategyData={item}
              active={isActive}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StrategicPlan;
