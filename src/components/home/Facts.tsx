'use client';

import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Facts = () => {
  return (
    <section className="py-10 md:py-11 lg:py-[50px] xl:py-[64px] bg-[#004AA9]">
      <div className="main-container">
        <RevealAnimation delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="px-4 md:px-8 lg:px-12 pb-6 md:pb-0  text-center">
              <h3 className="text-white fw-700 flex justify-center text-[34px] lg:text-[36px] xl:text-[40px] !leading-[45px] sm:!leading-[50px]">
                <NumberAnimation number={500} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />+
              </h3>
              <p className="text-background-secondary text-sm md:text-base lg:text-lg font-normal !leading-tight mt-3">
                Companied Protected
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 pb-6 md:pb-0  text-center">
              <h3 className="text-white fw-700 flex justify-center text-[34px] lg:text-[36px] xl:text-[40px] !leading-[45px] sm:!leading-[50px]">
                $<NumberAnimation number={20} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />B
              </h3>
              <p className="text-background-secondary text-sm md:text-base lg:text-lg font-normal !leading-tight mt-3">
                Connected Safety Market
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 pb-6 md:pb-0  text-center">
              <h3 className="text-white fw-700 flex justify-center text-[34px] lg:text-[36px] xl:text-[40px] !leading-[45px] sm:!leading-[50px]">
                <NumberAnimation number={50} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />K+
              </h3>
              <p className="text-background-secondary text-sm md:text-base lg:text-lg font-normal !leading-tight mt-3">
                Workers Monitored Daily
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 pb-6 md:pb-0  text-center">
              <h3 className="text-white fw-700 flex justify-center text-[34px] lg:text-[36px] xl:text-[40px] !leading-[45px] sm:!leading-[50px]">
                <NumberAnimation number={24} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />/7
              </h3>
              <p className="text-background-secondary text-sm md:text-base lg:text-lg font-normal !leading-tight mt-3">
                Always-On Monitoring
              </p>
            </div>
            <div className="px-4 md:px-8 lg:px-12 pb-6 md:pb-0 text-center">
              <h3 className="text-white fw-700 flex justify-center text-[34px] lg:text-[36px] xl:text-[40px] !leading-[45px] sm:!leading-[50px]">
                <NumberAnimation number={40} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />+
              </h3>
              <p className="text-background-secondary text-sm md:text-base lg:text-lg font-normal !leading-tight mt-3">
                Countries Deployed
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Facts;