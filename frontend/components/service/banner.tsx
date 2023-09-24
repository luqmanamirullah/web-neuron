import ScrollingImage from './scrollingImage';

const Banner: React.FC = () => {
  return (
    <>
      <section className="absolute -top-1/2 sm:-left-40 -left-28  md:w-2/5 w-1/2 flex justify-center items-center flex-col gap-md h-[130%]  -rotate-12 ">
        <ScrollingImage />
      </section>
      <section className="absolute -top-1/2 left-1/2 -translate-x-1/2 md:w-2/5 w-1/2 flex flex-col justify-center items-center gap-md h-[130%] -rotate-12">
        <ScrollingImage inverse />
      </section>
      <section className="absolute -top-1/2 sm:-right-40 -right-28 md:w-2/5 w-1/2 flex flex-col justify-center items-center gap-md h-[130%] -rotate-12">
        <ScrollingImage />
      </section>
    </>
  );
};

export default Banner;
