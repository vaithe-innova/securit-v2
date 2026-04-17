'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
];

export default function WorkProcess() {
  return (
    <section className="bg-[#f8fafc] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full border border-blue-600 text-blue-700 text-sm font-medium mb-6 bg-blue-50/50"
          >
            Platform Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold text-[#00174c] mb-6 leading-tight max-w-4xl mx-auto"
          >
            Purpose-built safety, Designed for every worker
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Connect devices, sensors, and workflows to monitor activity, detect risks, and respond faster.
          </motion.p>
        </div>

        {/* Sticky Cards Section */}
        <div className="relative space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="sticky top-32 z-10"
            >
              <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center p-8 lg:p-14">
                  {/* Left Column Content */}
                  <div className="order-2 lg:order-1 lg:pl-4">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest mb-4 block">
                      {step.category}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-extrabold text-[#00174c] mb-6 leading-[1.1] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed font-medium">
                      {step.desc}
                    </p>

                    <ul className="space-y-5">
                      {step.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + (i * 0.1) }}
                          className="flex items-center gap-4 text-gray-850"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100/50 flex items-center justify-center">
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.5 6L5 9.5L12.5 2" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <span className="text-[18px] font-semibold text-gray-700 tracking-tight">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column Image */}
                  <div className="order-1 lg:order-2">
                    <div className="relative aspect-[4/3] lg:aspect-[1.5/1] rounded-[2rem] overflow-hidden shadow-xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}