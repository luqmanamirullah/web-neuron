import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import { SvgIcon } from '@mui/material';
import { config, useSpring } from '@react-spring/web';
import React from 'react';
import StrategicPlanList from './strategicPlanList';

interface Props {
  item: any;
  isActive: number;
  index: number;
  toggleActive: (id: number) => void;
}

const Plan: React.FC<Props> = ({ item, isActive, index, toggleActive }) => {
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
        onClick={() => {
          toggleActive(index);
        }}
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
};

export default Plan;
