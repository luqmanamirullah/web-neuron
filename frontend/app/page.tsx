import HeroSection from '@/components/home/sections/hero';
import AboutSection from '@/components/home/sections/about';
import ServicesSection from '@/components/home/sections/services';
import PortfolioSection from '@/components/home/sections/portfolio';
import ProductsSection from '@/components/home/sections/products';
import ProgramSection from '@/components/home/sections/program';
import PartnersSection from '@/components/home/sections/partners';
import ArticlesSection from '@/components/home/sections/articles';
import LicensesSection from '@/components/home/sections/licenses';
import HomeBackground from '@/components/svg/homeBackground';

function page(): JSX.Element {
  return (
    <>
      {/* Section: HERO */}
      <HeroSection />

      {/* Section: ABOUT */}
      <AboutSection />

      {/* Section: SERVICES */}
      <ServicesSection />

      {/* Section: PORTFOLIO */}
      <PortfolioSection />

      {/* Section: PRODUCTS */}
      <ProductsSection />

      {/* Section: NEURON'S PROGRAM */}
      <ProgramSection />

      {/* Section: PARTNERS */}
      <PartnersSection />

      {/* Section: LATEST ARTICLES */}
      <ArticlesSection />

      {/* Section: LICENSES */}
      <LicensesSection />

      {/* SVG Background */}
      <HomeBackground className="absolute lg:block xs:hidden top-0 w-[58.34375rem] h-[76.8125rem] z-[-1]" />
    </>
  );
}

export default page;
