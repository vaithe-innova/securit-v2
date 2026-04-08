import Hero from '@/components/home/Hero';
import Counter from '@/components/home/Counter';
import HowItWorks from '@/components/home/HowItWorks';
import Facts from '@/components/home/Facts';
import Platform from '@/components/home/Platform';
import Industries from '@/components/home/Industries';
import StartFree from '@/components/home/StartFree';
import WhatWeOffer from '@/components/home/WhatWeOffer';
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
      <WhatWeOffer />
      <HowItWorks />
      <Facts />
      <Platform />
      <Industries />
      <DeploymentTimeline />
      <StartFree />
      <ContactInfo />
    </main>
  );
};

export default page;
