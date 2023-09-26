import getDetailPortfolio from '@/api/getDetailPortfolio';
import Image from 'next/image';
import Link from 'next/link';

async function page({
  params,
}: {
  params: { portfolioId: number };
}): Promise<JSX.Element> {
  const { portfolioId } = params;
  console.log(portfolioId);
  const portfolio = await getDetailPortfolio({ portfolioId });
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full lg:pt-0 xs:pt-[6rem] overflow-hidden bg-[url(/assets/images/service/portfolioBanner.png)] flex items-center justify-center">
        {/* Backdrop */}
        <div className="w-full h-screen absolute top-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content */}
        <div className="lg:max-h-[17rem] lg:mx-40 xs:mx-xs relative flex xs:flex-col-reverse lg:flex-row lg:gap-6 xs:gap-4 text-sys-light-onPrimary z-1">
          <div className="lg:flex-1">
            <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              {portfolio.name}
            </h2>

            <Link
              className="mt-2 lg:text-desktop-body xs:text-mobile-body underline font-bold"
              href={portfolio.link ?? '/'}
            >
              {portfolio.customer_name}
            </Link>

            <p className="lg:text-desktop-body xs:text-mobile-body lg:mt-6 xs:mt-2">
              {portfolio.desc}
            </p>
          </div>

          <div className="lg:flex-1 lg:max-h-full xs:max-h-60 border-[1px] flex items-center overflow-hidden p-2 border-[#ddd] rounded">
            <Image
              className="w-full h-full object-cover"
              width={500}
              height={500}
              alt="Portfolio Image"
              src={portfolio.image}
            />
          </div>
        </div>
      </section>

      {/* Page Content */}
      <section className="lg:mx-xl xs:mx-xs lg:py-14 py-7">
        {/* Details */}
        <div>
          <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            Details
          </h2>
          <p className="lg:text-desktop-body-large xs:text-mobile-body mt-2">
            {portfolio.details}
          </p>
        </div>

        {/* Solution */}
        <div className="lg:mt-12 xs:mt-8">
          <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            Our Solution
          </h2>
          <p className="lg:text-desktop-body-large xs:text-mobile-body mt-2">
            {portfolio.our_solution}
          </p>
        </div>

        {/* Lists */}
        <div className="flex lg:flex-row xs:flex-col gap-6 lg:mt-20 xs:mt-10">
          {/* Deliverables */}
          <div className="p-6 flex flex-col flex-1 gap-6 border-[1px] border-sys-light-outline rounded">
            <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              Deliverables
            </h2>

            <ul className="lg:text-desktop-body-large xs:text-mobile-body-large flex flex-col gap-6 list-image-[url(/assets/bulletPoint.svg)] list-inside">
              {portfolio.deliverables.length > 0 ? (
                portfolio.deliverables.map((item, index) => (
                  <li key={index}>
                    <span className="relative left-4">{item}</span>
                  </li>
                ))
              ) : (
                <li>
                  <span className="relative left-4">
                    confidential information
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Tech Used */}
          <div className="p-6 flex flex-col flex-1 gap-6 border-[1px] border-sys-light-outline rounded">
            <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              Technology Used
            </h2>

            <ul className="lg:text-desktop-body-large xs:text-mobile-body-large flex flex-col gap-6 list-image-[url(/assets/bulletPoint.svg)] list-inside">
              {portfolio.technologies.length > 0 ? (
                portfolio.technologies.map((item, index) => (
                  <li key={index}>
                    <span className="relative left-4">{item.name}</span>
                  </li>
                ))
              ) : (
                <li>
                  <span className="relative left-4">
                    confidential information
                  </span>
                </li>
              )}
            </ul>
          </div>

          {/* Scope Handled */}
          <div className="p-6 flex flex-col flex-1 gap-6 border-[1px] border-sys-light-outline rounded">
            <div className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              Scope We Handled
            </div>

            <ul className="lg:text-desktop-body-large xs:text-mobile-body-large flex flex-col gap-6 list-image-[url(/assets/bulletPoint.svg)] list-inside">
              {portfolio.handles.length > 0 ? (
                portfolio.handles.map((item, index) => (
                  <li key={index}>
                    <span className="relative left-4">{item}</span>
                  </li>
                ))
              ) : (
                <li>
                  <span className="relative left-4">
                    confidential information
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
