import React from 'react';
import ServiceTabs from '../serviceTab';

interface Props {
  subtitle: string;
  title: string;
}

const Service: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section id="services" className="lg:p-10 md:p-8 p-4 text-black ">
      <div className="flex flex-col items-start">
        <h2 className="md:text-desktop-title text-mobile-body font-medium text-core-primary">
          {subtitle}
        </h2>
        <h1 className="md:text-desktop-headline text-mobile-title font-bold ">
          {title}
        </h1>
      </div>
      {/* Tabs */}
      <div className="w-full 2xl:max-h-[800px] md:min-h-screen  h-fit flex flex-col items-start justify-start gap-lg">
        {/* Tab Nav */}
        <ServiceTabs />
      </div>
    </section>
  );
};

export default Service;
