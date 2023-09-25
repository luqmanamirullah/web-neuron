import Directors from '@/components/about/directors';
import Hero from '@/components/about/hero';
import HugeImage from '@/components/about/hugeImage';
import StrategicPlan from '@/components/about/strategicPlan';
import Values from '@/components/about/values';
import VisionAndMissions from '@/components/about/visionAndMissions';
import Heading from '@/components/heading';

async function getData(url: string): Promise<any> {
  const res = await fetch(url + '?_=' + new Date().getTime());

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

async function page(): Promise<JSX.Element> {
  const aboutData = await getData('http://127.0.0.1:8000/api/about');
  return (
    <>
      {/* Section: HERO */}
      <Hero aboutData={aboutData.data} />

      {/* Section: HUGE IMAGE */}
      <HugeImage imageUrl={aboutData.data.activity_image} />

      {/* Section: VISION & MISSIONS */}
      <VisionAndMissions aboutData={aboutData.data} />

      {/* Section: VALUES */}
      <Values aboutData={aboutData.data} />

      {/* Section: DIRECTORS */}
      <section className="md:h-screen xs:h-fit mt-28 flex flex-col md:gap-8 xs:gap-4 md:mx-xl xs:mx-xs">
        <Heading
          darkBg={false}
          heading={aboutData.data.director_subtitle}
          subheading={aboutData.data.director_title}
        />
        <Directors aboutData={aboutData.data} />
      </section>

      {/* Section: STRATEGIC PLAN */}
      <section className="bg-[#101415] w-full md:mt-0 xs:mt-28 md:px-10 xs:px-2 md:py-10 xs:p-6 flex flex-col md:gap-8 xs:gap-4">
        <Heading
          darkBg={true}
          heading={aboutData.data.strategic_subtitle}
          subheading={aboutData.data.strategic_title}
        />

        <StrategicPlan aboutData={aboutData.data} />
      </section>
    </>
  );
}

export default page;
