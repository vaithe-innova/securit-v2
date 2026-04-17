'use client';
import Image from 'next/image';
import { TickIcon } from '@/icons';
import RevealAnimation from "../animation/RevealAnimation";

const steps = [
  {
    id: '01',
    category: 'Connectivity',
    title: 'Input Layer—where activity is captured',
    desc: 'Real-time inputs from workers, devices, & environmental conditions.',
    features: [
      'Mobile safety application',
      'SOS emergency alerts',
      'Fall detection',
      'Environmental monitoring',
    ],
    image: '/demo/images/platform/1-connectivity.jpg',
  },
  {
    id: '02',
    category: 'Intelligence',
    title: 'Processing Layer—turning data into intelligence',
    desc: 'AI turns operational data into actionable safety insights.',
    features: [
      'AI-powered operational intelligence',
      'Anomaly detection',
      'Live sensor threshold alerts',
    ],
    image: '/demo/images/platform/2-intelligence.jpg',
  },
  {
    id: '03',
    category: 'Action',
    title: 'Control Layer—coordinating operations',
    desc: 'Field-ready tools for fast and coordinated response.',
    features: [
      'Mobile safety applications',
      'Geofencing alerts',
      'SOS-triggered workflows & escalation',
    ],
    image: '/demo/images/platform/3-action.jpg',
  },
  {
    id: '04',
    category: 'Control',
    title: 'Field Layer—enabling action on the ground',
    desc: 'Centralized platform to manage safety operations and incidents.',
    features: [
      'Workforce visibility dashboard',
      'Incident management',
      'Policy enforcement',
      'Automated compliance tracking'
    ],
    image: '/demo/images/platform/4-control.jpg',
  },
];

export default function WorkProcessSticky() {
  return (
    <>
      <section id='platform' className="bg-[#EFF6FF] dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
        <div className="main-container">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-6 w-full text-center">
            <div className="flex flex-col justify-start mb-7 space-y-4">
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
                  <div className="bg-white rounded-[1.5rem] border-[1px] border-[#D3D3D3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden mb-[20px]">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-5 lg:p-10">
                      {/* Left Column Content */}
                      <div>
                        <div className='flex flex-col text-left'>
                          <span className="text-primary-600 text-sm mb-2 block">
                            {step.category}
                          </span>
                          <h3 className="text-[24px] lg:text-[28px] font-bold text-primary-900 mb-4 leading-[1.1] tracking-tight">
                            {step.title}
                          </h3>
                          <p className="text-lg text-primary-400 mb-6 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>

                        <ul className="space-y-5">
                          {step.features.map((feature, i) => (
                            <li
                              key={i}
                              className="flex items-center gap-4 text-secondary"
                            >
                              <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                                <TickIcon />
                              </span>
                              <span className="text-[18px] text-secondary tracking-tight">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right Column Image */}
                      <div className='lg:block md:block sm:hidden xs:hidden'>
                        <div className="relative aspect-[4/3] lg:aspect-[1.5/1] rounded-[2rem] overflow-hidden shadow-xl">
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority={i === 0}
                          />
                        </div>
                      </div>
                    </div>
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