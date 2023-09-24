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

async function getData(): Promise<any> {
  const res = await fetch('http://127.0.0.1:8000/api/home');

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

async function page(): Promise<JSX.Element> {
  const data = await getData();
  const homeData = data.data[0];
  return (
    <>
    <>
      {/* Fetch Unfinished */}
      {/* Section: HERO */}
      <section className="h-screen w-full flex items-center md:mx-xl xs:mx-xs">
        <div className="max-w-[48.625rem] mt-[2.12rem]">
          {/* Display CTA */}
          <div className="flex flex-col text-desktop-display font-bold">
            <h1>Enhance Your Business:</h1>
            <div className="flex gap-6">
              <h1 className="bg-">Simplify</h1>
              <h1>With Neuronworks</h1>
            </div>
            <h1>Software Evolution</h1>
          </div>

          {/* Desc */}
          <p className="text-desktop-body-large mt-2 mb-10">
            Where Vision Transforms into Code Empowering Your Digital Future
          </p>

          {/* Btn */}
          <Button
            label="CONSULT WITH US"
            size="lg"
            buttonStyle="filled"
            withIcon={true}
            icon={<ArrowForwardRounded />}
          />
        </div>
      </section>
    </>
  );
}

export default page;
