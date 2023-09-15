/* eslint-disable react-hooks/exhaustive-deps */
'use client';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MenuDesktop from '@/components/navbar/desktop/menuDesktop';
import MenuMobile from '@/components/navbar/mobile/menuMobile';
import menus from '@/data/menus';
import useShrink from '@/hooks/useShrink';
import cn from '@/utils/cn';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

const Navbar: any = () => {
  const router = useRouter();
  const currentPath = usePathname();
  // Shrink navbar on scroll
  const { isShrink } = useShrink();
  const data = menus;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-screen lg:h-48 h-16 lg:px-10 px-2 inline-flex justify-center items-center transition-all duration-300',
        isShrink
          ? 'lg:h-28 border border-sys-light-outline bg-sys-light-surfaceContainerLow'
          : 'lg:h-48',
      )}
    >
      <nav className="w-full h-fit inline-flex justify-between items-center z-50">
        {/* Logo Neuron */}
        <Image
          src="/assets/images/logo_full.png"
          alt="logo"
          width={100}
          height={100}
          className="w-auto h-7 hidden lg:block"
        />
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-auto h-8 lg:hidden block z-50"
        />

        {/* Menu Desktop */}
        <MenuDesktop router={router} item={data} currPath={currentPath} />

        {/* Menu Mobile */}
        <MenuMobile item={data} router={router} currPath={currentPath} />
      </nav>
    </header>
  );
};

export default Navbar;
