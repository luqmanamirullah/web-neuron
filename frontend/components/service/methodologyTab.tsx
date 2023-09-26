'use client';
import Image from 'next/image';

import { type Methodology } from '@/interface';
import { useState } from 'react';
import NeuronTab from '../tabs/tab';
import CustomTabPanel from '../tabs/tabPane';

interface Props {
  methodologies: Methodology[];
}

const MethodologyTabs: React.FC<Props> = ({ methodologies }) => {
  const [value, setValue] = useState<number>(0);
  const handleChangeService: any = (
    e: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  const tabs = methodologies.map((method) => method.category_name);

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
          key={method.category_name}
          className="mt-8 h-fit w-full inlin-flex justify-center items-center"
        >
          <Image
            src={method.flow_image}
            alt={method.category_title}
            width={100}
            height={100}
            className=" lg:h-screen lg:w-auto w-full h-auto mx-auto "
          />
        </CustomTabPanel>
      ))}
    </NeuronTab>
  );
};

export default MethodologyTabs;
