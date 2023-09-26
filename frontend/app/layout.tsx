import getCtaContact from '@/api/getCtaContact';
import CtaContactUs from '@/components/ctaContactUs';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar/navbar';
import QueryProvider from '@/components/queryProvider';
import type { Metadata } from 'next';
import { inter, raleway } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default:
      'Neuronworks ~ Transforming your business into best digital experience',
    template: 'Neuronworks ~  | %s',
  },
  description:
    'Neuronworks is a software house company based in Bandung and Jakarta, Indonesia. We help businesses transform into digital products.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const contact = await getCtaContact();
  return (
    <html lang="en" className={raleway.variable + ' ' + inter.variable}>
      <body>
        <QueryProvider>
          <Navbar />
          <main className="overflow-x-hidden w-full max-w-[1440px] 2xl:mx-auto relative">
            {children}
          </main>
          <footer className="w-full  max-w-[1440px] 2xl:mx-auto">
            <CtaContactUs contact={contact} />
            <Footer />
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
