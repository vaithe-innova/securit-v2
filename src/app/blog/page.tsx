import RevealAnimation from '@/components/animation/RevealAnimation';
import BlogTabContent from '@/components/blog/BlogTabContent';
import BlogTabList from '@/components/blog/BlogTabList';
import { TabProvider } from '@/context/TabContext';
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
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container">
          <div className="mb-3 sm:max-w-[70%] mx-auto space-y-4 text-center">
            <RevealAnimation delay={0.2} direction="left" animationType="from" offset={100} useSpring={true} repeatative>
              <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#0070CE]">
                <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Blogs, News & Events </span>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <h2 className="text-primary-700 font-bold text-[22px] sm:text-[30px] !leading-[28px] sm:!leading-[34px] mb-2">
                Latest articles & <br className="hidden sm:block" /> News publish by Innova
              </h2>
            </RevealAnimation>
          </div>
          <div className="py-[10px]">
            <TabProvider defaultValue={0}>
              <BlogTabList />
              <BlogTabContent />
            </TabProvider>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
