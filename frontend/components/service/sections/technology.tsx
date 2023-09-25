import React from 'react';
import TechnologyTabs from '../technologyTab';

interface Props {
  subtitle: string;
  title: string;
}

const Technology: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section id="techStack" className="lg:p-10 md:p-8 p-4 text-black  ">
      <div className="flex flex-col justify-center items-center text-center md:w-4/5 w-full mx-auto">
        <h1 className="md:text-desktop-headline text-mobile-title  font-bold text-core-primary ">
          {subtitle}
        </h1>
        <h2 className="md:text-desktop-body text-mobile-body  font-medium  ">
          {title}
        </h2>
      </div>
      {/* Tabs */}
      <div className="w-full 2xl:max-h-[800px]   h-fit flex flex-col items-center justify-center gap-lg">
        {/* Tab Nav */}
        <TechnologyTabs />
      </div>
    </section>
  );
};

export default Technology;
