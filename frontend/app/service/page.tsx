import Hero from '@/components/service/sections/hero';
import Methodology from '@/components/service/sections/methodology';
import Portfolio from '@/components/service/sections/portfolio';
import Service from '@/components/service/sections/service';
import Technology from '@/components/service/sections/technology';
import pageService from '@/data/pageService';

function page(): JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <Hero display={pageService.display} subtitle={pageService.subtitle} />

      {/* Service Section */}
      <Service
        title={pageService.service.title}
        subtitle={pageService.service.subtitle}
      />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Technology Section */}
      <Technology
        title={pageService.technology.title}
        subtitle={pageService.technology.subtitle}
      />

      {/* Methodology Section */}
      <Methodology
        title={pageService.methodology.title}
        subtitle={pageService.methodology.subtitle}
      />
    </>
  );
}

export default page;
