'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';
import RippleButton from '../ui/button/RippleButton';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";


const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#E5F3FF] pt-[132px] sm:pt-[142px] md:pt-[152px] lg:pt-[172px] xl:pt-[192px] pb-[50px] sm:pb-[70px] md:pb-[80px] lg:pb-[100px] xl:pb-[120px] banner-bg banner">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover left-[20%] top-[70px]"
      >
        <source src="/demo/images/web-banner.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ Overlay */}
      <div className="absolute inset-0 backdrop-blur-[0px] banner-bg"></div>

      <div className="relative z-10 main-container">

        <div className="space-y-[40px] md:space-y-[50px] lg:space-y-[60px] xl:space-y-[70px] banner">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            speed={1500} // smooth transition speed
            autoplay={{
              delay: 3500, // 3 seconds per slide
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: false,
            // }}
            slidesPerView={1}
            allowTouchMove={false} // optional
          >
            <SwiperSlide>
              <div className="px-[2px] grid grid-cols-1 md:grid-cols-1 gap-10 lg:gap-8">
                <div className="gap-2 flex flex-col items-start lg:pr-10">
                  <RevealAnimation delay={0.2} direction="left" animationType="from" offset={100} useSpring={true}  repeatative>
                    <div className="mb-4 flex rounded-[30px] bg-white py-[6px] px-5">
                      <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Smart Safety for Every Worker</span>
                    </div>
                  </RevealAnimation>
                  <div className="space-y-3 md:space-y-5 text-left">
                    <RevealAnimation delay={0.2}>
                      <h1 className="max-w-[650px] text-white fw-700 tracking-tight !leading-[34px] sm:!leading-[40px] md:!leading-[56px] lg:!leading-[58px] xl:!leading-[60px] text-[30px] sm:text-4xl md:text-5xl xl:text-[56px]">
                        Keeping people safe, <br className='hidden md:block' /> Every step of the way
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                      <p className="mx-auto max-w-[650px] text-base sm:text-[17px] lg:text-[18px] text-white font-normal !leading-[22px] lg:!leading-[24px]">
                        Stay OSHA-aligned and ISO 45001-ready with real-time alerts, fall detection, incident management, and automated compliance tracking — all in one platform. 
                        {/* Securit is an AI-powered worker safety platform that helps you monitor your operations, detect risks early, stay connected to your workforce, and respond quickly when something doesn't look right. */}
                      </p>
                    </RevealAnimation>
                  </div>
                  <ul className="flex flex-col gap-y-3 w-full sm:w-auto sm:flex-row sm:gap-x-4 pt-5 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-[46px]">
                    <RevealAnimation delay={0.3} direction="left" offset={50}>
                      <li className="">
                        <LinkButton
                          href="#contact"
                          insideSpan={false}
                          className="btn rounded-full btn-primary text-white hover:btn-white-dark px-4 py-2 !leading-[28px] sm:!leading-[28px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[180px] md:w-[200px] lg:w-[209px] sm:h-11 md:h-12 lg:h-14 shadow-sm">
                          Get Started Free
                        </LinkButton>
                      </li>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5} direction="left" offset={50}>
                      <li>
                        <RippleButton
                          className="btn btn-md flex justify-center items-center gap-3 btn-white px-4 py-2 !leading-[28px] sm:!leading-[30px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[200px] md:w-[220px] lg:w-[241px] sm:h-11 md:h-12 lg:h-14 border-[#0070CE] text-primary-500 btn-remove hover:bg-primary-700 hover:text-white"
                          onClick={() => {
                            setTimeout(() => {
                              document.getElementById("features")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 300);
                          }}
                        >
                          Explore Features
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.90777 3.28748C9.14292 3.05233 9.52418 3.05233 9.75934 3.28748L15.3794 8.90755C15.6146 9.14271 15.6146 9.52397 15.3794 9.75912L9.75934 15.3792C9.52418 15.6143 9.14292 15.6143 8.90777 15.3792C8.67261 15.144 8.67261 14.7628 8.90777 14.5276L13.4999 9.93549H3.71348C3.38092 9.93549 3.11133 9.6659 3.11133 9.33334C3.11133 9.00078 3.38092 8.73119 3.71348 8.73119H13.4999L8.90777 4.13905C8.67261 3.9039 8.67261 3.52263 8.90777 3.28748Z"
                              fill="#0070CE"
                            />
                          </svg>
                        </RippleButton>
                      </li>
                    </RevealAnimation>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            {/* <SwiperSlide>
              <div className="px-[2px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8">
                <div className="gap-2 flex flex-col items-start lg:pr-10">
                  <RevealAnimation delay={0.1}>
                    <div className="mb-2 flex rounded-full bg-white py-[6px] px-[13px] border-[1px] border-primary-500">
                      <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Protect Your People. Preserve Your Growth.</span>
                    </div>
                  </RevealAnimation>
                  <div className="space-y-3 md:space-y-5 text-left">
                    <RevealAnimation delay={0.2}>
                      <h1 className="max-w-[700px] text-primary-700 fw-700 tracking-tight !leading-[40px] md:!leading-[56px] lg:!leading-[58px] xl:!leading-[60px] text-4xl md:text-5xl xl:text-[48px]">
                        A smart way to <span className='text-primary-500'>avoid the cost </span> of "what if."
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                      <p className="mx-auto max-w-[800px] text-base sm:text-[18px] lg:text-[20px] text-secondary font-normal !leading-[26px] lg:!leading-[30px]">
                        A safety incident does more than harm people. It halts progress as well. With Securit, you can reduce insurance costs, prevent downtime, and protect your bottom line. A zero-incidence system will result in 100% productivity.
                      </p>
                    </RevealAnimation>
                  </div>
                  <ul className="flex flex-col gap-y-3 w-full sm:w-auto sm:flex-row sm:gap-x-4 pt-5 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-[46px]">
                    <RevealAnimation delay={0.3} direction="left" offset={50}>
                      <li className="">
                        <LinkButton
                          href="#contact"
                          insideSpan={false}
                          className="btn rounded-full btn-primary text-white hover:btn-white-dark px-4 py-2 !leading-[28px] sm:!leading-[30px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[180px] md:w-[200px] lg:w-[209px] sm:h-11 md:h-12 lg:h-14 shadow-sm">
                          Get Started Free
                        </LinkButton>
                      </li>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5} direction="left" offset={50}>
                      <li>
                        <RippleButton
                          className="btn btn-md flex justify-center items-center gap-3 btn-white px-4 py-2 !leading-[28px] sm:!leading-[30px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[200px] md:w-[220px] lg:w-[241px] sm:h-11 md:h-12 lg:h-14 border-[#0070CE] text-primary-500 btn-remove hover:bg-primary-700 hover:text-white"
                          onClick={() => {
                            setTimeout(() => {
                              document.getElementById("video")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 300);
                          }}
                        >
                          Explore Features
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.90777 3.28748C9.14292 3.05233 9.52418 3.05233 9.75934 3.28748L15.3794 8.90755C15.6146 9.14271 15.6146 9.52397 15.3794 9.75912L9.75934 15.3792C9.52418 15.6143 9.14292 15.6143 8.90777 15.3792C8.67261 15.144 8.67261 14.7628 8.90777 14.5276L13.4999 9.93549H3.71348C3.38092 9.93549 3.11133 9.6659 3.11133 9.33334C3.11133 9.00078 3.38092 8.73119 3.71348 8.73119H13.4999L8.90777 4.13905C8.67261 3.9039 8.67261 3.52263 8.90777 3.28748Z"
                              fill="#0070CE"
                            />
                          </svg>
                        </RippleButton>
                      </li>
                    </RevealAnimation>
                  </ul>
                </div>
                <div className="gap-2 flex flex-col items-start">
                  <RevealAnimation delay={0.1}>
                    <div className="w-full">
                      <figure>
                        <Image src={dashboard} alt="banner" />
                      </figure>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="px-[2px] grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-8">
                <div className="gap-2 flex flex-col items-start lg:pr-10">
                  <RevealAnimation delay={0.1}>
                    <div className="mb-2 flex rounded-full bg-white py-[6px] px-[13px] border-[1px] border-primary-500">
                      <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">Total Site Awareness. No More Blind Spots.</span>
                    </div>
                  </RevealAnimation>
                  <div className="space-y-3 md:space-y-5 text-left">
                    <RevealAnimation delay={0.2}>
                      <h1 className="max-w-[700px] text-primary-700 fw-700 tracking-tight !leading-[40px] md:!leading-[56px] lg:!leading-[58px] xl:!leading-[60px] text-4xl md:text-5xl xl:text-[48px]">
                        See every corner of your operations in <span className='text-primary-500'>real-time.</span>
                      </h1>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                      <p className="mx-auto max-w-[800px] text-base sm:text-[18px] lg:text-[20px] text-secondary font-normal !leading-[26px] lg:!leading-[30px]">
                        You can’t manage what you can’t see. With Securit, you can view your entire workforce's safety status in high definition.No worker is truly alone and no risk goes unnoticed thanks to our AI-powered location intelligence.
                      </p>
                    </RevealAnimation>
                  </div>
                  <ul className="flex flex-col gap-y-3 w-full sm:w-auto sm:flex-row sm:gap-x-4 pt-5 sm:pt-8 md:pt-9 lg:pt-10 xl:pt-[46px]">
                    <RevealAnimation delay={0.3} direction="left" offset={50}>
                      <li className="">
                        <LinkButton
                          href="#contact"
                          insideSpan={false}
                          className="btn rounded-full btn-primary text-white hover:btn-white-dark px-4 py-2 !leading-[28px] sm:!leading-[30px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[180px] md:w-[200px] lg:w-[209px] sm:h-11 md:h-12 lg:h-14 shadow-sm">
                          Get Started Free
                        </LinkButton>
                      </li>
                    </RevealAnimation>
                    <RevealAnimation delay={0.5} direction="left" offset={50}>
                      <li>
                        <RippleButton
                          className="btn btn-md flex justify-center items-center gap-3 btn-white px-4 py-2 !leading-[28px] sm:!leading-[30px] md:!leading-[32px] lg:!leading-[38px] text-sm sm:text-base md:text-[18px] font-semibold w-full sm:w-[200px] md:w-[220px] lg:w-[241px] sm:h-11 md:h-12 lg:h-14 border-[#0070CE] text-primary-500 btn-remove hover:bg-primary-700 hover:text-white"
                          onClick={() => {
                            setTimeout(() => {
                              document.getElementById("video")?.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }, 300);
                          }}
                        >
                          Explore Features
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M8.90777 3.28748C9.14292 3.05233 9.52418 3.05233 9.75934 3.28748L15.3794 8.90755C15.6146 9.14271 15.6146 9.52397 15.3794 9.75912L9.75934 15.3792C9.52418 15.6143 9.14292 15.6143 8.90777 15.3792C8.67261 15.144 8.67261 14.7628 8.90777 14.5276L13.4999 9.93549H3.71348C3.38092 9.93549 3.11133 9.6659 3.11133 9.33334C3.11133 9.00078 3.38092 8.73119 3.71348 8.73119H13.4999L8.90777 4.13905C8.67261 3.9039 8.67261 3.52263 8.90777 3.28748Z"
                              fill="#0070CE"
                            />
                          </svg>
                        </RippleButton>
                      </li>
                    </RevealAnimation>
                  </ul>
                </div>
                <div className="gap-2 flex flex-col items-start">
                  <RevealAnimation delay={0.1}>
                    <div className="w-full">
                      <figure>
                        <Image src={banner3} alt="banner" />
                      </figure>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Hero;
