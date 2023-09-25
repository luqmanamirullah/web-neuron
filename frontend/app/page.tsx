import getHomePage from '@/api/getHomePage';
import getProducts from '@/api/getProducts';
import getSuccessPortfolio from '@/api/getSuccessPortfolio';
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

async function getData(url: string): Promise<any> {
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return await res.json();
}

async function page(): Promise<JSX.Element> {
  const homeData = await getHomePage();
  const topServiceData = await getData(
    'http://127.0.0.1:8000/api/top-services',
  );
  const successPortfolio = await getSuccessPortfolio();
  const productsData = await getProducts();

  return (
    <>
      {/* Section: HERO */}
      <HeroSection hero={homeData.hero} testimonials={homeData.testimonials} />

      {/* Lottie Illustration unfinished */}
      {/* Section: ABOUT */}
      <AboutSection about={homeData.about} />

      {/* Section: SERVICES */}
      <ServicesSection
        service={homeData.service}
        topServiceData={topServiceData.data}
      />

      {/* Section: PORTFOLIO */}
      <PortfolioSection
        portfolio={homeData.portfolio}
        portfolioData={successPortfolio}
      />

      {/* Section: PRODUCTS */}
      <ProductsSection product={homeData.product} productsData={productsData} />

      {/* Section: NEURON'S PROGRAM */}
      <ProgramSection program={homeData.program} />

      {/* Still using dummy data */}
      {/* Section: PARTNERS */}
      <PartnersSection partner={homeData.partner} />

      {/* Still using dummy data */}
      {/* Section: LATEST ARTICLES */}
      <ArticlesSection article={homeData.article} />

      {/* Section: LICENSES */}
      <LicensesSection license={homeData.license} />

      {/* SVG Background */}
      <HomeBackground />
    </>
  );
}

export default page;
