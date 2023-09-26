import { type About } from '@/interface';
import Heading from '../../components/heading';
import Section from '../section';
import VisionImage from '../svg/visionImage';

interface Props {
  aboutData: About;
}

const VisionAndMissions: React.FC<Props> = ({ aboutData }) => {
  return (
    <Section className="max-h-fit flex md:flex-row flex-col-reverse md:gap-6 gap-10">
      {/* Missions */}
      <div className="flex flex-col md:gap-10 gap-4">
        <VisionImage
          flipImage={false}
          imageId="missionImage"
          imageUrl={aboutData.mission_image}
          className="lg:h-[43.8125rem] h-auto w-full object-cover"
        />

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            alignCenter={false}
            darkBg={false}
            heading={aboutData.mission_subtitle}
            subheading={aboutData.mission_title}
          />

          {/* Body */}
          <div className="md:text-desktop-body-large text-mobile-body font-medium">
            <p>{aboutData.mission_desc}</p>
            <br />
            <ul className="ml-6 list-disc">
              {aboutData.mission_lists.map((item: any, index: number) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="flex md:flex-col flex-col-reverse md:gap-10 gap-4">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            alignCenter={false}
            darkBg={false}
            heading={aboutData.vision_subtitle}
            subheading={aboutData.vision_title}
          />

          {/* Body */}
          <p className="md:text-desktop-body-large text-mobile-body font-medium">
            {aboutData.vision_desc}
          </p>
        </div>

        <VisionImage
          flipImage={true}
          imageId="visionImage"
          imageUrl={aboutData.vision_image}
          className="lg:h-[43.8125rem] scale-x-[-1] h-auto w-full object-cover"
        />
      </div>
    </Section>
  );
};

export default VisionAndMissions;
