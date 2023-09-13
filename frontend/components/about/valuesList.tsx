import React from 'react';

type Props = {};

const ValuesList = (props: Props) => {
  return (
    <ul className="w-full grid grid-cols-3 gap-x-6 gap-y-10">
      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          INNOVATION FOR SOLUTIONS
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          Every challenge is an opportunity, and every solution is a step toward
          progress.
        </p>
      </li>

      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          CUSTOMER SATISFACTION
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          Delivering Professional Service with a Focus on Win-Win Solutions,
          Ensuring Rapid Responses within 24 Hours.
        </p>
      </li>

      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          RELIABLE APPLICATION
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          We are committed to always focusing and being disciplined in adhering
          to scientific principles in developing reliable software to create
          zero-bug software.
        </p>
      </li>

      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          EFFECTIVE TEAMWORK
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          An environment of collaborative excellence, mutual respect, and common
          objectives
        </p>
      </li>

      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          INNOVATE IN TECHNOLOGICAL ADVANCES
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          Explore emerging technologies and ideate creative solutions.
        </p>
      </li>

      <li>
        <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
          RESPONSIBILITY AND PRIORITY IN EVERY PROJECT
        </h5>
        <p className="text-[18px] font-normal leading-[26px] text-center">
          Accountable for every aspect of a project
        </p>
      </li>
    </ul>
  );
};

export default ValuesList;
