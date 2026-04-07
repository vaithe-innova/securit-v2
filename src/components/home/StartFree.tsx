'use client';

import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const StartFree = () => {
  return (
    <section className="bg-primary-700 dark:bg-primary-900 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[80px] lg:pb-[80px]">
      <div className="main-container">
        <div className="mx-auto max-w-[720px] text-center space-y-6">
          <RevealAnimation delay={0.2}>
            <h2 className="text-[#FFFFFF] fw-[700] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] !leading-[1.2]">
              If Your Team Only Responds When Things Go Wrong
              <span className="block">It&apos;s Already Too Late.</span>
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.35}>
            <p className="text-white/70 text-[16px] md:text-[18px] leading-relaxed mx-auto max-w-[560px]">
              Keep safety charged at 100% – always. Join 500+ companies trusting Securit to protect every worker, every shift, in every language, across every site.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.5}>
            <div className="pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-primary-700 font-bold text-[15px] md:text-[16px] px-8 py-3 rounded-full hover:bg-primary-50 transition-colors duration-300 shadow-lg"
              >
                Get Started Free
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

StartFree.displayName = 'StartFree';
export default StartFree;
