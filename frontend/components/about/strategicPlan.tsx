'use client';

import { type About } from '@/interface';
import { useState } from 'react';
import Plan from './plan';

interface Props {
  aboutData: About;
}

const StrategicPlan: React.FC<Props> = ({ aboutData }) => {
  const [isActive, setIsActive] = useState<number>(-1);

  const toggleActive: any = (id: number) => {
    setIsActive(isActive === id ? -1 : id);
  };

  return (
    <div className="flex flex-col gap-4">
      {aboutData.data.management_strategies.map((item: any, index: number) => (
        <Plan
          index={index}
          isActive={isActive}
          item={item}
          key={index}
          toggleActive={toggleActive}
        />
      ))}
    </div>
  );
};

export default StrategicPlan;
