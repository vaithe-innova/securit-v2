'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroPerspective from './HeroPerspective';
import { BlurOne, BlurTwo } from '@/icons';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#E5F3FF] to-[#FFFFFF] pt-[100px] lg:pt-[150px] xl:pt-[152px]">
      {/* Background glowing effects to match prototype */}
      <span className="absolute left-[-65px] top-[-37px]">
        <BlurOne />
      </span>
      <span className="absolute left-[-70px] top-[-118px]">
        <BlurTwo />
      </span>
      <span className="absolute right-[-65px] top-[-37px] scale-x-[-1]">
        <BlurOne />
      </span>
      <span className="absolute right-[-70px] top-[-118px] scale-x-[-1]">
        <BlurTwo />
      </span>
      <div className="relative z-10 main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
            <RevealAnimation delay={0.1}>
              <div className="mb-3 md:mb-4 lg:mb-5 flex items-center rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#B7D4FF]">
                <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">AI-Powered Worker Safety Platform</span>
              </div>
            </RevealAnimation>
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0 text-align:-webkit-center">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[700px] text-center text-primary-700 fw-700 tracking-tight !leading-[38px] md:!leading-[50px] lg:!leading-[58px] text-4xl md:text-5xl xl:text-[56px]">
                  Make workplace safety impossible to miss.
                </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[800px] text-center text-base lg:text-[18px] text-secondary font-normal !leading-[20px] lg:!leading-[24px]">
                  Real-time location intelligence and AI-powered insights to protect your workforce,
                  reduce incidents, and transform reactive safety into proactive prevention.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex w-full flex-col items-center justify-center items-start gap-y-3 text-center sm:w-auto sm:flex-row sm:gap-x-4 pt-8 md:pt-9 lg:pt-10 xl:pt-[46px]">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="#contact"
                    insideSpan={false}
                    className="btn rounded-full btn-primary text-white hover:btn-white-dark px-4 py-2 !leading-[24px] sm:!leading-[24px] md:!leading-[28px] lg:!leading-[32px] text-sm sm:text-base font-bold w-full sm:w-[170px] md:w-[210px] lg:w-[234px] sm:h-10 md:h-11 lg:h-12 shadow-sm">
                    Schedule a Demo
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="#video"
                    insideSpan={false}
                    className="btn btn-md btn-outline-primary px-4 py-2 !leading-[24px] sm:!leading-[24px] md:!leading-[28px] lg:!leading-[32px] text-sm sm:text-base font-bold w-full sm:w-[170px] md:w-[210px] lg:w-[234px] sm:h-10 md:h-11 lg:h-12 shadow-sm">

                    Watch a Video
                  </LinkButton>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          <HeroPerspective />
        </div>
      </div>
    </section>
  );
};

export default Hero;
