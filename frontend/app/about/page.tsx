import React from 'react';
import Image from 'next/image';

import Directors from '@/components/about/directors';
import Heading from '@/components/heading';
import VisionAndMissions from '@/components/about/visionAndMissions';
import Hero from '@/components/about/hero';
import Values from '@/components/about/values';
import StrategicPlan from '@/components/about/strategicPlan';
import HugeImage from '@/components/about/hugeImage';

function page(): JSX.Element {
  return (
    <main className="overflow-x-hidden bg-sys-light-surface">
      {/* NAVBAR */}
      <div className="absolute w-full md:h-48 xs:h-[4.125rem] border-b-4"></div>

      {/* Section: HERO */}
      <Hero />

      {/* Section: HUGE IMAGE */}
      <HugeImage imageUrl="/assets/images/3.jpg" />

      {/* Section: VISION & MISSIONS */}
      <VisionAndMissions />

      {/* Section: VALUES */}
      <Values />

      {/* Section: DIRECTORS */}
      <section className="md:h-screen xs:h-fit mt-28 flex flex-col md:gap-8 xs:gap-4 md:mx-xl xs:mx-xs">
        <Heading
          darkBg={false}
          heading={'Board of Directors'}
          subheading={'Our Great Founder'}
        />
        <Directors />
      </section>

      {/* Section: STRATEGIC PLAN */}
      <section className="bg-[#101415] w-full md:mt-0 xs:mt-28 md:px-10 xs:px-2 md:py-10 xs:p-6 flex flex-col md:gap-8 xs:gap-4">
        <Heading
          darkBg={true}
          heading={'Navigating the Path to Software Excellence '}
          subheading={'Our Strategic Plan for Management'}
        />

        <StrategicPlan />
      </section>
    </main>
  );
}

export default page;
