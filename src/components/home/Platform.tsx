'use client';

import feature1 from '@public/images/ns-feature1.gif';
import feature2 from '@public/images/ns-feature2.gif';
import feature3 from '@public/images/ns-feature3.gif';
import feature4 from '@public/images/ns-feature4.gif';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import { CheckIconCircle } from '@/icons';

// Feature list
const intelligenceList = {
  title: '🧠 Intelligence',
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
  title: '📡 Signal',
  description: 'Real-time inputs from workers, devices, & environmental conditions.',
  list: [
    {
      id: 1,
      text: 'Mobile safety applications',
    },
    {
      id: 2,
      text: 'SOS emergency button',
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
  title: '🖥 Control',
  description: 'Centralized management for teams, assets, and safety workflows.',
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
}
const actionList = {
  title: '🚨 Action',
  description: 'Field-ready tools for fast and coordinated response.',
  list: [
    {
      id: 1,
      text: 'Mobile applications',
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
    <section className="bg-white pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px] xl:pt-[100px] xl:pb-[100px] dark:bg-black">
      <div className="main-container">
        <div className="mb-10 max-w-[750px] space-y-5 md:mb-[50px]">
          <RevealAnimation delay={0.2}>
            <span className="uppercase text-primary-500 tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal">Platform Capabilities</span>
          </RevealAnimation>
          <div>
            <RevealAnimation delay={0.3}>
              <h2 className="mb-3 font-bold text-primary-700 text-[30px] leading-[34px]">One platform for safety visibility </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="text-secondary text-[20px] !leading[26px] max-w-[690px]"> Connect devices, sensors, and workflows to monitor activity, detect risks, and respond faster. </p>
            </RevealAnimation>
          </div>
        </div>
        {/* feature Items */}
        <div className="mb-6 sm:mb-10 grid grid-cols-12 md:gap-8 space-y-4 md:space-y-0 xl:mb-18">
          <RevealAnimation delay={0.5}>
            <div className="border-8 border-stroke-10 space-y-6 rounded-[20px] p-[25px] col-span-12  md:col-span-6 lg:col-span-5">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6 text-lg sm:text-xl md:text-[26px] text-ns-black font-bold mb-4">Input Layer—where activity is captured </h5>
                <div className='grid grid-cols-12 mb-3 space-y-3'>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <ul className="space-y-3">
                      {signalList.list.map((feature) => (
                        <li key={feature.id} className="flex gap-2 text-xs md:text-sm items-start">
                          <span className="">
                            <CheckIconCircle />
                          </span>

                          <span className="text-secondary text-[14px] leading-[20px]">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-6">
                    <ul className="space-y-3">
                      {intelligenceList.list.map((feature) => (
                        <li key={feature.id} className="flex gap-2 text-xs md:text-sm items-start">
                          <span className="">
                            <CheckIconCircle />
                          </span>
                          <span className="text-secondary text-[14px] leading-[20px]">{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className='text-primary-500 italic text-sm'>Continuous inputs from workers, devices, and surrounding conditions.</p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature1}
                  alt="feature image"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="border-8 border-stroke-10 space-y-6 rounded-[20px] p-[25px] col-span-12 md:col-span-6 lg:col-span-7">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6 text-lg sm:text-xl md:text-[32px] text-ns-black font-bold mb-4">Processing Layer—turning data into intelligence </h5>
                <ul className="space-y-3 mb-5 grid grid-cols-1 sm:grid-cols-3 justify-between">
                  {intelligenceList.list.map((feature) => (
                    <li key={feature.id} className="flex gap-2 text-xs md:text-sm items-start">
                      <span className="">
                        <CheckIconCircle />
                      </span>

                      <span className="text-secondary text-[14px] leading-[20px]">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-primary-500 italic text-sm pb-2'>
                  Data is analyzed in context—identifying patterns, surfacing anomalies, and determining what actually needs attention.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature2}
                  alt="feature image"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="border-8 border-stroke-10 space-y-6 rounded-[20px] p-[25px] col-span-12 md:col-span-6 lg:col-span-8">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6 text-lg sm:text-xl md:text-[32px] text-ns-black font-bold mb-4">Control Layer—coordinating operations </h5>
                <ul className="mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 justify-between">
                  {controlList.list.map((feature) => (
                    <li key={feature.id} className="flex gap-2 text-xs md:text-sm items-start">
                      <span className="">
                        <CheckIconCircle />
                      </span>

                      <span className="text-secondary text-[14px] leading-[20px]">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-primary-500 italic text-sm pb-2'>
                  A unified system for managing incidents, enforcing policies, and maintaining operational consistency.
                </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature3}
                  alt="feature image"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <div className="border-8 border-stroke-10 space-y-6 rounded-[20px] p-[25px] col-span-12  md:col-span-6 lg:col-span-4">
              <div className="space-y-2">
                <h5 className="max-sm:text-heading-6 text-lg sm:text-xl md:text-[26px] text-ns-black font-bold mb-4">Field Layer—enabling action on the ground </h5>
                <ul className="space-y-3 mb-3">
                  {actionList.list.map((feature) => (
                    <li key={feature.id} className="flex gap-2 text-xs md:text-sm items-start">
                      <span className="">
                        <CheckIconCircle />
                      </span>
                      <span className="text-secondary text-[14px] leading-[20px]">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <p className='text-primary-500 italic text-sm max-w-[90%]'>Direct interaction in the field—supporting fast response, clear communication, and reliable execution. </p>
              </div>
              <figure className="w-full">
                <Image
                  src={feature4}
                  alt="feature image"
                  className="w-full rounded-2xl object-cover"
                />
              </figure>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Platform;
