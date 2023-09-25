'use client';
import Heading from '@/components/heading';
import React from 'react';
import MethodologyTabs from '../methodologyTab';

interface Props {
  subtitle: string;
  title: string;
}

const Methodology: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <section id="methodologies" className="lg:p-10 md:p-8 p-4 text-black  ">
      <Heading darkBg={false} heading={subtitle} subheading={title} />
      {/* Tabs */}
      <div className="w-full mt-10 2xl:max-h-[800px] lg:min-h-screen  h-fit flex flex-col items-center justify-center gap-lg">
        {/* Tab Nav */}
        <MethodologyTabs />
      </div>
    </section>
  );
};

export default Methodology;
