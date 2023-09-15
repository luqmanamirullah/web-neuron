import { type Menu } from '@/data/menus';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import { SvgIcon } from '@mui/material';
import { animated, type SpringValue } from '@react-spring/web';
import React from 'react';

interface Props {
  style: {
    opacity: SpringValue<number>;
    scale: SpringValue<number>;
    y: SpringValue<number>;
  };
  item: Menu;
  setItem: React.Dispatch<React.SetStateAction<Menu[]>>;
  setShowSubMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setHamburgerAction: React.Dispatch<React.SetStateAction<string>>;
}

const Dropdown: React.FC<Props> = ({
  style,
  item,
  setItem,
  setShowSubMenu,
  setHamburgerAction,
}) => {
  return (
    <animated.li
      className="z-10 will-change-[opacity, transform] "
      style={{ ...style }}
      onClick={() => {
        setItem(item.children ?? []);
        setHamburgerAction('hideSubMenu');
        setShowSubMenu(true);
      }}
    >
      <div className="inline-flex items-center justify-center gap-1">
        <span>{item.label}</span>
        <SvgIcon className="text-black" fontSize="large">
          <ArrowRightRoundedIcon />
        </SvgIcon>
      </div>
    </animated.li>
  );
};

export default Dropdown;
