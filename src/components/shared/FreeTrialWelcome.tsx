'use client';

import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import marketing from '@public/images/marketing.jpg'; // Fallback if no specific image is provided

const FreeTrialWelcome = () => {
  return (
    <section className="bg-white py-16 md:py-24" id="free-trial-welcome">
      <div className="main-container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="space-y-8 lg:pr-10">
            <RevealAnimation delay={0.1}>
              <div className="space-y-4">
                <h2 className="text-secondary-700 font-bold text-[33px] !leading-[44px]">
                  Welcome to Your <span className="text-primary-500">30-Day Free Trial!</span>
                </h2>
                <h3 className="text-secondary-800 text-[24px] !leading-[30px] font-semibold">
                  You're all set to explore the platform
                </h3>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <div className="space-y-6 text-[#53575A] text-[18px] leading-[30px]">
                <p className='text-secondary'>
                  Thank you for getting in touch. Your <span className="font-bold text-secondary">30-day free trial</span> has been successfully activated.
                </p>
                <p className='text-secondary'>
                  You now have full access to explore our AI security and compliance platform-designed to help you monitor, protect, and govern your AI systems with ease.
                </p>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <div className="space-y-6 pt-2">
                <div className="inline-block">
                  <span className="inline-flex items-center justify-center px-6 py-2.5 border border-[#0070CE] rounded-full text-[#0070CE] font-bold text-sm bg-transparent shadow-sm">
                    Your Login Details
                  </span>
                </div>

                <div className="bg-[#0070CE] rounded-xl p-4 sm:p-5 text-white hover:bg-primary-700 transition-colors duration-300 shadow-md">
                  <div className="flex items-center flex-wrap gap-2 text-[15px] md:text-lg">
                    <span className="font-bold">Login URL:</span>
                    <Link href="https://app.securit.app/login" target="_blank" className="underline underline-offset-4 hover:opacity-80">
                      https://app.securit.app/login
                    </Link>
                  </div>
                </div>

                <p className="text-[#848A8D] text-[15px] leading-snug max-w-lg">
                  Please check your email for your login details. We've sent everything you need to access your new dashboard.
                </p>
              </div>
            </RevealAnimation>
          </div>

          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden mt-8 xl:mt-0">
            <RevealAnimation delay={0.2} direction="left">
              <div className="w-full h-full relative rounded-[20px] overflow-hidden shadow-2xl">
                <Image
                  src={marketing}
                  alt="30-Day Free Trial Dashboard Access"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealAnimation>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreeTrialWelcome;
