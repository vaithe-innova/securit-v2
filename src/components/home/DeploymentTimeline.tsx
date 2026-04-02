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



const timelineSteps = [
  {
    id: 1,
    timeLabel: 'Day 1–3',
    title: 'Integration Setup',
    description:
      'We connect to your existing systems—including cameras, sensors, and internal tools—so data begins flowing without replacing your infrastructure.',
    markerVariant: 'circle-blue-first' as const,
  },
  {
    id: 2,
    timeLabel: 'Week 1',
    title: 'Configuration & Alignment',
    description:
      'Zones, workflows, and alert rules are tailored to your environment, matching how your operation actually runs.',
    markerVariant: 'circle-blue' as const,
  },
  {
    id: 3,
    timeLabel: 'Week 1–2',
    title: 'Team Onboarding',
    description:
      'Supervisors and frontline teams are introduced to the platform through focused, scenario-based training.',
    markerVariant: 'circle-blue' as const,
  },
  {
    id: 4,
    timeLabel: 'Go Live',
    title: 'Within the First Week',
    description:
      'Live tracking, alerts, and workflows are activated—supporting operations without interruption.',
    markerVariant: 'circle-orange' as const,
  },
  {
    id: 5,
    timeLabel: 'Weeks 2–4',
    title: 'Optimization',
    description:
      'As data comes in, configurations are refined—improving alert accuracy, workflows, and overall system performance.',
    markerVariant: 'diamond-orange' as const,
  },
];

const TimelineMarker = ({ variant }: { variant: (typeof timelineSteps)[0]['markerVariant'] }) => {
  if (variant === 'circle-blue-first') {
    return (
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#007bFF] shadow-[0_0_15px_rgba(0,123,255,0.5)]">
          <span className="h-[6px] w-[6px] rounded-full bg-white" />
        </span>
      </div>
    );
  }

  if (variant === 'diamond-orange') {
    return (
      <div className="relative flex items-center justify-center">
        <span className="relative h-[18px] w-[18px] rotate-45 rounded-sm bg-[#e2501a] shadow-[0_0_12px_rgba(226,80,26,0.6)]" />
      </div>
    );
  }

  const isOrange = variant === 'circle-orange';
  return (
    <div className="relative flex items-center justify-center">
      <span
        className={`absolute h-8 w-8 rounded-full border ${isOrange ? 'border-[#e2501a]/30 bg-[#e2501a]/15' : 'border-[#007bFF]/30 bg-[#007bFF]/15'
          }`}
      />
      <span
        className={`relative h-[10px] w-[10px] rounded-full ${isOrange
          ? 'bg-[#e2501a] shadow-[0_0_10px_rgba(226,80,26,0.6)]'
          : 'bg-[#007bFF] shadow-[0_0_10px_rgba(0,123,255,0.6)]'
          }`}
      />
    </div>
  );
};

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
      className="bg-background-5 dark:bg-background-5 py-[80px] lg:py-[120px] xl:py-[150px]"
    >
      <div className="main-container">
        {/* ── Section header (uses existing RevealAnimation) ── */}
        <div className="mb-[60px] lg:mb-[80px]">
          <RevealAnimation delay={0.2}>
            <span className="uppercase text-primary-500 tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal">Deployment</span>
          </RevealAnimation>
          <RevealAnimation delay={0.15}>
            <h2 className="text-accent mt-4 max-w-[1000px] fw-700 text-gradient leading-[110%]">
              Up and running in days not months
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.25}>
            <p className="text-accent/60 mt-5 max-w-[650px] text-[15px] leading-relaxed">
              Securit is designed to integrate quickly into existing operations—with most teams live
              in days and fully optimized within the first few weeks.
            </p>
          </RevealAnimation>
        </div>

        {/* ── Desktop Timeline (md+) ── */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Time labels row */}
            <div className="mb-6 flex items-end">
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { if (el) { labelsRef.current[idx] = el; } }}
                  className="flex-1 text-center"
                >
                  <span className="text-accent/70 text-[13px] font-medium">{step.timeLabel}</span>
                </div>
              ))}
            </div>

            {/* Track + markers row */}
            <div className="relative flex items-center">
              {/* Dim background track */}
              <div className="absolute left-[10%] top-1/2 h-[2px] w-[80%] -translate-y-1/2 bg-white/10" />

              {/* Animated progress track */}
              <div
                ref={trackRef}
                className="absolute left-[10%] top-1/2 h-[2px] w-[80%] -translate-y-1/2 bg-gradient-to-r from-[#007bFF] via-[#007bFF] to-[#e2501a]"
              />

              {/* Markers */}
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

            {/* Content cards row */}
            <div className="mt-6 flex">
              {timelineSteps.map((step, idx) => (
                <div
                  key={step.id}
                  ref={(el) => { if (el) { cardsRef.current[idx] = el; } }}
                  className="flex-1 px-3 first:pl-0 last:pr-0"
                >
                  <div className="space-y-2 text-center">
                    <h4 className="text-accent text-[15px] font-semibold leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-accent/50 text-[13px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mobile Timeline (< md) — uses RevealAnimation per item ── */}
        <div className="flex flex-col gap-0 md:hidden">
          {timelineSteps.map((step, idx) => (
            <RevealAnimation key={step.id} delay={0.1 + idx * 0.12}>
              <div className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <TimelineMarker variant={step.markerVariant} />
                  {idx < timelineSteps.length - 1 && (
                    <div className="mt-1 w-[2px] flex-1 bg-white/10" style={{ minHeight: '44px' }} />
                  )}
                </div>
                <div className="pb-8">
                  <span className="text-accent/60 mb-1 block text-[12px] font-medium uppercase tracking-wider">
                    {step.timeLabel}
                  </span>
                  <h4 className="text-accent mb-1.5 text-[16px] font-semibold">{step.title}</h4>
                  <p className="text-accent/50 text-[14px] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.4}>
          <div className='flex flex-col mt-16 bg-white rounded-2xl'>
            <div className='flex text-center justify-center mt-10'>
              <h3 className='text-primary-700 fw-700 text-3xl lg:text-4xl'>Certified. Compliant. Secure.</h3>
            </div>
            <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-3 md:flex-row justify-around px-3 lg:px-[60px] py-14 pt-8">
              <div className="space-y-2 text-center">
                <figure className='flex items-center justify-center'>
                  <Image src={metImg} alt="secure" width={64} height={64} />
                </figure>
                <h5 className="fw-700 flex items-center justify-center"> OSHA Compliant </h5>
                <p className="text-black/60 text-sm">Safety Standards Met</p>
              </div>
              <div className="space-y-2 text-center">
                <figure className='flex items-center justify-center'>
                  <Image src={readyImg} alt="secure" width={64} height={64} />
                </figure>
                <h5 className="fw-700 flex items-center justify-center"> ISO 45001 Ready </h5>
                <p className="text-black/60 text-sm">Occupational Health & Safety</p>
              </div>
              <div className="space-y-2 text-center">
                <figure className='flex items-center justify-center'>
                  <Image src={secureImg} alt="secure" width={64} height={64} />
                </figure>
                <h5 className="fw-700 flex items-center justify-center"> GDPR/Privacy Secure </h5>
                <p className="text-black/60 text-sm">Data Protection Certified</p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default DeploymentTimeline;
