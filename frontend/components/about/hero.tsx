import { type About } from '@/interface';
import Section from '../section';
import AboutBigLine from '../svg/aboutBigLine';
import AboutHero from '../svg/aboutHero';
import AboutHeroCircle from '../svg/aboutHeroCircles';
import AboutHeroLines from '../svg/aboutHeroLines';
import AboutHeroSquares from '../svg/aboutHeroSquares';
import MaskedImageBL from '../svg/maskedImageBL';
import MaskedImageTR from '../svg/maskedImageTR';

interface Props {
  aboutData: About;
}

function Hero({ aboutData }: Props): JSX.Element {
  return (
    <Section className="max-h-fit lg:pt-40 pt-10 md:h-screen h-fit relative  flex md:justify-between xs:justify-normal xs:gap-8 items-start md:flex-row xs:flex-col">
      <div className="mt-10 z-[2]">
        <h1 className="md:max-w-[48.625rem] mb-xs font-bold md:text-desktop-display xs:text-mobile-headline">
          {aboutData.hero_title}
        </h1>

        <p className="md:max-w-[34.5625rem] md:text-desktop-body-large xs:text-mobile-body">
          {aboutData.hero_desc}
        </p>
      </div>

      <AboutBigLine className="absolute top-0 md:left-[50%] md:mx-0 xs:mx-auto" />
      <div className="relative md:mr-0 xs:mr-4 md:ml-0 xs:ml-12 w-fit h-fit my-auto">
        <AboutHero
          imageUrl={aboutData.hero_image}
          className="md:w-[20rem] xs:w-full md:max-h-full xs:max-h-[20.94381rem] my-auto relative z-[2]"
        />

        <div className="absolute top-7 -left-[3rem]">
          <AboutHeroLines className="md:h-[15.718rem] xs:h-[12.5rem] md:scale-100 xs:scale-[85%]" />
          <div className="relative">
            <AboutHeroCircle className="absolute top-0" />
            <AboutHeroCircle className="absolute bottom-8 right-8" />
            <AboutHeroCircle className="absolute bottom-14 left-1 md:left-0" />
          </div>
        </div>

        <div className="absolute -top-4 -right-4 flex">
          <AboutHeroSquares className="" />
          <MaskedImageTR className="" />
        </div>
        <MaskedImageBL className="absolute -bottom-4 -left-4" />
      </div>
    </Section>
  );
}

export default Hero;
