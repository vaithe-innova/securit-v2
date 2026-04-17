'use client';

import Image from 'next/image';
import { TickIcon } from '@/icons';
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
                    <span className="text-primary-600 text-sm mb-4 block">
                      {step.category}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-[1.1] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-lg text-primary-400 mb-10 leading-relaxed">
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
                          className="flex items-center gap-4 text-secondary"
                        >
                          <span className="mt-[2px] text-primary-600 transition-transform duration-300 group-hover/item:scale-125">
                            <TickIcon />
                          </span>
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