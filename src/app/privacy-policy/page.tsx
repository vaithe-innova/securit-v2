// import PrivacyContent from '@/components/privacy/PrivacyContent';
// import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacy Policy - Securit || Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7 h-[50vh]">
      {/* <PrivacyContent /> */}
    </main>
  );
};

export default page;
