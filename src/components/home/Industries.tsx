'use client';

import { TabProvider } from '../../context/TabContext';
import RevealAnimation from '../animation/RevealAnimation';
import IndustriesDesktopTabs from './IndustriesDesktopTabs';
import IndustriesMobileAccordion from './IndustriesMobileAccordion';
import IndustriesTabContent from './IndustriesTabContent';

const Industries = () => {
  return (
    <RevealAnimation delay={0.3}>
      <section className="dark:bg-background-6 overflow-hidden bg-blue-light pt-20 pb-14">
        <div className="main-container">

          {/* Heading */}
          <div className="mx-auto mb-10 max-w-[1024px] space-y-5 text-center md:mb-[70px]">
            <RevealAnimation delay={0.2}>
              <span className="uppercase text-primary-500 tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal">
                Industries
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 max-w-[680px] mx-auto text-primary-700 fw-700 text-3xl lg:text-4xl">
                Built for environments where safety moves fast
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <p className="text-secondary dark:text-accent/60 mx-auto max-w-[1000px]">
                Safety systems generate plenty of information, but it’s fragmented across tools, delayed in reaching the right people, and difficult to act on in the moment. Without a clear, real-time view and coordinated response, critical signals are missed—leading to unnecessary risk, costly disruptions, and avoidable harm. Rather than forcing a one-size-fits-all approach, the platform allows organizations to apply the same foundation of awareness in ways that feel natural for their teams.  
              </p>
            </RevealAnimation>
          </div>

          {/* ✅ DESKTOP ONLY */}
          <div className="hidden lg:block">
            <TabProvider defaultValue={0}>
              <IndustriesDesktopTabs />
              <IndustriesTabContent />
            </TabProvider>
          </div>

          {/* ✅ MOBILE ONLY */}
          <div className="block lg:hidden">
            <IndustriesMobileAccordion />
          </div>

        </div>
      </section>
    </RevealAnimation>
  );
};

export default Industries;