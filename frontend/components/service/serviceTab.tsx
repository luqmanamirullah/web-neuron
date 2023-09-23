'use client';
import services from '@/data/services';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import '../custom.mui.css';
import MaskTechCard from '../svg/maskTechCard';
import SwipeCard from './swipeCard';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import NeuronTab from '../tabs/tab';
import CustomTabPanel from '../tabs/tabPane';

const ServiceTabs: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const handleChangeService: any = (
    e: React.SyntheticEvent,
    newValue: number,
  ) => {
    setValue(newValue);
  };
  const tabs = services.map((service) => service.name);
  const serviceParams = useSearchParams();
  const serviceName = serviceParams.get('name');
  useEffect(() => {
    if (serviceName !== undefined && serviceName !== null) {
      console.log(serviceName);
      const serviceIndex = services.findIndex(
        (service) => service.name === serviceName,
      );
      console.log(serviceIndex);
      if (serviceIndex !== -1) {
        setValue(serviceIndex);
      }
    }
  }, [serviceName]);
  return (
    <NeuronTab
      value={value}
      handleChange={handleChangeService}
      id="service"
      tabs={tabs}
    >
      {services.map((service, index) => (
        <CustomTabPanel
          id="service"
          index={index}
          value={value}
          key={service.id}
          className="lg:w-full lg:h-screen "
        >
          <div className="lg:w-full lg:h-full py-4 flex md:flex-row flex-col-reverse  gap-s">
            {/* Tech Line */}
            <Image
              src={'/assets/images/tech_line_4.png'}
              alt="tech_line_4"
              width={400}
              height={400}
              className="lg:h-[34rem] lg:w-auto lg:relative top-0 lg:block hidden "
            />

            {/* Service Content */}
            <div className="lg:mt-8 md:mt-4 mt-2 lg:w-1/2 md:w-3/5  flex flex-col md:gap-s gap-2 items-start justify-start text-black">
              <h1 className="lg:text-desktop-headline md:text-desktop-title sm:text-mobile-headline text-mobile-title font-bold">
                {service.name}
              </h1>
              <p className="lg:text-desktop-body text-mobile-body">
                {service.desc}
              </p>

              <div className="lg:mt-8 md:mt-4 mt-2 sm:grid sm:grid-cols-2 w-full flex flex-col md:gap-md gap-s items-start justify-start">
                <div className="md:col-span-1 flex flex-col w-full gap-s">
                  <div className="sm:col-span-1 flex  items-center gap-s">
                    <div className="w-2 h-2 bg-core-primary"></div>
                    <h1 className="lg:text-desktop-title md:text-desktop-body text-mobile-title sm:font-bold  font-semibold">
                      Technology We Use
                    </h1>
                  </div>
                  <div className="flex flex-wrap gap-s">
                    {service.technologies.length > 8
                      ? service.technologies
                          .slice(0, 8)
                          .map((tech, i) => (
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={40}
                              height={40}
                              key={index}
                            />
                          ))
                      : service.technologies.map((tech, i) => (
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            width={40}
                            height={40}
                            key={index}
                          />
                        ))}
                    {service.technologies.length > 8 ? (
                      <Link
                        href={'/service#techStack'}
                        className="w-10 h-10 inline-flex justify-center items-center border border-sys-light-outline rounded"
                      >
                        <SvgIcon className="text-[1.5rem] text-core-primary">
                          <MoreHorizIcon />
                        </SvgIcon>
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="sm:col-span-1 w-full flex flex-col gap-s">
                  <div className="flex items-center  gap-s">
                    <div className="w-2 h-2 bg-core-primary"></div>
                    <h1 className="lg:text-desktop-title md:text-desktop-body sm:font-bold font-semibold">
                      Key Features
                    </h1>
                  </div>

                  <SwipeCard item={service.keyFeature} index={service.id} />
                </div>
              </div>
            </div>

            {/* Service Illustration */}
            <MaskTechCard
              imageUrl={service.img}
              className="lg:mt-8 md:mt-4 mt-2 md:w-2/5 lg:max-h-[26rem] lg:max-w-[30rem] md:max-h-96 md:h-auto   w-full h-auto rounded"
            />
          </div>
        </CustomTabPanel>
      ))}
    </NeuronTab>
  );
};

export default ServiceTabs;
