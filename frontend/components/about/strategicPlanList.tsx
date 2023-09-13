import React from 'react';

interface Plan {
  content: Array<{
    title: string;
    desc: string;
  }>;
}

interface Props {
  plan: Plan;
  active: boolean;
}

const StrategicPlanList = ({ plan, active }: Props) => {
  return (
    <div
      className={`overflow-hidden grid grid-cols-4 gap-8 text-[#C4C7C7] duration-[400ms] transition-all ${
        active ? 'mt-6 mb-2' : 'h-0 opacity-0 -translate-y-4'
      }`}
    >
      {plan.content.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-2">
            <h2 className="text-[18px] leading-[26px] font-bold">
              {item.title}
            </h2>
            <p className="text-[14px] leading-[20px]">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StrategicPlanList;
