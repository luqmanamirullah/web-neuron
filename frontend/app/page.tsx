import HomeBackground from '@/components/home/heroBackground';
import AboutSection from '@/components/home/sections/about';
import ArticlesSection from '@/components/home/sections/articles';
import HeroSection from '@/components/home/sections/hero';
import LicensesSection from '@/components/home/sections/licenses';
import PartnersSection from '@/components/home/sections/partners';
import PortfolioSection from '@/components/home/sections/portfolio';
import ProductsSection from '@/components/home/sections/products';
import ProgramSection from '@/components/home/sections/program';
import ServicesSection from '@/components/home/sections/services';

async function getData(): Promise<any> {
  const res = await fetch('http://127.0.0.1:8000/api/home');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

async function page(): Promise<JSX.Element> {
  const data = await getData();
  const homeData = data.data[0];
  return (
    <>
      {/* Fetch Unfinished */}
      {/* Section: HERO */}
      <HeroSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: ABOUT */}
      <AboutSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: SERVICES */}
      <ServicesSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: PORTFOLIO */}
      <PortfolioSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: PRODUCTS */}
      <ProductsSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: NEURON'S PROGRAM */}
      <ProgramSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: PARTNERS */}
      <PartnersSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: LATEST ARTICLES */}
      <ArticlesSection homeData={homeData} />

      {/* Fetch Unfinished */}
      {/* Section: LICENSES */}
      <LicensesSection homeData={homeData} />

      {/* SVG Background */}
      <HomeBackground />
    </>
  );
}

export default page;
