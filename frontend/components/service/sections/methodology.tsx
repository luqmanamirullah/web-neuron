import getMethodologies from '@/api/getMethodologies';
import Heading from '@/components/heading';
import Section from '@/components/section';
import React from 'react';
import MethodologyTabs from '../methodologyTab';

interface Props {
  subtitle: string;
  title: string;
}

const Methodology: React.FC<Props> = async ({ title, subtitle }) => {
  const methodologies = await getMethodologies();
  return (
    <Section id="methodologies" className="max-h-fit text-black  ">
      <Heading darkBg={false} heading={subtitle} subheading={title} />
      {/* Tabs */}
      <div className="w-full mt-10 2xl:max-h-[800px] lg:min-h-screen  h-fit flex flex-col items-center justify-center gap-lg">
        {/* Tab Nav */}
        <MethodologyTabs methodologies={methodologies} />
      </div>
    </Section>
  );
};

export default Methodology;
