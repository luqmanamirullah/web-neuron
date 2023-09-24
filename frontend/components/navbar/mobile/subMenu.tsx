import { type Menu } from '@/data/menus';
import useShowListAnim from '@/hooks/useShowListAnim';
import cn from '@/utils/cn';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { SvgIcon } from '@mui/material';
import { animated, useSpringRef } from '@react-spring/web';
import Link from 'next/link';
import React from 'react';

interface Props {
  item: Menu[];
  isShow: boolean;
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const SubMenu: React.FC<Props> = ({ item, isShow, setIsShow }) => {
  const springRef = useSpringRef();
  const transRef = useSpringRef();

  // use custom hook to animate menu
  const { size, rest, transitions } = useShowListAnim<Menu>({
    activeTrigger: isShow,
    springRef,
    transRef,
    list: item,
    sizeType: '%',
  });
  return (
    <animated.ul
      className={cn(
        'lg:hidden h-screen  absolute top-0 left-0 bg-white flex flex-col gap-s items-center px-4 text-mobile-title md:text-desktop-title z-40 pt-20 will-change-transform overflow-auto',
        isShow ? 'translate-x-0' : '-translate-x-full',
      )}
      style={{ ...rest, width: size }}
    >
      {transitions((style: any, item: any) => (
        <animated.li
          className="z-10 w-full sm:w-72 md:w-96  will-change-[opacity, transform] text-sys-light-onSurface font-semibold hover:text-sys-light-primary cursor-pointer group "
          style={{ ...style }}
        >
          <Link href={item.link}>
            <div className="flex items-center gap-1 group-hover:gap-2">
              <h1 className="delay-100">{item.label}</h1>
              <SvgIcon
                fontSize="small"
                className="group-hover:rotate-45 transition-all ease-in-out duration-300"
                color="inherit"
              >
                <ArrowOutwardRounded />
              </SvgIcon>
            </div>
            <p className="font-normal text-mobile-body text-sys-light-onSurfaceVariant group-hover:text-sys-light-primary transition-all ease-in-out duration-300 delay-100">
              {item.subLabel}
            </p>
          </Link>
        </animated.li>
      ))}
    </animated.ul>
  );
};

export default SubMenu;
