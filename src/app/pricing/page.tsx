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
      <div className='pt-[50px]'>
        <CTA
          className="dark:bg-background-5 bg-background-1"
          badgeClass="!badge-yellow-v2"
          ctaHeading="Custom Pricing Built Around Your Needs"
          headingClass='text-[32px] fw-[500] w-[100%]'
          description="We’re currently onboarding early users. Enter your email, and our team will connect with you to discuss pricing and find the right fit for your use case."
          ctaBtnText="Contact Us"
          btnClass="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white mr-6 font-bold"
        />
        <Faq />
      </div>
    </main>
  );
};

export default page;
