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
      text: 'Mobile safety application',
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
      text: 'Mobile safety application',
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
    <section id='platform' className="bg-[#EFF6FF] dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 w-full">
          <div className="flex flex-col justify-start lg:pr-6 mb-6 md:mb-0 space-y-5">
            <RevealAnimation delay={0.2}>
              <div className="inline-block border border-[#0070CE] dark:border-primary-500/30 bg-white dark:bg-transparent rounded-[30px] px-5 py-[6px] w-max ">
                <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                  Platform Capabilities
                </span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2} direction="down" offset={30}>
              <h2 className="font-bold text-primary-700 dark:text-white text-[30px] !leading-[34px]">
                Purpose-built safety, Designed for every worker
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3} direction="down" offset={30}>
              <p className="text-secondary text-[20px] !leading-[26px] opacity-90">
                Connect devices, sensors, and workflows to monitor activity, detect risks, and respond faster.
              </p>
            </RevealAnimation>
          </div>


          <RevealAnimation delay={0.4} animationType="to" direction="up" offset={50}>
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-8 md:p-10 shadow-sm border border-primary-100 dark:border-primary-500/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,112,206,0.15)] hover:border-primary-500">
              <h3 className="text-secondary dark:text-white font-bold text-[22px] md:text-[26px] mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  <Image src={signalList.titleIcon} alt={signalList.title} className="h-[32px] w-[32px] object-contain" />
                </div>
                {signalList.title}
              </h3>
              <p className="text-[#53575A] dark:text-accent/70 text-[15px] sm:text-[16px] mb-8 !leading-[24px]">
                {signalList.description}
              </p>
              <ul className="space-y-4">
                {signalList.list.map((feature, i) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item transition-all duration-300 transform translate-x-0 hover:translate-x-1">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                      <TickIcon />
                    </span>
                    <span className="text-secondary dark:text-accent text-[15px] sm:text-[16px] !leading-[22px] transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-400">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.5} animationType="to" direction="up" offset={50}>
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-8 md:p-10 shadow-sm border border-primary-100 dark:border-primary-500/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,112,206,0.15)] hover:border-primary-500">
              <h3 className="text-secondary dark:text-white font-bold text-[22px] md:text-[26px] mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  <Image src={intelligenceList.titleIcon} alt={intelligenceList.title} className="h-[32px] w-[32px] object-contain" />
                </div>
                {intelligenceList.title}
              </h3>
              <p className="text-[#53575A] dark:text-accent/70 text-[15px] sm:text-[16px] mb-8 !leading-[24px]">
                {intelligenceList.description}
              </p>
              <ul className="space-y-4">
                {intelligenceList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item transition-all duration-300 transform translate-x-0 hover:translate-x-1">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                      <TickIcon />
                    </span>
                    <span className="text-secondary dark:text-accent text-[15px] sm:text-[16px] !leading-[22px] transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-400">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.6} animationType="to" direction="right" offset={40}>
            <div className="flex items-center justify-center bg-white dark:bg-background-5 rounded-[2rem] shadow-sm min-h-[350px] border border-primary-100 dark:border-primary-500/20 transition-all duration-700 hover:shadow-[0_30px_60px_-15px_rgba(0,112,206,0.2)] hover:border-primary-500 overflow-hidden relative group">
              <div className="relative w-full h-full p-4 transform transition-transform duration-1000 group-hover:scale-110">
                <Image src={feature1} alt="Platform" className="h-full w-full object-contain rounded-2xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/5 to-transparent pointer-events-none" />
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.7} animationType="to" direction="up" offset={50}>
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-8 md:p-10 shadow-sm border border-primary-100 dark:border-primary-500/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,112,206,0.15)] hover:border-primary-500">
              <h3 className="text-secondary dark:text-white font-bold text-[22px] md:text-[26px] mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  <Image src={actionList.titleIcon} alt={actionList.title} className="h-[32px] w-[32px] object-contain" />
                </div>
                {actionList.title}
              </h3>
              <p className="text-[#53575A] dark:text-accent/70 text-[15px] sm:text-[16px] mb-8 !leading-[24px]">
                {actionList.description}
              </p>
              <ul className="space-y-4">
                {actionList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item transition-all duration-300 transform translate-x-0 hover:translate-x-1">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                      <TickIcon />
                    </span>
                    <span className="text-secondary dark:text-accent text-[15px] sm:text-[16px] !leading-[22px] transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-500">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.8} animationType="to" direction="up" offset={50}>
            <div className="group bg-white dark:bg-background-5 rounded-3xl p-8 md:p-10 shadow-sm border border-primary-100 dark:border-primary-500/30 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_50px_-12px_rgba(0,112,206,0.15)] hover:border-primary-500">
              <h3 className="text-secondary dark:text-white font-bold text-[22px] md:text-[26px] mb-4 flex items-center gap-3">
                <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-xl group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500">
                  <Image src={controlList.titleIcon} alt={controlList.title} className="h-[32px] w-[32px] object-contain" />
                </div>
                {controlList.title}
              </h3>
              <p className="text-[#53575A] dark:text-accent/70 text-[15px] sm:text-[16px] mb-8 !leading-[24px]">
                {controlList.description}
              </p>
              <ul className="space-y-4">
                {controlList.list.map((feature) => (
                  <li key={feature.id} className="flex gap-3 items-start group/item transition-all duration-300 transform translate-x-0 hover:translate-x-1">
                    <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                      <TickIcon />
                    </span>
                    <span className="text-secondary dark:text-accent text-[15px] sm:text-[16px] !leading-[22px] transition-colors duration-300 group-hover:text-primary-700 dark:group-hover:text-primary-500">
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

export default Platform;
