import Hero from '@/components/home/Hero';
// import Platform from '@/components/home/Platform';
import Industries from '@/components/home/Industries';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import DeploymentTimeline from '@/components/home/DeploymentTimeline';
import WorkProcess from '@/components/home/WorkProcess';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit is a worker safety platform that helps monitor, detect, and respond to risks in real time | by Innova Solutions ',
  description: 'Stay OSHA-aligned and ISO 45001-ready with real-time alerts, fall detection, incident management, and automated compliance tracking — all in one platform.',
  keywords: 'AI worker safety platform, Worker safety monitoring, Workplace safety software, AI-powered safety management, Real-time worker monitoring, Incident management software, Risk detection platform, Workforce safety visibility, Occupational health and safety software, Safety compliance platform, AI-powered workplace safety monitoring system, AI safety assistant for supervisors.'
};

const page = () => {
  return (
    <main id="main-content" className="bg-background-2 dark:bg-background-5">
      <Hero />
      <WhatWeOffer />
      {/* <Platform /> */}
      <WorkProcess />
      <DeploymentTimeline />
      <Industries />
    </main>
  );
};

export default page;
