'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import imgConstruction from '@public/images/construction.png';
import imgManufacturing from '@public/images/manufacturing.png';
import imgOilGas from '@public/images/oil-gas.png';
import imgMining from '@public/images/mining.png';
import imgLogistics from '@public/images/logistics.png';

const industries = [
  {
    id: 1,
    name: 'Construction',
    image: imgConstruction,
    icon: '🏗️',
    tagline: 'Protect workers on-site',
    points: ['Fall detection & SOS alerts', 'Geofenced safety zones', 'Real-time headcount'],
  },
  {
    id: 2,
    name: 'Manufacturing',
    image: imgManufacturing,
    icon: '🏭',
    tagline: 'Zero-downtime safety ops',
    points: ['Machine hazard monitoring', 'Shift attendance tracking', 'Automated incident reports'],
  },
  {
    id: 3,
    name: 'Oil & Gas',
    image: imgOilGas,
    icon: '⛽',
    tagline: 'Safety in high-risk zones',
    points: ['Gas leak & thermal alerts', 'Remote worker lone-man', 'Regulatory compliance logs'],
  },
  {
    id: 4,
    name: 'Mining',
    image: imgMining,
    icon: '⛏️',
    tagline: 'Underground & surface cover',
    points: ['Worker location tracking', 'Environmental sensor data', 'Emergency evacuation flows'],
  },
  {
    id: 5,
    name: 'Logistics',
    image: imgLogistics,
    icon: '🚚',
    tagline: 'Fleet & yard safety',
    points: ['Driver fatigue detection', 'Yard entry/exit alerts', 'Route risk monitoring'],
  },
];

const Industries = () => {
  return (
    <section className="bg-white dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        {/* Heading Section */}
        <div className="mx-auto mb-10 md:mb-14 max-w-[800px] space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <div className="inline-block border border-[#0070CE] dark:border-primary-500/30 rounded-[30px] px-5 py-[6px] mb-2 bg-transparent">
              <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                Industries
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="text-primary-700 dark:text-white font-bold text-3xl md:text-4xl lg:text-[30px] leading-tight mb-4">
              Built for environments where safety moves fast
            </h2>
          </RevealAnimation>
        </div>

        {/* Grid of Industries — flip cards */}
        {/* Inject the perspective + preserve-3d styles globally via a style tag */}
        <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front,
          .flip-card-back {
            position: absolute;
            inset: 0;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-[30px] w-full mx-auto">
          {industries.map((industry, index) => (
            <RevealAnimation key={industry.id} delay={0.1 + index * 0.1} direction="up" offset={40}>
              {/* Outer container sets height — must NOT be overflow-hidden so 3D works */}
              <div className="flip-card w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] cursor-pointer">
                <div className="flip-card-inner rounded-none">

                  {/* ── FRONT ── */}
                  <div className="flip-card-front flex flex-col overflow-hidden bg-primary-700 dark:bg-background-5 w-full h-full">
                    {/* Image */}
                    <div className="relative w-full h-[76%] overflow-hidden bg-black/10">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-primary-900/20" />
                    </div>
                    {/* Title bar */}
                    <div className="h-[24%] flex items-center justify-center p-3 text-center bg-primary-700">
                      <h3 className="text-white font-bold text-[15px] sm:text-base md:text-lg tracking-wide">
                        {industry.name}
                      </h3>
                    </div>
                  </div>

                  {/* ── BACK ── */}
                  <div className="flip-card-back flex flex-col justify-between w-full h-full bg-gradient-to-br from-[#004AA9] to-[#0070CE] p-5 md:p-6 overflow-hidden">
                    {/* Top: icon + name */}
                    <div>
                      <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-tight mb-1">
                        {industry.name}
                      </h3>
                      <p className="text-white/70 text-[13px] md:text-[14px] font-medium mb-4 leading-snug">
                        {industry.tagline}
                      </p>
                    </div>

                    {/* Middle: feature points */}
                    <ul className="space-y-2 flex-1">
                      {industry.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-[3px] shrink-0 w-[6px] h-[6px] rounded-full bg-white/80 block" />
                          <span className="text-white/90 text-[12px] md:text-[13px] leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.5}>
          <p className="text-primary-500 text-center mx-auto w-full text-[18px] md:text-[20px] leading-[1.5] mt-5">
            and many more...
          </p>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Industries;