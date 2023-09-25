'use client';
import Image from 'next/image';

import methodologies from '@/data/methodologies';
import { useState } from 'react';
import NeuronTab from '../tabs/tab';
import CustomTabPanel from '../tabs/tabPane';

const MethodologyTabs: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleChangeService: any = (
    e: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  const tabs = methodologies.map((method) => method.name);

  return (
    <NeuronTab
      value={value}
      handleChange={handleChangeService}
      id="methodology"
      tabs={tabs}
      center={true}
    >
      {methodologies.map((method, index) => (
        <CustomTabPanel
          id="methodology"
          index={index}
          value={value}
          key={method.name}
          className="mt-8 h-fit w-full"
        >
          <Image
            src={method.method}
            alt={method.name}
            width={100}
            height={100}
            className="h-auto w-full "
          />
        </CustomTabPanel>
      ))}
    </NeuronTab>
  );
};

export default MethodologyTabs;
