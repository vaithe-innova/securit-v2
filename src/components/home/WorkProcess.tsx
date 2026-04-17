'use client';

import RevealAnimation from "../animation/RevealAnimation";

const steps = [
  { id: '01', title: 'Research', desc: 'Understanding requirements' },
  { id: '02', title: 'Planning', desc: 'Strategy & wireframes' },
  { id: '03', title: 'Development', desc: 'Building the product' },
  { id: '04', title: 'Launch', desc: 'Deploy & optimize' },
];

export default function WorkProcessSticky() {
  return (
    <>
    <section id='platform' className="bg-[#EFF6FF] dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-6 w-full text-center">
          <div className="flex flex-col justify-start lg:pr-6 mb-6 md:mb-0 space-y-5">
            <RevealAnimation delay={0.2} direction="left" animationType="from" offset={100} useSpring={true} repeatative>
              <div className="inline-block border border-[#0070CE] dark:border-primary-500/30 bg-white dark:bg-transparent rounded-[30px] px-5 py-[6px] w-max ">
                <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                  Platform Capabilities
                </span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="down" offset={30}>
              <h2 className="font-bold text-primary-700 dark:text-white text-[22px] sm:text-[26px] lg:text-[30px] !leading-[28px] sm:!leading-[32px] lg:!leading-[34px]">
                Purpose-built safety, Designed for every worker
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="down" offset={30}>
              <p className="text-secondary text-base sm:text-[20px] !leading-[24px] sm:!leading-[26px] opacity-90">
                Connect devices, sensors, and workflows to monitor activity, detect risks, and respond faster.
              </p>
            </RevealAnimation>
          </div>

        <div className="relative">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="sticky"
              style={{ top: `${100 + i * 20}px`, zIndex: 10 + i }}
            >
              <div className="mb-10 p-8 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
                <h3 className="text-2xl font-semibold mb-2">
                  {step.id} — {step.title}
                </h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        </div>
      </div>
    </section>
    </>
  );
}