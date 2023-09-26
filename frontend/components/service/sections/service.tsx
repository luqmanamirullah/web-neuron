import getServices from '@/api/getServices';
import Heading from '@/components/heading';
import React from 'react';
import ServiceTabs from '../serviceTab';

interface Props {
  subtitle: string;
  title: string;
}

const Service: React.FC<Props> = async ({ title, subtitle }) => {
  const services = await getServices();
  return (
    <section id="services" className="lg:p-10 md:p-8 p-4 text-black ">
      <Heading darkBg={false} heading={title} subheading={subtitle} />
      {/* Tabs */}
      <div className="w-full 2xl:max-h-[800px] md:min-h-screen  h-fit flex flex-col items-start justify-start gap-lg">
        {/* Tab Nav */}
        <ServiceTabs services={services} />
      </div>
    </section>
  );
};

export default Service;
