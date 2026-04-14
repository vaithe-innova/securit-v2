import Faq from '@/components/faq/Faq';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Securit is a worker safety platform that helps monitor, detect, and respond to risks in real time | by Innova Solutions ',
  description: 'Stay OSHA-aligned and ISO 45001-ready with real-time alerts, fall detection, incident management, and automated compliance tracking — all in one platform.',
  keywords: 'AI worker safety platform, Worker safety monitoring, Workplace safety software, AI-powered safety management, Real-time worker monitoring, Incident management software, Risk detection platform, Workforce safety visibility, Occupational health and safety software, Safety compliance platform, AI-powered workplace safety monitoring system, AI safety assistant for supervisors.'
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Faq />
    </main>
  );
};

export default page;
