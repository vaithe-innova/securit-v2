import Hero from '@/components/home/Hero';
import Platform from '@/components/home/Platform';
import Industries from '@/components/home/Industries';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import DeploymentTimeline from '@/components/home/DeploymentTimeline';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit - Innova Solutions',
};

const page = () => {
  return (
    <main className="bg-background-2 dark:bg-background-5">
      <Hero />
      <WhatWeOffer />
      <Platform />
      <DeploymentTimeline />
      <Industries />
    </main>
  );
};

export default page;
