'use client';
import { type Technologies } from '@/interface';
import Image from 'next/image';
import { useState } from 'react';
import NeuronTab from '../tabs/tab';
import CustomTabPanel from '../tabs/tabPane';

interface Props {
  technologies: Technologies[];
}
const TechnologyTabs: React.FC<Props> = ({ technologies }) => {
  const [value, setValue] = useState<number>(0);
  const handleChangeService: any = (
    e: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  const tabs = technologies.map((tech) => tech.category);

  return (
    <NeuronTab
      value={value}
      handleChange={handleChangeService}
      id="techStack"
      tabs={tabs}
      center={true}
    >
      {technologies.map((tech, index) => (
        <CustomTabPanel
          id="techStack"
          index={index}
          value={value}
          key={tech.category}
          className="mt-8 h-fit w-full"
        >
          <div className="flex flex-wrap items-start justify-center">
            {tech.technologies.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="md:px-8 py-2 px-4 sm:w-1/6 w-1/4 flex flex-col gap-s items-center"
              >
                {item.icon !== null && item.icon !== undefined ? (
                  <Image
                    src={item.icon}
                    alt={item.name ?? 'out techstack'}
                    width={40}
                    height={40}
                    className="md:w-10 md:h-10 w-8 h-8"
                  />
                ) : null}
                <span className="md:text-desktop-body text-mobile-body text-center">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </CustomTabPanel>
      ))}
    </NeuronTab>
  );
};

export default TechnologyTabs;
