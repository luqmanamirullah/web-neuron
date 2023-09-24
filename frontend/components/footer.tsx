import TwitterIcon from '@/components/svg/twitterIcon';
import contacts from '@/data/contacts';
import menus from '@/data/menus';
import offices from '@/data/offices';
import social from '@/data/social';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SvgIcon } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const Footer: React.FC = () => {
  const dataMenus = menus;
  const dataOffices = offices;
  const dataContacts = contacts;
  const { facebook, instagram, linkedin, youtube, twitter } = social;
  return (
    <footer className="w-full h-fit bg-sys-dark-surface py-6 lg:px-10 md:px-6 px-4 mt-10 text-sys-dark-onSurface flex flex-col gap-lg overflow-x-hidden">
      {/* Icon Neuronworks */}
      <Image
        src="/assets/images/logo_full_white.png"
        alt="logo"
        width={100}
        height={100}
        className="lg:w-48 w-40 h-auto object-contain"
      />
      <div className="grid grid-cols-5 gap-lg justify-start items-start">
        <div className=" md:col-span-3 col-span-5 flex flex-col gap-lg">
          <div className="w-full flex flex-wrap items-start content-start gap-lg">
            {dataMenus.map((menu, index) => {
              if (
                menu.children !== undefined &&
                menu.children.length > 0 &&
                menu.type !== 'lang'
              ) {
                return (
                  <div key={index} className="flex flex-col gap-s">
                    <h1 className="md:text-desktop-title text-mobile-title font-bold">
                      {menu.label}
                    </h1>
                    <div className="flex items-start gap-s">
                      <div className="flex flex-col items-start gap-md">
                        {menu.children
                          .slice(0, menu.children.length / 2)
                          .map((child, index) => {
                            return (
                              <Link
                                href={child.link ?? '/'}
                                key={index}
                                className="md:text-desktop-body text-mobile-body md:font-medium font-normal"
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                      </div>
                      <div className="flex flex-col items-start gap-md">
                        {menu.children
                          .slice(menu.children.length / 2, menu.children.length)
                          .map((child, index) => {
                            return (
                              <div key={index} className="flex flex-col gap-s">
                                <Link
                                  href={child.link ?? '/'}
                                  className="md:text-desktop-body text-mobile-body md:font-medium font-normal"
                                >
                                  {child.label}
                                </Link>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
          <div className="w-full flex flex-wrap gap-lg">
            {dataMenus.map((menu, index) => {
              if (menu.type === 'link' && menu.children === undefined) {
                return (
                  <Link
                    href={menu.link ?? '/'}
                    key={index}
                    className="md:text-desktop-title text-mobile-body font-bold"
                  >
                    {menu.label}
                  </Link>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="md:col-span-2 col-span-5 flex flex-col justify-between gap-lg items-start">
          <div className="grid grid-cols-2 gap-md">
            {dataOffices.map((office, index) => (
              <div
                key={index}
                className="md:col-span-1 col-span-2 flex flex-col gap-s"
              >
                <h1 className="md:text-desktop-title text-mobile-title font-bold">
                  {office.city}
                </h1>
                <p className="md:text-desktop-body text-mobile-body">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
          <div className="w-full flex flex-wrap justify-between items-start">
            {dataContacts.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col my-2 gap-1 lg:w-1/2 md:w-full w-fit"
              >
                <h1 className="md:text-desktop-body text-mobile-body font-semibold">
                  {contact.name}
                </h1>
                <p className="text-desktop-body">{contact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[2px] bg-sys-dark-outline"></div>
      {/* Copy Right */}
      <div className="flex sm:flex-row flex-col-reverse gap-s justify-between items-center">
        <p className="text-subtitle">
          © 2021 Neuronworks. All Rights Reserved.
        </p>

        <div className="flex gap-s">
          <Link href={youtube}>
            <SvgIcon fontSize="small" className="text-white">
              <YouTubeIcon />
            </SvgIcon>
          </Link>
          <Link href={instagram}>
            <SvgIcon fontSize="small" className="text-white">
              <InstagramIcon />
            </SvgIcon>
          </Link>
          <Link href={facebook}>
            <SvgIcon fontSize="small" className="text-white">
              <FacebookIcon />
            </SvgIcon>
          </Link>
          <Link href={linkedin}>
            <SvgIcon fontSize="small" className="text-white">
              <LinkedInIcon />
            </SvgIcon>
          </Link>
          <Link href={twitter}>
            <TwitterIcon fontSize="small" className="text-white text-[1rem]" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
