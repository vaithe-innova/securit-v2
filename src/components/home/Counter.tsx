'use client';

import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white">
      <div className="main-container">
        <div className="sm:mb-0 grid grid-cols-12 md:space-y-0 xl:mb-1">
          <div className="col-span-12 text-center">
            <RevealAnimation delay={0.1}>
              <div className="mb-4 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#0070CE]">
                <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Why it Matters</span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className='fw-700 text-primary-700 text-[30px] !leading-[33px]'>Safety data exists. Action often comes too late.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="pt-2 !leading-[26px] text-secondary text-sm md:text-base">Safety systems generate valuable data, but delays and disconnected tools make real-time action difficult.</p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16">
          <RevealAnimation delay={0.2} direction="up" offset={40}>
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left border-b md:border-b-0 border-[#E7E7E7]">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[36px] lg:text-[38px] xl:text-[40px] !leading-[48px]">
                2.<NumberAnimation number={78} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />M +
              </h3>
              <p className="text-secondary text-sm md:text-base lg:text-[20px] font-normal !leading-[30px] mt-3">
                Workers die each year from occupational accidents and work-related diseases
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4} direction="up" offset={40}>
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left border-b md:border-b-0 md:border-x border-[#E7E7E7]">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[36px] lg:text-[38px] xl:text-[40px] !leading-[48px]">
                $<NumberAnimation number={177} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />B +
              </h3>
              <p className="text-secondary text-sm md:text-base lg:text-[20px] font-normal !leading-[30px] mt-3">
                Annual economic cost of workplace injuries and fatalities worldwide
                <br className="hidden lg:block" />
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6} direction="up" offset={40}>
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[36px] lg:text-[38px] xl:text-[40px] !leading-[48px]">
                <NumberAnimation number={400} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />% ROI
              </h3>
              <p className="text-secondary text-sm md:text-base lg:text-[20px] font-normal !leading-[30px] mt-3">
                Average return for every dollar invested in workplace safety
                {/* <br className="hidden lg:block" />  */}
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Counter;