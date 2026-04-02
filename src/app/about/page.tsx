import OurMission from '@/components/about/OurMission';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About - Analytics & Reporting || Securit',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <OurMission />
    </main>
  );
};

export default page;
