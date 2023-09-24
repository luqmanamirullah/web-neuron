import { type Menu } from '@/data/menus';
import cn from '@/utils/cn';
import ArrowDropDownRounded from '@mui/icons-material/ArrowDropDownRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { SvgIcon } from '@mui/material';
import { type AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import React, { useState } from 'react';
import SubMenu from './subMenu';

interface Props {
  item: Menu;
  router: AppRouterInstance;
}

const Dropdown: React.FC<Props> = ({ item }) => {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  return (
    <li
      className="relative inline-flex items-center justify-center gap-1 cursor-pointer"
      onClick={() => {
        setShowSubMenu((showSubMenu) => !showSubMenu);
      }}
    >
      {item.type === 'lang' ? (
        <SvgIcon
          className="text-black transition-all duration-300"
          fontSize="small"
        >
          <TranslateRoundedIcon />
        </SvgIcon>
      ) : null}
      <span>{item.label}</span>
      <SvgIcon
        className={cn(
          'text-black',
          'transition-all duration-300',
          showSubMenu ? 'rotate-180' : 'rotate-0',
        )}
        fontSize="medium"
      >
        <ArrowDropDownRounded />
      </SvgIcon>

      {/* SubMenu */}
      <SubMenu item={item.children ?? []} isShow={showSubMenu} />
    </li>
  );
};

export default Dropdown;
