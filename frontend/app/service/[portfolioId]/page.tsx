import { portfolios } from '@/data/portfolio';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  params: {
    portfolioId: number;
  };
}

function page({ params }: Props) {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full lg:pt-0 xs:pt-[6rem] overflow-hidden bg-[url(/assets/images/service/portfolioBanner.png)] flex items-center justify-center">
        {/* Backdrop */}
        <div className="w-full h-full absolute top-0 bg-[rgba(0,0,0,0.5)]"></div>

        {/* Content */}
        <div className="lg:max-h-[17rem] lg:mx-40 xs:mx-xs relative flex xs:flex-col-reverse lg:flex-row lg:gap-6 xs:gap-4 text-sys-light-onPrimary z-1">
          <div className="lg:flex-1">
            <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              My Indihome
            </h2>

            <Link
              className="mt-2 lg:text-desktop-body xs:text-mobile-body underline font-bold"
              href={'#'}
            >
              PT. Telekomunikasi Indonesia
            </Link>

            <p className="lg:text-desktop-body xs:text-mobile-body lg:mt-6 xs:mt-2">
              Experience the power of SIMETRI, our cutting-edge web-based queue
              management system. With a simple touch on the screen, customers
              can swiftly register and receive a printed queue number. Beyond
              efficient queue management, SIMETRI is designed to elevate
              convenience and accelerate processes. Real-time queue updates are
              displayed, ensuring a seamless experience for all.
            </p>
          </div>

          <div className="lg:flex-1 lg:max-h-full xs:max-h-60 border-[1px] flex items-center overflow-hidden p-2 border-[#ddd] rounded">
            <Image
              className="w-full h-full object-cover"
              width={500}
              height={500}
              alt="Portfolio Image"
              src={
                'https://www.neuronworks.co.id/assets/img/upload/project/splash-indi.png'
              }
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
            Embark on a journey of achievement with the My SIMETRI web
            application. Our success is woven into every line of code, as we've
            harnessed cutting-edge technology to create a seamless queue
            management system. From intuitive touch screen registration to swift
            queue number allocation
          </p>
        </div>

        {/* Solution */}
        <div className="lg:mt-12 xs:mt-8">
          <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
            Our Solution
          </h2>
          <p className="lg:text-desktop-body-large xs:text-mobile-body mt-2">
            Embark on a journey of achievement with the My SIMETRI web
            application. Our success is woven into every line of code, as we've
            harnessed cutting-edge technology to create a seamless queue
            management system. From intuitive touch screen registration to swift
            queue number allocation
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
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
            </ul>
          </div>

          {/* Tech Used */}
          <div className="p-6 flex flex-col flex-1 gap-6 border-[1px] border-sys-light-outline rounded">
            <h2 className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              Technology Used
            </h2>

            <ul className="lg:text-desktop-body-large xs:text-mobile-body-large flex flex-col gap-6 list-image-[url(/assets/bulletPoint.svg)] list-inside">
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
            </ul>
          </div>

          {/* Scope Handled */}
          <div className="p-6 flex flex-col flex-1 gap-6 border-[1px] border-sys-light-outline rounded">
            <div className="lg:text-desktop-headline xs:text-mobile-headline font-bold">
              Scope We Handled
            </div>

            <ul className="lg:text-desktop-body-large xs:text-mobile-body-large flex flex-col gap-6 list-image-[url(/assets/bulletPoint.svg)] list-inside">
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
              <li>
                <span className="relative left-4">Queue Management System</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
