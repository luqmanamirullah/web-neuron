import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const cn: any = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export default cn;
