'use client';

import RevealAnimation from '../animation/RevealAnimation';
import Image from 'next/image';
import { TickIcon } from '@/icons';
import feature1 from '@public/images/Inbound.gif';
import intelligenceIcon from '@public/images/icons/intelligence_icon.svg';
import signalIcon from '@public/images/icons/signal_icon.svg';
import controlIcon from '@public/images/icons/control_icon.svg';
import actionIcon from '@public/images/icons/action_icon.svg';

// Feature list
const intelligenceList = {
  title: 'Intelligence',
  titleIcon: intelligenceIcon,
  description: 'AI turns operational data into actionable safety insights.',
  list: [
    {
      id: 1,
      text: 'AI-powered operational intelligence',
    },
    {
      id: 2,
      text: 'Anomaly detection',
    },
    {
      id: 3,
      text: 'Live sensor threshold alerts',
    }
  ]
};

const signalList = {
  title: 'Signal',
  titleIcon: signalIcon,
  description: 'Real-time inputs from workers, devices, & environmental conditions.',
  list: [
    {
      id: 1,
      text: 'Mobile safety applications',
    },
    {
      id: 2,
      text: 'SOS emergency alerts',
    },
    {
      id: 3,
      text: 'Fall detection',
    },
    {
      id: 4,
      text: 'Environmental monitoring',
    }
  ]
};

const controlList = {
  title: 'Control',
  titleIcon: controlIcon,
  description: 'Centralized platform to manage safety operations and incidents.',
  list: [
    {
      id: 1,
      text: 'Workforce visibility dashboard',
    },
    {
      id: 2,
      text: 'Incident management',
    },
    {
      id: 3,
      text: 'Policy enforcement',
    },
    {
      id: 4,
      text: 'Automated compliance tracking',
    },
  ]
};

const actionList = {
  title: 'Action',
  titleIcon: actionIcon,
  description: 'Field-ready tools for fast and coordinated response.',
  list: [
    {
      id: 1,
      text: 'Mobile safety applications',
    },
    {
      id: 2,
      text: 'Geofencing alerts',
    },
    {
      id: 3,
      text: 'SOS-triggered workflows & escalation',
    },
  ]
};

const Platform = () => {
  return (
    <section className="bg-[#EFF6FF] dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">

        <RevealAnimation delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">

            {/* Top Left: Heading Area */}
            <div className="flex flex-col justify-start lg:pr-6 mb-6 md:mb-0 space-y-5">
              <RevealAnimation delay={0.2}>
                <div className="inline-block border border-primary-200 dark:border-primary-500/30 bg-white dark:bg-transparent rounded-full px-5 py-[6px] w-max">
                  <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                    Platform Capabilities
                  </span>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="font-bold text-primary-700 dark:text-white text-[30px] !leading-[34px]">
                  One platform for safety visibility
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="text-secondary text=[20px] !leading-[26px]">
                  Connect devices, sensors, and workflows to monitor activity, detect risks, and respond faster.
                </p>
              </RevealAnimation>
            </div>



            {/* Bottom Left: Diagram */}
            <div className="flex lg:hidden items-center justify-center bg-white dark:bg-background-5 rounded-3xl shadow-sm min-h-[300px] border border-primary-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <div className="relative w-full">
                <Image src={feature1} alt="Platform" className="h-full w-auto object-contain rounded-3xl" />
              </div>
            </div>

            {/* Top Middle: Signal */}
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-6 md:p-8 shadow-sm border border-primary-200 dark:border-primary-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <h3 className="text-secondary font-semibold md:text-[25px] mb-3 flex items-center gap-2">
                <Image src={signalList.titleIcon} alt={signalList.title} className="h-[32px] w-auto inline-block transition-transform duration-300 group-hover:scale-110" /> {signalList.title}
              </h3>
              <p className="text-[#53575A] text-sm sm:text-base mb-6 !leading-[24px]">
                {signalList.description}
              </p>
              <ul className="space-y-4">
                {signalList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-200 group-hover/item:scale-110">
                      <TickIcon />
                    </span>
                    <span className="text-secondary text-sm sm:text-base !leading-[21px] transition-colors duration-200 group-hover/item:text-primary-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Top Right: Intelligence */}
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-6 md:p-8 shadow-sm border border-primary-200 dark:border-primary-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <h3 className="text-secondary font-semibold md:text-[25px] mb-3 flex items-center gap-2">
                <Image src={intelligenceList.titleIcon} alt={intelligenceList.title} className="h-[32px] w-auto inline-block transition-transform duration-300 group-hover:scale-110" /> {intelligenceList.title}
              </h3>
              <p className="text-[#53575A] text-sm sm:text-base mb-6 !leading-[24px]">
                {intelligenceList.description}
              </p>

              <ul className="space-y-4">
                {intelligenceList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-200 group-hover/item:scale-110">
                      <TickIcon />
                    </span>
                    <span className="text-secondary text-sm sm:text-base !leading-[21px] transition-colors duration-200 group-hover/item:text-primary-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>


            {/* Bottom Left: Diagram */}
            <div className="hidden lg:flex items-center justify-center bg-white dark:bg-background-5 rounded-3xl shadow-sm min-h-[300px] border border-primary-200 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <div className="relative w-full">
                <Image src={feature1} alt="Platform" className="h-full w-auto object-contain rounded-3xl" />
              </div>
            </div>

            {/* Bottom Middle: Action */}
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-6 md:p-8 shadow-sm border border-primary-200 dark:border-primary-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <h3 className="text-secondary font-semibold md:text-[25px] mb-3 flex items-center gap-2">
                <Image src={actionList.titleIcon} alt={actionList.title} className="h-[32px] w-auto inline-block transition-transform duration-300 group-hover:scale-110" /> {actionList.title}
              </h3>
              <p className="text-[#53575A] text-sm sm:text-base mb-6 !leading-[24px]">
                {actionList.description}
              </p>
              <ul className="space-y-4">
                {actionList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-200 group-hover/item:scale-110">
                      <TickIcon />
                    </span>
                    <span className="text-secondary text-sm sm:text-base !leading-[21px] transition-colors duration-200 group-hover/item:text-primary-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Right: Control */}
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-6 md:p-8 shadow-sm border border-primary-200 dark:border-primary-500/30 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_32px_rgba(0,112,206,0.18)] hover:border-primary-500">
              <h3 className="text-secondary font-semibold md:text-[25px] mb-3 flex items-center gap-2">
                <Image src={controlList.titleIcon} alt={controlList.title} className="h-[32px] w-auto inline-block transition-transform duration-300 group-hover:scale-110" />  {controlList.title}
              </h3>
              <p className="text-[#53575A] text-sm sm:text-base mb-6 !leading-[24px]">
                {controlList.description}
              </p>
              <ul className="space-y-4">
                {controlList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-200 group-hover/item:scale-110">
                      <TickIcon />
                    </span>
                    <span className="text-secondary text-sm sm:text-base !leading-[21px] transition-colors duration-200 group-hover/item:text-primary-700">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Platform;
