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
              <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#B7D4FF]">
                <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Why it Matters</span>
              </div>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className='fw-700 text-primary-700 text-[30px] !leading-[33px]'>Safety data exists. Action often comes too late.</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="pt-0 !leading-[26px] text-secondary text-sm md:text-base">Safety systems generate valuable data, but delays and disconnected tools make real-time action difficult.</p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-10 md:mt-16">
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left border-b md:border-b-0 border-[#E7E7E7]">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[42px] lg:text-[48px] xl:text-[56px] !leading-tight">
                <NumberAnimation number={2.78} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />M +
              </h3>
              <p className="text-primary-900 text-sm md:text-base lg:text-lg font-medium !leading-tight mt-3">
                Workers die each year from occupational accidents and work-related diseases 
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left border-b md:border-b-0 md:border-x border-[#E7E7E7]">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[42px] lg:text-[48px] xl:text-[56px] !leading-tight">
                $<NumberAnimation number={176.5} speed={2000} interval={200} rooms={1} heightSpaceRatio={2} />B +
              </h3>
              <p className="text-primary-900 text-sm md:text-base lg:text-lg font-medium !leading-tight mt-3">
                Annual economic cost of workplace injuries and fatalities worldwide  
                <br className="hidden lg:block" /> 
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 py-6 md:py-0 text-center md:text-left">
              <h3 className="text-primary-500 fw-700 flex justify-center md:justify-start text-[42px] lg:text-[48px] xl:text-[56px] !leading-tight">
                <NumberAnimation number={400} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />% ROI
              </h3>
              <p className="text-primary-900 text-sm md:text-base lg:text-lg font-medium !leading-tight mt-3">
                Average return for every dollar invested in workplace safety 
                 {/* <br className="hidden lg:block" />  */}
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Counter;