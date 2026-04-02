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
          className="bg-blue-light"
          badgeClass="!badge-yellow-v2"
          inputFieldClass='border-stroke-11 bg-background-13 placeholder:text-ns-gray-light focus:border-secondary/50 focus:bg-white placeholder:text-tagline-2 h-[48px] w-full rounded-xl border px-[18px] py-3 text-base font-normal placeholder:font-normal focus:outline-none xl:h-[56px]'
          ctaHeading="Custom Pricing Built Around Your Needs"
          headingClass='fw-700 text-primary-700 text-3xl lg:text-4xl w-[100%]'
          description="We’re currently onboarding early users. Enter your email, and our team will connect with you to discuss pricing and find the right fit for your use case."
          descriptionClass='!leading-[22px] text-secondary text-sm md:text-base'
          ctaBtnText="Contact Us"
          btnClass="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white max-md:w-full font-bold"
        />
        <Faq />
      </div>
    </main>
  );
};

export default page;
