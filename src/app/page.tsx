import Hero from '@/components/home/Hero';
import Counter from '@/components/home/Counter';
import Approaches from '@/components/home/Approaches';
import Feature from '@/components/home/Feature';
import Industries from '@/components/home/Industries';
import AiIntelligence from '@/components/home/AiIntelligence';
import DeploymentTimeline from '@/components/home/DeploymentTimeline';
import ContactInfo from '@/components/home/ContactInfo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <Counter />
      <div className="dark">
        <Approaches />
      </div>
      <Feature />
      <Industries />
      <AiIntelligence />
      <DeploymentTimeline />
      <ContactInfo />
    </main>
  );
};

export default page;
