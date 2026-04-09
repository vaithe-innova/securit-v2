'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const StartFree = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Animated background glow blobs */}
      <span className="pointer-events-none absolute -left-20 sm:-left-32 -top-20 sm:-top-32 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-white/5 blur-2xl sm:blur-3xl" />
      <span className="pointer-events-none absolute -right-20 sm:-right-32 -bottom-20 sm:-bottom-32 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-white/5 blur-2xl sm:blur-3xl" />

      <div className="relative z-10 main-container">
        <div className="
  relative
  
  before:content-['']
  before:absolute
  before:inset-0
  before:rounded-[24px]
  before:bg-[linear-gradient(180deg,rgba(107,5,202,0.75)_0%,rgba(30,23,75,0.1)_100%)]

  md:before:hidden
  
  bg-[url('/demo/images/get-start-bg.jpg')]
  bg-cover
  bg-right
  md:bg-center

  rounded-[24px]
  pt-[30px]
  pb-[100px]
  px-[20px]
  sm:py-[35px]
  sm:px-[30px]
  md:py-[48px]
  md:px-[60px]
">
          <div className="space-y-5 text-left max-w-[746px]">
            <RevealAnimation delay={0.2}>
              <h2 className="text-[#FFFFFF] fw-700 text-[22px] sm:text-[24px] md:text-[26px] lg:text-[30px] !leading-[28px] sm:!leading-[32px] md:!leading-[36px] lg:!leading-[40px]">
                If your team only responds when things go wrong, It's already too late.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.35}>
              <p className="text-sm sm:text-base md:text-[18px] !leading-[22px] text-primary-50 font-normal md:max-w-[90%]">
                Don't wait for something to go sideways, stay ahead with Securit and protect every worker across every site.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.5}>
              <div className="pt-2">
                <div className="relative inline-flex">
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full animate-ping bg-white/30" />
                  <Link
                    href="#contact"
                    className="relative inline-flex items-center justify-center bg-white text-[#004AA9] font-semibold text-[15px] md:text-[18px] px-8 py-3 rounded-full hover:bg-primary-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
                  >
                    Get Started Free
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

StartFree.displayName = 'StartFree';
export default StartFree;
