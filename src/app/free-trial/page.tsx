import { defaultMetadata } from '@/utils/generateMetaData';
import FreeTrialWelcome from '@/components/shared/FreeTrialWelcome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - Free Trail Access || Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <div className='pt-[50px]'>
        <FreeTrialWelcome />
      </div>
    </main>
  );
};

export default page;
