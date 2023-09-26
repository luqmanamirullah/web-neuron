import getAboutPage from '@/api/getAboutPage';
import Directors from '@/components/about/directors';
import Hero from '@/components/about/hero';
import HugeImage from '@/components/about/hugeImage';
import StrategicPlan from '@/components/about/strategicPlan';
import Values from '@/components/about/values';
import VisionAndMissions from '@/components/about/visionAndMissions';
import Heading from '@/components/heading';
import Section from '@/components/section';
import { type About } from '@/interface';

async function page(): Promise<JSX.Element> {
  const aboutData: About = await getAboutPage();

  return (
    <>
      {/* Section: HERO */}
      <Hero aboutData={aboutData} />

      {/* Section: HUGE IMAGE */}
      <HugeImage imageUrl={aboutData.activity_image} />

      {/* Section: VISION & MISSIONS */}
      <VisionAndMissions aboutData={aboutData} />

      {/* Section: VALUES */}
      <Values aboutData={aboutData} />

      {/* Section: DIRECTORS */}
      <Section className="max-h-fit md:h-screen xs:h-fit mt-28 flex flex-col md:gap-8 xs:gap-4 ">
        <Heading
          alignCenter={false}
          darkBg={false}
          heading={aboutData.director_subtitle}
          subheading={aboutData.director_title}
        />
        <Directors aboutData={aboutData} />
      </Section>

      {/* Section: STRATEGIC PLAN */}
      <Section className="bg-[#101415] w-full md:mt-0 xs:mt-28 flex flex-col md:gap-8 xs:gap-4 py-10">
        <Heading
          alignCenter={false}
          darkBg={true}
          heading={aboutData.strategic_subtitle}
          subheading={aboutData.strategic_title}
        />

        <StrategicPlan aboutData={aboutData} />
      </Section>
    </>
  );
}

export default page;
