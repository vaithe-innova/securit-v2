import Faq from '@/components/pricing/Faq';
// import Pricing from '@/components/pricing/Pricing';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - Pricing - Product Price || Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <CTA
        className="dark:bg-background-5 bg-background-1"
        badgeText="Get started"
        badgeClass="!badge-yellow-v2"
        ctaHeading="Build a complete website using the assistance"
        description="Start your free trial today and see your ideas come to life easily and creatively."
        ctaBtnText="Get started"
        btnClass="btn-primary hover:btn-secondary dark:hover:btn-accent"
      />
      {/* <Pricing /> */}
      <Faq />
    </main>
  );
};

export default page;
