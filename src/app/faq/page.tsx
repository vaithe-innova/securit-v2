import Faq from '@/components/faq/Faq';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - FAQ || Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Faq />
    </main>
  );
};

export default page;
