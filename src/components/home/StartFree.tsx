'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const StartFree = () => {
  return (
    <section className="relative overflow-hidden bg-white my-[60px] sm:my-[80px] md:my-[100px]">
      {/* Animated background glow blobs */}
      <span className="pointer-events-none absolute -left-20 sm:-left-32 -top-20 sm:-top-32 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-primary-100/20 blur-3xl animate-pulse" />
      <span className="pointer-events-none absolute -right-20 sm:-right-32 -bottom-20 sm:-bottom-32 h-[200px] w-[200px] md:h-[400px] md:w-[400px] rounded-full bg-primary-200/20 blur-3xl animate-pulse delay-700" />

      <div className="relative z-10 main-container">
        <div className="
  group
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
          <div className="space-y-6 text-left max-w-[746px] relative z-20">
            <RevealAnimation delay={0.1} animationType="skew-in" direction="left" offset={80}>
              <h2 className="text-[#FFFFFF] fw-700 text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] !leading-[32px] sm:!leading-[36px] md:!leading-[40px] lg:!leading-[46px] group-hover:scale-[1.01] transition-transform duration-700">
                If your team only responds when things go wrong, It's already too late.
              </h2>
            </RevealAnimation>

            <RevealAnimation delay={0.3} direction="left" offset={50}>
              <p className="text-base sm:text-lg md:text-[20px] !leading-[28px] text-primary-50/90 font-normal md:max-w-[85%] group-hover:text-white transition-colors duration-500">
                Don't wait for something to go sideways, stay ahead with Securit and protect every worker across every site.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.5} animationType="to" direction="up" offset={30}>
              <div className="pt-4">
                <div className="relative inline-flex group/btn">
                  {/* Pulse ring */}
                  {/* <span className="absolute inset-0 rounded-full bg-white/40 animate-ping duration-[3000ms]" /> */}
                  <Link
                    href="/#contact"
                    className="relative inline-flex items-center justify-center bg-white text-[#004AA9] font-bold text-[16px] md:text-[18px] px-10 py-4 rounded-full hover:bg-primary-50 hover:scale-[1.08] active:scale-95 transition-all duration-300 shadow-xl group-hover/btn:shadow-white/20"
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
