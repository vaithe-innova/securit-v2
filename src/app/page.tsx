import Hero from '@/components/home/Hero';
import Counter from '@/components/home/Counter';
import UseCases from '@/components/home/UseCases';
import Feature from '@/components/home/Feature';
// import About from '@/components/home/About';
import DeploymentTimeline from '@/components/home/DeploymentTimeline';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Analytics & Reporting - NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Counter />
      <div className="dark">
        <UseCases />
      </div>
      <Feature />
      {/* <About /> */}
      <DeploymentTimeline />
    </main>
  );
};

export default page;
