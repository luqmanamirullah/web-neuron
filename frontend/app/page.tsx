import Button from '@/components/button';
import ArrowOutwardRounded from '@mui/icons-material/ArrowOutwardRounded';
function page(): JSX.Element {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full border-2 border-black h-screen flex flex-col justify-center items-center">
        <Button
          label="We Are Worth"
          size="sm"
          buttonStyle="text"
          withIcon
          icon={<ArrowOutwardRounded />}
        />

        <h1 className="text-button-large"> Hello World</h1>
      </section>
    </main>
  );
}

export default page;
