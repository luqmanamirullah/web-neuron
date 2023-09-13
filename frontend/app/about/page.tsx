import React from 'react';
import Image from 'next/image';
import DirectorCards from '../../components/about/directorCards';
import Heading from '../../components/heading';
import ValuesList from '../../components/about/valuesList';
import VisionAndMissions from '../../components/about/visionAndMissions';

type Props = {};

function page({}: Props) {
  return (
    <main className="overflow-x-hidden">
      {/* NAVBAR */}
      <div className="absolute w-full h-48 bg-slate-100 -z-10"></div>

      {/* Section: HERO */}
      <section className="h-screen ml-10 flex justify-between items-center">
        <div className="mt-10">
          <h1 className="max-w-[778px] text-[52px] mb-2 leading-[59px] font-bold">
            Transform Your Idea Into Best Product Digital Solutions
          </h1>

          <p className="max-w-[553px] text-[18px] leading-[26px]">
            PT Neuronworks Indonesia: Your IT Solution Partner. From inception
            to impact, we drive business forward in the rapidly evolving tech
            landscape. With 100+ successful national and regional projects,
            including international clients like Telkomcel Timor Leste and Telin
            Malaysia."
          </p>
        </div>

        <Image
          className="object-cover h-[438px] mr-[99px]"
          width={366}
          height={438}
          src="/assets/images/19.jpg"
          alt="Hero Image"
        />
      </section>

      {/* Section: HUGE IMAGE */}
      <Image
        className="mx-auto mt-20"
        width={1164}
        height={614}
        src="/assets/images/activity.png"
        alt="Neuron Activity"
      />

      {/* Section: VISION & MISSIONS */}
      <section className="mx-10 mt-[185px]">
        <VisionAndMissions />
      </section>

      {/* Section: VALUES */}
      <section className="mx-10 mt-[120px] flex flex-col gap-16">
        <Heading
          heading={'Foundation of Our Core Values'}
          subheading={'Our Values'}
        />
        <ValuesList />
      </section>

      {/* Section: DIRECTORS */}
      <section className="flex flex-col gap-8 mx-10 mt-[120px]">
        <Heading
          heading={'Board of Directors'}
          subheading={'Our Great Founder'}
        />
        <DirectorCards />
      </section>
    </main>
  );
}

export default page;
