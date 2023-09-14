import cn from '@/utils/cn';
import SvgIcon from '@mui/material/SvgIcon';
import React from 'react';
import { tv } from 'tailwind-variants';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  withIcon?: boolean;
  icon?: React.ReactNode;
  size: 'sm' | 'md' | 'lg';
  buttonStyle: 'filled' | 'outlined' | 'text';
}

const button = tv({
  base: 'inline-flex justify-center items-center flex-shrink-0 rounded transition-color duration-300',
  variants: {
    size: {
      sm: 'h-10 px-6 text-button-small gap-xs font-medium',
      md: 'h-12 px-8 text-button-medium gap-xs uppercase font-medium',
      lg: 'h-14 px-10 text-button-large gap-s uppercase font-medium',
    },

    buttonStyle: {
      filled:
        'bg-sys-light-primary text-sys-light-onPrimary hover:bg-primary-default focus:active:bg-sys-light-primary',
      outlined:
        'bg-transparent text-sys-light-primary border border-sys-light-outline hover:bg-primary-default hover:text-sys-light-onPrimary focus:bg-sys-light-primary focus:border-sys-light-primary focus:text-sys-light-onPrimary active:bg-sys-light-primary active:border-sys-light-outline disabled:text-sys-light-onSurfaceVariant disabled:opacity-50',
      text: 'bg-transparent text-sys-light-primary hover:bg-primary-default/10  focus:bg-primary-default/20 active:bg-primary-default/30 disabled:text-sys-light-onSurfaceVariant disabled:bg-[#1D1B201F]',
    },
  },
  defaultVariants: {
    size: 'md',
    buttonStyle: 'filled',
  },
});

const Button: React.FC<Props> = ({
  label,
  size,
  buttonStyle,
  withIcon = true,
  icon,
  ...rest
}) => {
  return (
    <button
      className={cn(
        button({
          size,
          buttonStyle,
        }),
        withIcon && size === 'sm'
          ? 'pl-6 pr-4'
          : withIcon && size === 'md'
          ? 'pl-8 pr-6'
          : withIcon && size === 'lg'
          ? 'pl-10 pr-8'
          : '',
      )}
      {...rest}
    >
      <p
        className={
          size === 'sm'
            ? 'text-button-small'
            : size === 'md'
            ? 'text-button-medium'
            : 'text-button-large'
        }
      >
        {label}
      </p>
      {withIcon ? (
        <SvgIcon
          className={
            size === 'sm'
              ? 'text-[1rem]'
              : size === 'md'
              ? 'text-[1rem]'
              : 'text-[1.5rem]'
          }
          color="inherit"
        >
          {icon}
        </SvgIcon>
      ) : null}
    </button>
  );
};

export default Button;
