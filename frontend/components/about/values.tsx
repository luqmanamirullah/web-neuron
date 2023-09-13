import React from 'react';
import Heading from '../heading';

type Props = {};

const Values = (props: Props) => {
  return (
    <section className="h-screen mx-10 mt-[120px] flex flex-col gap-16">
      <Heading
        darkBg={false}
        heading={'Foundation of Our Core Values'}
        subheading={'Our Values'}
      />
      <ul className="w-full grid grid-cols-3 gap-x-6 gap-y-10">
        <li>
          <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
            INNOVATION FOR SOLUTIONS
          </h5>
          <p className="text-[18px] font-normal leading-[26px] text-center">
            Every challenge is an opportunity, and every solution is a step
            toward progress.
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
            We are committed to always focusing and being disciplined in
            adhering to scientific principles in developing reliable software to
            create zero-bug software.
          </p>
        </li>

        <li>
          <h5 className="text-[25px] font-bold leading-[32px] text-center mb-2">
            EFFECTIVE TEAMWORK
          </h5>
          <p className="text-[18px] font-normal leading-[26px] text-center">
            An environment of collaborative excellence, mutual respect, and
            common objectives
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
    </section>
  );
};

export default Values;
