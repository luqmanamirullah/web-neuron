import Button from '@/components/button';
import { type Menu } from '@/data/menus';
import useShowListAnim from '@/hooks/useShowListAnim';
import cn from '@/utils/cn';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { animated, useSpringRef } from '@react-spring/web';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Dropdown from './dropdown';

import SubMenu from '@/components/navbar/mobile/subMenu';
import useWindowSize from '@/hooks/useWindowSize';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';

interface Props {
  router: AppRouterInstance;
  item: Menu[];
  currPath: string;
}

const MenuMobile: React.FC<Props> = ({ router, item, currPath }) => {
  const [mobileMenuActive, setMobileMenuActive] = useState<boolean>(false);
  const [hamburgerAction, setHamburgerAction] = useState<string>('showMenu');
  const [subMenu, setSubMenu] = useState<Menu[]>([]);
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  // Mobile Active Animation
  const data = item;
  const springRef = useSpringRef();
  const transRef = useSpringRef();
  const { size, rest, transitions } = useShowListAnim<Menu>({
    activeTrigger: mobileMenuActive,
    springRef,
    transRef,
    list: data,
    sizeType: 'vh',
  });

  // Remove SubMenu & Menu if it active when screen is large
  const { width } = useWindowSize();
  useEffect(() => {
    if (width > 1024 && showSubMenu) {
      setShowSubMenu(false);
      setMobileMenuActive(false);
      setHamburgerAction('showMenu');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  return (
    <>
      {/* Hamburger Menu */}
      <div
        className="lg:hidden w-8 h-8 cursor-pointer flex flex-col justify-center items-center gap-1 z-50"
        onClick={() => {
          if (
            hamburgerAction === 'showMenu' ||
            hamburgerAction === 'hideMenu'
          ) {
            setMobileMenuActive((mobileMenuActive) => !mobileMenuActive);
          } else {
            setShowSubMenu((showSubMenu) => !showSubMenu);
          }
          setHamburgerAction((hamburgerAction) =>
            hamburgerAction === 'showMenu'
              ? 'hideMenu'
              : hamburgerAction === 'hideSubMenu'
              ? 'hideMenu'
              : 'showMenu',
          );
        }}
      >
        <div
          className={cn(
            'w-6 h-[2px] rounded-[1px] bg-core-primary transition-all duration-300 ',
            hamburgerAction === 'hideMenu'
              ? 'rotate-45 translate-y-[6px]'
              : hamburgerAction === 'hideSubMenu'
              ? 'w-3 -rotate-45 translate-y-[2px] -translate-x-1.5'
              : '',
          )}
        ></div>
        <div
          className={cn(
            'w-6 h-[2px] rounded-[1px] bg-core-primary mr-1.5 transition-color duration-300',
            hamburgerAction === 'hideMenu'
              ? 'opacity-0'
              : hamburgerAction === 'hideSubMenu'
              ? 'opacity-100 mr-0 w-5 '
              : 'opacity-100',
          )}
        ></div>
        <div
          className={cn(
            'w-6 h-[2px] rounded-[1px] bg-core-primary transition-all duration-300 ',
            hamburgerAction === 'hideMenu'
              ? '-rotate-45 -translate-y-[6px]'
              : hamburgerAction === 'hideSubMenu'
              ? 'w-3 rotate-45 -translate-y-[2px] -translate-x-1.5'
              : '',
          )}
        ></div>
      </div>

      {/* Menu Mobile */}
      <animated.ul
        className={cn(
          'lg:hidden w-full absolute top-0 left-0 flex flex-col gap-md items-center text-mobile-headline font-medium bg-white pt-20 px-4 border-b border-sys-light-outline',
        )}
        style={{ ...rest, height: size }}
      >
        {transitions((style, item) => {
          if (item.type === 'link' && item.link !== undefined) {
            return (
              <animated.li
                className={cn(
                  'z-10 will-change-[opacity, transform before:h-1 ',
                  currPath === item.link
                    ? 'font-bold text-primary-default '
                    : 'font-medium text-sys-light-onSurface ',
                )}
                style={{ ...style }}
                onClick={() => {
                  setMobileMenuActive(false);
                  setHamburgerAction('showMenu');
                }}
              >
                <Link href={item.link}>
                  <span>{item.label}</span>
                </Link>
              </animated.li>
            );
          } else if (item.type === 'button' && item.link !== undefined) {
            return (
              <animated.li
                className="z-10 will-change-[opacity, transform] "
                style={{ ...style }}
              >
                <div className="lg:hidden block">
                  <Button
                    size="lg"
                    buttonStyle="filled"
                    label={item.label}
                    withIcon
                    icon={<ArrowOutwardRounded />}
                    onClick={(e) => {
                      router.push(item.link ?? '/');
                    }}
                  />
                </div>
              </animated.li>
            );
          } else {
            return (
              <Dropdown
                style={style}
                item={item}
                setItem={setSubMenu}
                setShowSubMenu={setShowSubMenu}
                setHamburgerAction={setHamburgerAction}
              />
            );
          }
        })}
      </animated.ul>

      <SubMenu item={subMenu} isShow={showSubMenu} setIsShow={setShowSubMenu} />
    </>
  );
};

export default MenuMobile;
