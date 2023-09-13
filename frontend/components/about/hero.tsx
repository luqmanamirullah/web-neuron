import Image from 'next/image';
import React from 'react';

type Props = {};

function Hero({}: Props) {
  return (
    <section className="h-screen ml-10 flex justify-between items-center">
      <div className="mt-10">
        <h1 className="max-w-[778px] text-[52px] mb-2 leading-[59px] font-bold">
          Transform Your Idea Into Best Product Digital Solutions
        </h1>

        <p className="max-w-[553px] text-[18px] leading-[26px]">
          PT Neuronworks Indonesia: Your IT Solution Partner. From inception to
          impact, we drive business forward in the rapidly evolving tech
          landscape. With 100+ successful national and regional projects,
          including international clients like Telkomcel Timor Leste and Telin
          Malaysia."
        </p>
      </div>

      <Image
        className="object-cover h-[438px] mr-[99px] z-10"
        width={366}
        height={438}
        src="/assets/images/19.jpg"
        alt="Hero Image"
      />
    </section>
  );
}

export default Hero;
