'use client';

import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import SvgIcon from '@mui/material/SvgIcon';
import { useState } from 'react';
import StrategicPlanList from './strategicPlanList';

interface Props {
  aboutData: any;
}

const StrategicPlan: React.FC<Props> = ({ aboutData }) => {
  const [isActive, setIsActive] = useState<number>(0);

  return (
    <div className="flex flex-col gap-4">
      {aboutData.management_strategies.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="w-full border-[0.5px] border-sys-dark-onSurface rounded md:px-6 xs:px-4 md:py-4 xs:py-2 flex flex-col transition-all duration-[400ms]"
          >
            {/* Plan Title */}
            <div
              onClick={() => {
                setIsActive(item.id);
              }}
              className="flex items-center justify-between cursor-pointer"
            >
              <h1 className="md:text-desktop-headline xs:text-mobile-headline font-bold text-white">
                {item.title}
              </h1>

              <SvgIcon
                fontSize="large"
                className={
                  isActive === item.id
                    ? 'text-white transition duration-[600ms] -rotate-180'
                    : 'text-white transition duration-[600ms]'
                }
              >
                <ArrowDropDownRounded />
              </SvgIcon>
            </div>

            <StrategicPlanList strategyData={item} active={isActive} />
          </div>
        );
      })}
    </div>
  );
};

export default StrategicPlan;
