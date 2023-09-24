import cn from '@/utils/cn';

interface Props {
  children?: React.ReactNode;
  index: number;
  value: number;
  id: string;
  className?: string;
}

export function a11yProps(index: number, id: string): Record<string, unknown> {
  return {
    id: `${id}-tab-${index}`,
    'aria-controls': `${id}-tabpanel-${index}`,
  };
}

const CustomTabPanel: React.FC<Props> = ({
  children,
  value,
  index,
  id,
  className = '',
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      className={cn('relative', className)}
      hidden={value !== index}
      id={`${id}-tabpanel-${index}`}
      aria-labelledby={`${id}-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-4">{children}</div>}
    </div>
  );
};
export default CustomTabPanel;
