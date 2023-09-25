import Image from 'next/image';
import Heading from '../../components/heading';

interface Props {
  aboutData: any;
}

const VisionAndMissions = ({ aboutData }: Props) => {
  return (
    <section className="md:mx-xl xs:mx-xs flex md:flex-row xs:flex-col-reverse md:gap-6 xs:gap-10">
      {/* Missions */}
      <div className="flex flex-col md:gap-10 xs:gap-4">
        <Image
          className="md:h-[43.8125rem] xs:h-[22.5625rem] w-full object-cover"
          width={700}
          height={700}
          src={aboutData.mission_image}
          alt="Neuron Picture"
        />

        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            darkBg={false}
            heading={aboutData.mission_subtitle}
            subheading={aboutData.mission_title}
          />

          {/* Body */}
          <div className="md:text-desktop-body-large xs:text-mobile-body font-medium">
            <p>{aboutData.mission_desc}</p>
            <br />
            <ul className="ml-6 list-disc">
              {aboutData.mission_lists.map((item: any) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="flex md:flex-col xs:flex-col-reverse md:gap-10 xs:gap-4">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Heading
            darkBg={false}
            heading={aboutData.vision_subtitle}
            subheading={aboutData.vision_title}
          />

          {/* Body */}
          <p className="md:text-desktop-body-large xs:text-mobile-body font-medium">
            {aboutData.vision_desc}
          </p>
        </div>

        <Image
          className="md:h-[43.8125rem] xs:h-[22.5625rem] w-full object-cover"
          width={668}
          height={701}
          src={aboutData.vision_image}
          alt="Neuron Picture"
        />
      </div>
    </section>
  );
};

export default VisionAndMissions;
