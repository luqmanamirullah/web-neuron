import CtaContactUs from '@/components/ctaContactUs';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import type { Metadata } from 'next';
import { inter, raleway } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Transforming your business into best digital experience',
    template: '%s | Neuronworks Company',
  },
  description:
    'Neuronworks is a software house company based in Bandung and Jakarta, Indonesia. We help businesses transform into digital products.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={raleway.variable + ' ' + inter.variable}>
      <body>
        <Navbar />
        <main className="overflow-x-hidden w-full max-w-[1440px] 2xl:mx-auto relative">
          {children}
        </main>
        <footer className="w-full  max-w-[1440px] 2xl:mx-auto">
          <CtaContactUs />
          <Footer />
        </footer>
      </body>
    </html>
  );
}
