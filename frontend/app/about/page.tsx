import React from 'react';
import Image from 'next/image';

import Directors from '@/components/about/directors';
import Heading from '@/components/heading';
import VisionAndMissions from '@/components/about/visionAndMissions';
import Hero from '@/components/about/hero';
import Values from '@/components/about/values';
import StrategicPlan from '@/components/about/strategicPlan';

type Props = {};

interface Plan {
  planTitle: string;
  content: { title: string; desc: string }[];
}

const planData: Plan[] = [
  {
    planTitle: 'Finance',
    content: [
      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Time is Money',
        desc: 'Maximizing productivity and resource utilization',
      },
    ],
  },

  {
    planTitle: 'Work',
    content: [
      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },

      {
        title: 'Lean Operation, Mean Savings',
        desc: 'Maximizing productivity and resource utilization',
      },
    ],
  },
];

function page({}: Props) {
  return (
    <main className="overflow-x-hidden bg-[#F8FAFA]">
      {/* NAVBAR */}
      <div className="absolute w-full h-48 bg-slate-100"></div>

      {/* Section: HERO */}
      <Hero />

      {/* Section: HUGE IMAGE */}
      <section className="h-screen flex justify-center items-center">
        <div className="relative overflow-hidden rounded-lg border border-black">
          <Image
            className="max-h-[614px] object-cover"
            width={1164}
            height={1000}
            src="/assets/images/3.jpg"
            alt="Neuron Activity"
          />

          <div className="absolute bottom-10 left-8">
            <Image
              className="object-cover"
              width={300}
              height={300}
              src="/assets/images/Group.svg"
              alt="Neuron Activity"
            />

            <h6 className="text-[22px] leading-[28px] text-white absolute left-8 top-[50%] translate-y-[-50%]">
              Neuron 2023
            </h6>
          </div>

          <Image
            className="max-h-[614px] object-cover px-6 absolute top-8"
            width={1164}
            height={1000}
            src="/assets/images/Group1.svg"
            alt="Neuron Activity"
          />
        </div>
      </section>

      {/* Section: VISION & MISSIONS */}
      <VisionAndMissions />

      {/* Section: VALUES */}
      <Values />

      {/* Section: DIRECTORS */}
      <section className="h-screen flex flex-col gap-8 mx-10">
        <Heading
          darkBg={false}
          heading={'Board of Directors'}
          subheading={'Our Great Founder'}
        />
        <Directors />
      </section>

      {/* Section: STRATEGIC PLAN */}
      <section className="bg-[#101415] w-full p-10 flex flex-col gap-8">
        <Heading
          darkBg={true}
          heading={'Navigating the Path to Software Excellence '}
          subheading={'Our Strategic Plan for Management'}
        />

        <div className="flex flex-col gap-4">
          {planData.map((item) => {
            return <StrategicPlan planProps={item} />;
          })}
        </div>
      </section>
    </main>
  );
}

export default page;
