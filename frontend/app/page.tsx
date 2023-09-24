import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

function page(): JSX.Element {
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

async function getData(url: string): Promise<any> {
  const res = await fetch(url + '?_=' + new Date().getTime());

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function page(): Promise<JSX.Element> {
  const homeData = await getData('http://127.0.0.1:8000/api/home');
  const topServiceData = await getData(
    'http://127.0.0.1:8000/api/top-services',
  );
  const successPortfolio = await getData(
    'http://127.0.0.1:8000/api/success-portofolio',
  );
  const productsData = await getData('http://127.0.0.1:8000/api/products');

  return (
    <>
      {/* Section: HERO */}
      <HeroSection homeData={homeData.data[0]} />

      {/* Lottie Illustration unfinished */}
      {/* Section: ABOUT */}
      <AboutSection homeData={homeData.data[0]} />

      {/* Section: SERVICES */}
      <ServicesSection
        homeData={homeData.data[0]}
        topServiceData={topServiceData.data}
      />

      {/* Section: PORTFOLIO */}
      <PortfolioSection
        homeData={homeData.data[0]}
        portfolioData={successPortfolio.data}
      />

      {/* Section: PRODUCTS */}
      <ProductsSection
        homeData={homeData.data[0]}
        productsData={productsData.data}
      />

      {/* Section: NEURON'S PROGRAM */}
      <ProgramSection homeData={homeData.data[0]} />

      {/* Still using dummy data */}
      {/* Section: PARTNERS */}
      <PartnersSection homeData={homeData.data[0]} />

      {/* Still using dummy data */}
      {/* Section: LATEST ARTICLES */}
      <ArticlesSection homeData={homeData.data[0]} />

      {/* Section: LICENSES */}
      <LicensesSection homeData={homeData.data[0]} />

      {/* SVG Background */}
      <HomeBackground className="absolute lg:block xs:hidden top-0 w-[58.34375rem] h-[76.8125rem] z-[-1]" />
    </>
  );
}

export default page;
