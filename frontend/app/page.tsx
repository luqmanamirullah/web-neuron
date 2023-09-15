import Button from '@/components/button';
import ArrowForwardRounded from '@mui/icons-material/ArrowForwardRounded';

function page(): JSX.Element {
  return (
    <main className="overflow-x-hidden bg-sys-light-surface">
      {/* NAVBAR */}
      <div className="absolute w-full md:h-48 xs:h-[4.125rem] border-b-4"></div>

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
    </main>
  );
}

export default page;
