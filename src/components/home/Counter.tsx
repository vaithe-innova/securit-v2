'use client';

import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px] bg-white">
      <div className="main-container">
          <div className="sm:mb-0 grid grid-cols-12 md:gap-8 md:space-y-0 xl:mb-1">
            <div className="col-span-12 md:col-span-6 lg:col-span-7">
              <div className="space-y-3 max-w-[640px]">
                <RevealAnimation delay={0.1}>
                  <span className="uppercase text-primary-500 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">The Challenge</span>
                </RevealAnimation>
                <RevealAnimation delay={0.2}>
                  <h2 className='fw-700 text-primary-700 max-w-[1024px] text-3xl lg:text-4xl'>Preventable incidents still happen—not because teams lack data, but because they can’t act on it fast enough.</h2>
                </RevealAnimation>
              </div>
              </div>
              <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="">
                <RevealAnimation delay={0.3}>
                  <p className="pt-0 sm:pt-7">Safety systems generate plenty of information, but it’s fragmented across tools, delayed in reaching the right people, and difficult to act on in the moment. Without a clear, real-time view and coordinated response, critical signals are missed—leading to unnecessary risk, costly disruptions, and avoidable harm.</p>
                </RevealAnimation>
              </div>
            </div>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-3 md:flex-row justify-between py-6 sm:py-14">
            <div className="space-y-2">
              <h3 className="text-primary-500 fw-700 flex">
                <NumberAnimation number={13000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2} />+
              </h3>
              <p className="text-black/60">Worker injuries daily in the Globally</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-primary-500 fw-700 flex">
                $<NumberAnimation number={167} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />B
              </h3>
              <p className="text-black/60">Lost annually to preventable incidents</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-primary-500 fw-700 flex">
                <NumberAnimation number={50} speed={2000} interval={200} rooms={2} heightSpaceRatio={2} />%
              </h3>
              <p className="text-black/60">Faster response when teams act in real time</p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Counter;
