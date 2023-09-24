import React from 'react';
import MethodologyTabs from '../methodologyTab';

interface Props {
  subtitle: string;
  title: string;
}

const Methodology: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section id="methodologies" className="lg:p-10 md:p-8 p-4 text-black  ">
      <div className="flex flex-col justify-center items-center text-center md:w-4/5 w-full mx-auto">
        <h1 className=" md:text-desktop-title text-mobile-body  font-medium  text-core-primary  ">
          {subtitle}
        </h1>
        <h2 className="md:text-desktop-headline text-mobile-title font-bold ">
          {title}
        </h2>
      </div>
      {/* Tabs */}
      <div className="w-full xl:max-h-[800px] lg:min-h-screen   h-fit flex flex-col items-center justify-center gap-lg">
        {/* Tab Nav */}
        <MethodologyTabs />
      </div>
    </section>
  );
};

export default Methodology;
