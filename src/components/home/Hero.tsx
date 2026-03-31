'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import HeroPerspective from './HeroPerspective';

const Hero = () => {
  return (
    <section className="bg-[url('/images/ns-img-55.svg')] bg-top bg-no-repeat pt-[160px] lg:pt-[180px] xl:pt-[228px] dark:bg-[url('/images/ns-img-dark-34.svg')]">
      <div className="main-container">
        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px]">
          <div className="flex flex-col items-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-3 md:mb-4 lg:mb-5">Smart Safety for Every Worker</span>
            </RevealAnimation>
            <div className="space-y-3 md:mx-10 md:space-y-4 lg:mx-0">
              <RevealAnimation delay={0.2}>
                <h1 className="max-w-[1200px] text-center">You can’t fix what you can’t see. <br /> So we made safety impossible to miss. </h1>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-center">
                  Real-time location intelligence and AI-powered insights to protect your workforce, reduce incidents, and transform reactive safety into proactive prevention.
                </p>
              </RevealAnimation>
            </div>
            <ul className="flex w-full flex-col items-center justify-center gap-y-3 pt-8 text-center sm:w-auto sm:flex-row md:gap-x-4 md:pt-10 lg:pt-12 xl:pt-14">
              <RevealAnimation delay={0.3} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/demo"
                    className="btn btn-primary hover:btn-secondary btn-w btn-xl dark:hover:btn-white w-[90%] sm:w-auto">
                    Get your Demo
                  </LinkButton>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.5} direction="left" offset={50}>
                <li className="w-full">
                  <LinkButton
                    href="/video"
                    className="btn btn-white hover:btn-primary btn-xl dark:btn-transparent w-[90%] sm:w-auto">
                    Watch A Video
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
