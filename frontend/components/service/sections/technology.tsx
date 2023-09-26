import getTechnologies from '@/api/getTechnologies';
import Section from '@/components/section';
import React from 'react';
import TechnologyTabs from '../technologyTab';

interface Props {
  subtitle: string;
  title: string;
}

const Technology: React.FC<Props> = async ({ title, subtitle }) => {
  const technologies = await getTechnologies();
  return (
    <Section id="techStack" className="max-h-fit text-black  ">
      <div className="flex flex-col justify-center items-center text-center md:w-4/5 w-full mx-auto">
        <h1 className="md:text-desktop-headline text-mobile-title  font-bold text-core-primary ">
          {title}
        </h1>
        <h2 className="md:text-desktop-body text-mobile-body  font-medium  ">
          {subtitle}
        </h2>
      </div>
      {/* Tabs */}
      <div className="w-full 2xl:max-h-[800px]   h-fit flex flex-col items-center justify-center gap-lg">
        {/* Tab Nav */}
        <TechnologyTabs technologies={technologies} />
      </div>
    </Section>
  );
};

export default Technology;
