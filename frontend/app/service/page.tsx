import getServicePage from '@/api/getServicePage';
import Hero from '@/components/service/sections/hero';
import Methodology from '@/components/service/sections/methodology';
import Portfolio from '@/components/service/sections/portfolio';
import Service from '@/components/service/sections/service';
import Technology from '@/components/service/sections/technology';

async function page(): Promise<JSX.Element> {
  const serviceData = await getServicePage();
  return (
    <>
      {/* Hero Section */}
      <Hero
        display={serviceData.hero.hero_title}
        subtitle={serviceData.hero.hero_desc}
      />

      {/* Service Section */}
      <Service
        title={serviceData.service.title}
        subtitle={serviceData.service.subtitle}
      />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Technology Section */}
      <Technology
        title={serviceData.technology.technology_title}
        subtitle={serviceData.technology.technology_desc}
      />

      {/* Methodology Section */}
      <Methodology
        title={serviceData.methodology.methodology_title}
        subtitle={serviceData.methodology.methodology_subtitle}
      />
    </>
  );
}

export default page;
