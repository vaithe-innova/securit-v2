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
                    className="btn btn-md flex justify-center items-center gap-3 btn-outline-primary px-4 py-2 !leading-[24px] sm:!leading-[24px] md:!leading-[28px] lg:!leading-[32px] text-sm sm:text-base font-bold w-full sm:w-[170px] md:w-[210px] lg:w-[234px] sm:h-10 md:h-11 lg:h-12 border-[#0070CE] text-[#0070CE]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path clip="evenodd" d="M4.40321 2.09407C4.65178 1.95923 4.95462 1.97001 5.19284 2.12217L19.6445 11.3529C19.866 11.4945 20 11.7383 20 12C20 12.2617 19.866 12.5055 19.6445 12.6471L5.19284 21.8778C4.95462 22.03 4.65178 22.0408 4.40321 21.9059C4.15464 21.7711 4 21.5122 4 21.2308V2.76923C4 2.48784 4.15464 2.22891 4.40321 2.09407ZM5.54839 4.1782V19.8218L17.7941 12L5.54839 4.1782Z" fill="#0070CE" />
                    </svg>
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
