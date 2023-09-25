import Button from '@/components/button';
import Section from '@/components/section';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import React from 'react';
import YoutubeEmbed from '../youtubeEmbed';

interface Props {
  homeData: any;
}

const ProgramSection: React.FC<Props> = ({ homeData }) => {
  return (
    <Section className="lg:px-0 md:px-0 px-0 mt-20 ">
      <div className="  flex lg:flex-row flex-col lg:gap-2 gap-8 relative xl:h-[31.3125rem] h-fit">
        {/* Section BG */}
        <div className="absolute left-0 lg:w-[75%] w-full lg:h-full h-[85%]  bg-sys-light-onPrimaryContainer"></div>

        {/* Content */}
        <div className="lg:flex-1 lg:block flex flex-col relative lg:py-14 py-6 lg:px-10 px-6">
          <h1 className="xl:text-desktop-display lg:text-desktop-headline text-mobile-headline font-bold text-sys-light-primaryContainer">
            NEURON 3.0: Ignite Your Leadership Journey
          </h1>

          <p className="mt-2 lg:text-desktop-body text-mobile-body text-sys-light-primaryContainer">
            Experience NEURON 3.0, the hub of innovation. We don&apos;t just
            reshape projects; we empower individuals to lead – themselves, their
            teams, and our business. Uncover your potential in our dynamic,
            forward-thinking Neuronworks environment – where together, we craft
            the future.
          </p>

          <Button
            className="mt-10"
            buttonStyle="filled"
            label="JOIN WITH US"
            size="lg"
            withIcon={true}
            icon={<ArrowOutwardRounded />}
          />
        </div>

        {/* YT Embed */}
        <YoutubeEmbed
          className="lg:flex-1 lg:w-1/2 w-[95%] xl:h-[80%] lg:h-auto  h-auto lg:mr-10 lg:my-auto lg:mx-0 mx-auto relative"
          embedId="Zvc3DgDhzhw?si=MMLCWqISXecjAaAI"
        />
      </div>
    </Section>
  );
};

export default ProgramSection;
