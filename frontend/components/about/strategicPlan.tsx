'use client';

import React, { useState } from 'react';
import StrategicPlanList from './strategicPlanList';

interface Plan {
  planTitle: string;
  content: Array<{
    title: string;
    desc: string;
  }>;
}

interface Props {
  planProps: Plan;
}

const StrategicPlan = (props: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="w-full border-[0.5px] border-[#C4C7C7] rounded px-6 py-4 flex flex-col transition-all duration-[400ms]"
    >
      {/* Plan Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-[25px] leading-[32px] font-bold text-white">
          {props.planProps.planTitle}
        </h1>

        <svg
          className={
            isActive
              ? 'transition duration-[400ms] -rotate-180'
              : 'transition duration-[400ms]'
          }
          xmlns="http://www.w3.org/2000/svg"
          height="2.5rem"
          viewBox="0 0 320 512"
          fill="#d9d9d9"
        >
          <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
        </svg>
      </div>

      <StrategicPlanList plan={props.planProps} active={isActive} />
    </div>
  );
};

export default StrategicPlan;
