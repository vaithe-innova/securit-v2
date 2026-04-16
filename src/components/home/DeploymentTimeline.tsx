'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import secureImg from '@public/images/icons/secure.svg';
import metImg from '@public/images/icons/met.svg';
import readyImg from '@public/images/icons/ready.svg';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// const timelineSteps = [
//   {
//     id: 1,
//     timeLabel: 'Day 1–3',
//     title: 'Integration Setup',
//     description:
//       'Connect to existing systems and sensors.',
//     markerVariant: 'circle-blue-first' as const,
//   },
//   {
//     id: 2,
//     timeLabel: 'Week 1',
//     title: 'Configuration & Alignment',
//     description:
//       'Customized zones, workflows, and alerts match operations.',
//   },
//   {
//     id: 3,
//     timeLabel: 'Week 1–2',
//     title: 'Team Onboarding',
//     description:
//       'Train teams and supervisors quickly.',
//     markerVariant: 'circle-blue' as const,
//   },
//   {
//     id: 4,
//     timeLabel: 'Go Live',
//     title: 'Go Live',
//     description:
//       'Start tracking and responding in real time.',
//     markerVariant: 'circle-orange' as const,
//   },
//   {
//     id: 5,
//     timeLabel: 'Weeks 2–4',
//     title: 'Optimization',
//     description:
//       'Continuously improve alerts and workflows.',
//     markerVariant: 'diamond-orange' as const,
//   },
// ];

// const TimelineMarker = ({ variant }: { variant: (typeof timelineSteps)[0]['markerVariant'] }) => {
//   if (variant === 'circle-blue-first') {
//     return (
//       <div className="relative flex items-center justify-center">
//         <span className="relative flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#007bFF] shadow-[0_0_15px_rgba(0,123,255,0.5)]">
//           <span className="h-[6px] w-[6px] rounded-full bg-white" />
//         </span>
//       </div>
//     );
//   }

//   if (variant === 'diamond-orange') {
//     return (
//       <div className="relative flex items-center justify-center">
//         <span className="relative h-[17px] w-[17px] rotate-45 rounded-sm bg-[#e2501a] shadow-[0_0_12px_rgba(226,80,26,0.6)]" />
//       </div>
//     );
//   }

//   const isOrange = variant === 'circle-orange';
//   return (
//     <div className="relative flex items-center justify-center">
//       <span
//         className={`absolute h-[22px] w-[22px] rounded-full border ${isOrange ? 'border-[#e2501a]/30 bg-[#e2501a]/15' : 'border-[#007bFF]/30 bg-[#007bFF]/15'
//           }`}
//       />
//       <span
//         className={`relative h-[6px] w-[6px] rounded-full ${isOrange
//           ? 'bg-[#e2501a] shadow-[0_0_10px_rgba(226,80,26,0.6)]'
//           : 'bg-[#007bFF] shadow-[0_0_10px_rgba(0,123,255,0.6)]'
//           }`}
//       />
//     </div>
//   );
// };

const DeploymentTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<HTMLDivElement[]>([]);
  const labelsRef = useRef<HTMLDivElement[]>([]);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) { return; }

      // ── master timeline, triggered once when section hits 80% of viewport ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,          // fires only the first time
        },
      });

      // 1. Progress track draws in from left  ───────────────────────────────
      if (trackRef.current) {
        gsap.set(trackRef.current, { scaleX: 0, transformOrigin: 'left center' });
        tl.to(
          trackRef.current,
          { scaleX: 1, duration: 1, ease: 'power2.inOut' },
          0,
        );
      }

      // X. Mobile Progress segments drawing animation ─────────────────────────
      const mobileSegments = section.querySelectorAll('.mobile-progress-segment');
      if (mobileSegments.length) {
        gsap.set(mobileSegments, { scaleY: 0 });
        tl.to(
          mobileSegments,
          {
            scaleY: 1,
            duration: 0.5,
            ease: 'none',
            stagger: 0.2, // Draws segment by segment
          },
          0.1,
        );
      }

      // 2. Markers pop in with stagger  ─────────────────────────────────────
      if (markersRef.current.length) {
        gsap.set(markersRef.current, { scale: 0, opacity: 0 });
        tl.to(
          markersRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(2)',
            stagger: 0.18,
          },
          0.35,             // starts 0.35 s into the timeline
        );
      }

      // 3. Time labels drop in from above  ──────────────────────────────────
      if (labelsRef.current.length) {
        gsap.set(labelsRef.current, { y: -16, opacity: 0 });
        tl.to(
          labelsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.45,
            ease: 'power2.out',
            stagger: 0.14,
          },
          0.2,
        );
      }

      // 4. Content cards rise from below  ───────────────────────────────────
      if (cardsRef.current.length) {
        gsap.set(cardsRef.current, { y: 28, opacity: 0 });
        tl.to(
          cardsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power2.out',
            stagger: 0.14,
          },
          0.55,
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="bg-background-5 py-[80px]"
    >
      <div className="main-container">
        {/* ── Section header (uses existing RevealAnimation) ── */}

        {/* <div className="sm:mb-0 grid grid-cols-12 md:space-y-0 xl:mb-1">
          <div className="col-span-12 text-center">
            <RevealAnimation delay={0.1}>
              <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#B7D4FF]">
                <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Easy Implementation</span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className='fw-700 text-primary-700 text-[30px] mb-1 !leading-[34px]'>Up and running in days, not months</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="pt-0 max-w-[560px] mx-auto mb-3 !leading-[26px] text-secondary text-[20px] md:text-base">Securit integrates quickly with your existing systems, so teams can start using
                it within days.</p>
            </RevealAnimation>
          </div>
        </div> */}


        {/* ── Desktop Timeline (md+) ── */}
        {/* <div className="hidden md:block">
          <div className="relative">
            <div className="mb-6 flex items-end">
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { if (el) { labelsRef.current[idx] = el; } }}
                  className="flex-1 text-center"
                >
                  <span className="text-primary-900 text-[16px] leading-[22px] font-medium">{step.timeLabel}</span>
                </div>
              ))}
            </div>
            <div className="relative flex items-center">
              <div className="absolute left-[10%] top-1/2 h-[2px] w-[80%] -translate-y-1/2 bg-white/10" />
              <div
                ref={trackRef}
                className="absolute left-[10%] top-1/2 h-[2px] w-[80%] -translate-y-1/2 bg-gradient-to-r from-[#007bFF] via-[#007bFF] to-[#e2501a]"
              />

          
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { if (el) { markersRef.current[idx] = el; } }}
                  className="relative z-10 flex flex-1 justify-center"
                >
                  <TimelineMarker variant={step.markerVariant} />
                </div>
              ))}
            </div>

           
            <div className="mt-6 flex">
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { if (el) { cardsRef.current[idx] = el; } }}
                  className="flex-1 px-3 first:pl-0 last:pr-0"
                >
                  <div className="space-y-2 text-center">
                    <h4 className="text-primary-900 text-[16px] !leading-[22px] font-semibold">
                      {step.title}
                    </h4>
                    <p className="text-secondary text-[16px] leading-[21px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* <div className="relative flex flex-col gap-0 md:hidden">
          {timelineSteps.map((step, idx) => (
            <RevealAnimation key={step.id} delay={0.1 + idx * 0.12}>
              <div className="relative flex gap-5 min-h-[120px]">
                <div className="relative flex flex-col items-center w-10 shrink-0">
                  <div className="relative z-10 flex h-10 items-center justify-center">
                    <TimelineMarker variant={step.markerVariant} />
                  </div>
                  {idx < timelineSteps.length - 1 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-5 bottom-0 w-[2px] pointer-events-none">
                      <div className="absolute top-0 h-full w-full bg-white/10" />
                      <div
                        className={`mobile-progress-segment absolute top-0 h-full w-full ${idx < 2 ? 'bg-[#007bFF]' : idx === 2 ? 'bg-gradient-to-b from-[#007bFF] to-[#e2501a]' : 'bg-[#e2501a]'
                          }`}
                        style={{ transformOrigin: 'top' }}
                      />
                    </div>
                  )}
         
                  {idx > 0 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-5 w-[2px] pointer-events-none">
               
                      <div className="absolute top-0 h-full w-full bg-white/10" />
              
                      <div
                        className={`mobile-progress-segment absolute top-0 h-full w-full ${idx < 3 ? 'bg-[#007bFF]' : 'bg-[#e2501a]'
                          }`}
                        style={{ transformOrigin: 'top' }}
                      />
                    </div>
                  )}
                </div>
                <div className="pb-10 pt-2 flex-1">
                  <span className="mb-1 block text-[12px] text-primary-900 font-medium">
                    {step.timeLabel}
                  </span>
                  <h4 className="text-primary-900 mb-1.5 text-[16px] font-bold">{step.title}</h4>
                  <p className="text-secondary text-[14px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div> */}

        <div className='flex flex-col'>
          <RevealAnimation delay={0.2} direction="down" offset={30}>
            <div className='flex text-center justify-center'>
              <h3 className='text-white fw-700 text-[22px] sm:text-[30px] !leading-[28px] sm:!leading-[34px]'>Compliance you can trust. <br className='hidden sm:block' />
                Security you can rely on.</h3>
            </div>
          </RevealAnimation>

          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-3 md:flex-row justify-around px-3 lg:px-[60px] pt-10 sm:pt-12">
            {[
              { img: metImg, title: "OSHA-Aligned", desc: "Supports workplace safety standards and guidelines", delay: 0.3 },
              { img: readyImg, title: "ISO 45001-Ready", desc: "Designed to support occupational health & safety frameworks", delay: 0.5 },
              { img: secureImg, title: "Privacy-Focused", desc: "Built to align with GDPR and modern data protection practices", delay: 0.7 }
            ].map((item, idx) => (
              <RevealAnimation key={idx} delay={item.delay} animationType="to" direction="up" offset={50}>
                <div className="group text-center flex flex-col justify-center items-center hover:bg-white/20 p-6 rounded-2xl transition-all duration-500 cursor-default">
                  <figure className='flex items-center justify-center mb-4 sm:mb-5 bg-gradient1 w-16 h-16 rounded-[14px] shadow-lg group-hover:scale-110 group-hover:rotate-[8deg] transition-all duration-500'>
                    <Image src={item.img} alt="secure" width={32} height={32} className="group-hover:scale-110 transition-transform duration-500" />
                  </figure>
                  <h5 className="text-[18px] sm:text-[20px] font-semibold !leading-[28px] text-white transition-colors duration-500">{item.title}</h5>
                  <p className="text-[#DBEAFE] text-sm sm:text-base !leading-6 sm:!leading-[26px] max-w-[290px] opacity-80 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentTimeline;
