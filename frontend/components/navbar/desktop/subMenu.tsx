import { type Menu } from '@/data/menus';
import useShowMenuAnim from '@/hooks/useShowMenuAnim';
import cn from '@/utils/cn';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import { SvgIcon } from '@mui/material';
import { animated, useSpringRef } from '@react-spring/web';
import Link from 'next/link';
import React from 'react';

interface Props {
  item: Menu[];
  isShow: boolean;
}

const SubMenu: React.FC<Props> = ({ item, isShow }) => {
  const springRef = useSpringRef();
  const transRef = useSpringRef();

  // use custom hook to animate menu
  const { size, rest, transitions } = useShowMenuAnim<Menu>({
    activeTrigger: isShow,
    springRef,
    transRef,
    list: item,
  });

  return (
    <animated.ul
      className={cn(
        'absolute top-0 -left-1/2 mt-10 bg-white flex flex-col gap-s items-start p-4 text-desktop-body z-20  will-change-transform transition-all duration-500 overflow-auto border border-black rounded',
        isShow ? 'opacity-100' : 'opacity-0 pointer-events-none',
      )}
      style={{ ...rest, scale: size }}
    >
      {transitions((style: any, item: any) => (
        <animated.li
          className="z-10 w-max will-change-[opacity, transform] text-sys-light-onSurface font-semibold hover:text-sys-light-primary cursor-pointer group transition-all ease-in-out duration-300"
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
            <p className="font-normal text-subtitle text-sys-light-onSurfaceVariant group-hover:text-sys-light-primary transition-all ease-in-out duration-300 delay-100">
              {item.subLabel}
            </p>
          </Link>
        </animated.li>
      ))}
    </animated.ul>
  );
};

export default SubMenu;
