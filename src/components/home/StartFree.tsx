'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const StartFree = () => {
  return (
    <section className="relative overflow-hidden bg-[#004AA9] dark:bg-primary-900 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[80px] lg:pb-[80px]">
      {/* Animated background glow blobs */}
      <span className="pointer-events-none absolute -left-32 -top-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
      <span className="pointer-events-none absolute -right-32 -bottom-32 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 main-container">
        <div className="text-center space-y-6">
          <RevealAnimation delay={0.2}>
            <h2 className="text-[#FFFFFF] fw-700 text-[30px] !leading-[44px]">
              If Your Team Only Responds When Things Go Wrong,
              <span className="block">It&apos;s Already Too Late.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <p className="text-[20px] !leading-[26px] text-primary-50 max-w-[900px] mx-auto">
              Keep safety charged at 100% – always. Join 500+ companies trusting Securit to protect every worker, every shift, in every language, across every site.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="pt-2 flex justify-center">
              <div className="relative inline-flex">
                {/* Pulse ring */}
                <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
                <Link
                  href="#contact"
                  className="relative inline-flex items-center justify-center bg-white text-[#004AA9] font-bold text-[15px] md:text-[16px] px-8 py-3 rounded-full hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

StartFree.displayName = 'StartFree';
export default StartFree;
