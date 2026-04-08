// import CTA from '@/components/shared/cta/CTA';
// import TermsConditionContent from '@/components/terms-conditions/TermsConditionContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Terms & Conditions - Securit || Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 h-[50vh]">
      {/* <TermsConditionContent /> */}
    </main>
  );
};

export default page;
