'use client';

import { useState } from 'react';
import Image from 'next/image';
import { industriesTabsData } from '@/data/industriesData';
import Tab from '../ui/tab/Tab';
import TabList from '../ui/tab/TabList';

const IndustriesTabList = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* ================= DESKTOP TABS ================= */}
      <TabList variant="desktop" className="hidden xl:flex">
        {industriesTabsData.map((tab, i) => (
          <Tab key={tab.id} index={i} variant="desktop">
            {tab.title}
          </Tab>
        ))}
      </TabList>

      {/* ================= MOBILE ACCORDION ================= */}
      <div className="block xl:hidden space-y-2">
        {industriesTabsData.map((tab, i) => (
          <div key={tab.id} className="border border-[#E7E7E7] rounded-lg">

            {/* Header */}
            <button
              onClick={() => setActiveIndex(i)}
              className="flex w-full items-center justify-between p-4 font-bold text-left"
            >
              <span>{tab.title}</span>

              <svg
                className={`w-4 h-4 transition-transform ${
                  activeIndex === i ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Content */}
            {activeIndex === i && (
              <div className="p-4 pt-0 space-y-4">

                <ul className="space-y-2">
                  {tab.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <Image src={feature.image} alt="" className="w-8 h-8" />
                      <p className="text-sm text-ns-gray-medium">
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>

                <Image src={tab.image} alt="" className="rounded-[12px]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default IndustriesTabList;