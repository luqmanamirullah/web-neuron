import { type Menu } from '@/data/menus';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import React from 'react';

import Button from '@/components/button';

import Dropdown from '@/components/navbar/desktop/dropdown';
import cn from '@/utils/cn';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
import Link from 'next/link';

interface Props {
  item: Menu[];
  router: AppRouterInstance;
  currPath: string;
}

const MenuDesktop: React.FC<Props> = ({ item, router, currPath }) => {
  return (
    <ul className="hidden lg:flex gap-md items-center text-desktop-body text-sys-light-onSurface font-medium">
      {item.map((menu: Menu, index: number) => {
        if (menu.type === 'link' && menu.link !== undefined) {
          return (
            <li
              key={index}
              className={cn(
                'relative before:content-[""] before:h-1 before:absolute before:-bottom-1 before:bg-primary-default before:left-0 before:transition-all before:duration-300',
                currPath === menu.link
                  ? 'before:w-8 font-bold'
                  : 'before:w-0 font-medium',
              )}
            >
              <Link href={menu.link ?? '/'} passHref={true}>
                <span>{menu.label}</span>
              </Link>
            </li>
          );
        } else if (menu.type === 'button' && menu.link !== undefined) {
          return (
            <li
              key={index}
              className={cn(
                currPath === menu.link
                  ? 'text-sys-light-primary'
                  : 'text-sys-light-onSurface',
              )}
            >
              <Button
                size="sm"
                buttonStyle="filled"
                label={menu.label}
                className={
                  currPath === menu.link
                    ? 'bg-primary-default'
                    : 'bg-sys-light-primary'
                }
                withIcon
                icon={<ArrowOutwardRounded />}
                onClick={() => {
                  router.push((menu.link as string) ?? '/');
                }}
              />
            </li>
          );
        } else {
          return <Dropdown key={index} item={menu} router={router} />;
        }
      })}
    </ul>
  );
};

export default MenuDesktop;
