import React from 'react';
import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';
import YoutubeEmbed from '../youtubeEmbed';

const ProgramSection = () => {
  return (
    <section className="mt-20">
      <div className="flex lg:flex-row xs:flex-col lg:gap-2 xs:gap-8 relative lg:h-[31.3125rem]">
        {/* Section BG */}
        <div className="absolute lg:h-full xs:h-[85%] lg:w-[75%] xs:w-full bg-sys-light-onPrimaryContainer"></div>

        {/* Content */}
        <div className="lg:flex-1 lg:block xs:flex flex-col relative lg:py-14 xs:py-6 lg:px-10 xs:px-6">
          <h1 className="lg:text-desktop-display xs:text-mobile-headline font-bold text-sys-light-primaryContainer">
            NEURON 3.0: Ignite Your Leadership Journey
          </h1>

          <p className="mt-2 lg:text-desktop-body xs:text-mobile-body text-sys-light-primaryContainer">
            Experience NEURON 3.0, the hub of innovation. We don't just reshape
            projects; we empower individuals to lead – themselves, their teams,
            and our business. Uncover your potential in our dynamic,
            forward-thinking Neuronworks environment – where together, we craft
            the future.
          </p>

          <Button
            className="mt-10"
            buttonStyle="filled"
            label="JOIN WITH US"
            size="lg"
            withIcon={true}
            icon={<ArrowForwardRounded />}
          />
        </div>

        {/* YT Embed */}
        <YoutubeEmbed
          className="lg:flex-1 lg:w-fit xs:w-[95%] lg:h-[80%] xs:h-[12rem] lg:mr-10 lg:my-auto lg:mx-0 xs:mx-auto relative"
          embedId="Zvc3DgDhzhw?si=MMLCWqISXecjAaAI"
        />
      </div>
    </section>
  );
};

export default ProgramSection;
