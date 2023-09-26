import { type About } from '@/interface';
import Heading from '../heading';
import Section from '../section';

interface Props {
  aboutData: About;
}

const Values: React.FC<Props> = ({ aboutData }) => {
  return (
    <Section className="h-fit  mt-[7.5rem] flex flex-col md:gap-16 xs:gap-8">
      <Heading
        darkBg={false}
        heading={aboutData.data.value_subtitle}
        subheading={aboutData.data.value_title}
      />
      <ul className="w-full grid md:grid-cols-3 xs:grid-cols-1 md:gap-x-6 xs:gap-x-0 gap-y-10">
        {aboutData.data.value_lists.map((item: any, index: number) => {
          return (
            <li key={index}>
              <h5 className="md:text-desktop-title xs:text-mobile-title font-bold text-center md:mb-2 xs:mb-1">
                {item.title}
              </h5>
              <p className="md:text-desktop-body xs:text-mobile-body font-normal text-center">
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Values;
