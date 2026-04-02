'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { industriesTabsData } from '@/data/industriesData';

const IndustriesMobileAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // store refs for each accordion item
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

const handleToggle = (index: number) => {
  if (activeIndex === index) {
    setActiveIndex(null);
  } else {
    setActiveIndex(index);

    const OFFSET = 100;

    // ✅ wait for DOM render + layout
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const element = itemRefs.current[index];
        if (element) {
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset -
            OFFSET;

          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      });
    });
  }
};

  return (
    <div className="space-y-2">
      {industriesTabsData.map((tab, i) => (
        <div
          key={tab.id}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className="border rounded-lg border-[#7680ac]"
        >
          {/* Header */}
          <button
            onClick={() => handleToggle(i)}
            className="flex w-full justify-between p-4 font-bold text-left text-lg sm:text-xl"
          >
            <span className={` ${
                activeIndex === i ? 'text-primary-500' : ''
              }`}>{tab.maintitle}</span>

            {/* Arrow */}
            <span
              className={`transition-transform duration-300 text-xs text-primary-500 leading-6 ${
                activeIndex === i ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>

          {/* Content */}
          {activeIndex === i && (
            <div className="p-4 pt-0 space-y-4 border-t border-[#bdc2d7]">
                <h4 className='text-[24px] leading-[1.1] text-background-5 font-bold mb-5 pt-5'>{tab.title}</h4>

              <ul className="space-y-2">
                {tab.features.map((f, idx) => (
                  <li key={idx} className="flex gap-3 items-center">
                    <Image src={f.image} alt="" className="w-8 h-8" />
                    <p className="text-sm">{f.description}</p>
                  </li>
                ))}
              </ul>

              <Image src={tab.image} alt="" className="rounded-lg" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default IndustriesMobileAccordion;