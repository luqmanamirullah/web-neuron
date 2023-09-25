'use client';
import cn from '@/utils/cn';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import './mui-tab.css';
import { a11yProps } from './tabPane';

interface Props {
  tabs: string[];
  id: string;
  children: React.ReactNode;
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => any;
  center?: boolean;
}

const NeuronTab: React.FC<Props> = ({
  tabs,
  id,
  children,
  value,
  handleChange,
  center = false,
}) => {
  return (
    <div className="w-full md:my-10 my-4">
      <div className={`border-transparent relative`}>
        <Tabs
          classes={{
            indicator: 'bg-core-primary',
            root: center ? 'justify-center' : '',
            scroller: center ? 'flex-grow-0' : '',
          }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={true}
          className={'service-tab '}
        >
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab}
              className={cn(
                'service-tab-nav md:text-mobile-title text-subtitle font-semibold',
              )}
              {...a11yProps(index, id)}
            />
          ))}
        </Tabs>
      </div>
      {children}
    </div>
  );
};

export default NeuronTab;
