'use client';

import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Counter = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-[90px] xl:pt-[100px] pb-16 md:pb-20 lg:pb-[90px] xl:pb-[100px]">
      <div className="main-container">
        <div className="text-center space-y-3 mb-10 md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <span className="uppercase text-primary-500 tracking-[3px] text-sm">The Challenge</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className='fs-36 fw-700 text-primary-700 max-w-[1024px] mx-auto'>Preventable incidents still happen—not because teams lack data, but because they can’t act on it fast enough.</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="max-w-[1024px] mx-auto">Safety systems generate plenty of information, but it’s fragmented across tools, delayed in reaching the right people, and difficult to act on in the moment. Without a clear, real-time view and coordinated response, critical signals are missed—leading to unnecessary risk, costly disruptions, and avoidable harm.</p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.4}>
          <div className="flex flex-col max-md:gap-y-10 max-lg:gap-x-3 md:flex-row justify-between px-3 lg:px-[60px] py-14">
            <div className="space-y-2 text-center">
              <h3 className="text-primary-500 fw-700 flex items-center justify-center">
                <NumberAnimation number={13000} speed={2000} interval={200} rooms={5} heightSpaceRatio={2} />+
              </h3>
              <p className="text-black/60">Worker injuries daily in the Globally</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-primary-500 fw-700 flex items-center justify-center">
                $<NumberAnimation number={167} speed={2000} interval={200} rooms={3} heightSpaceRatio={2} />B
              </h3>
              <p className="text-black/60">Lost annually to preventable incidents</p>
            </div>
            <div className="space-y-2 text-center">
              <h3 className="text-primary-500 fw-700 flex items-center justify-center">
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
