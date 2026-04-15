
import about from '@public/images/about.webp';
import Image from 'next/image';
import LinkButton from '../ui/button/LinkButton';
import RevealAnimation from '../animation/RevealAnimation';

const OurMission = () => {
  return (
    <section className="relative pt-32 pb-14 md:pb-16 lg:pb-[70px] lg:pt-[132px] xl:pb-[80px]">
      <div className="main-container">
        <div className="flex flex-wrap items-center gap-8 lg:flex-nowrap lg:gap-4 xl:gap-8">
          <div className="w-full lg:w-1/2 ">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 gap-2">
              <RevealAnimation delay={0.2} direction="left" animationType="from" offset={100} useSpring={true} repeatative>
                <div className='flex justify-start w-full'>
                  <div className="flex items-start justify-start w-fit rounded-[30px] bg-white py-[6px] px-5 border-[1px] border-[#0070CE]">
                    <span className="text-xs sm:text-sm md:text-base font-normal bg-white text-primary-700">About Innova</span>
                  </div>
                </div>
              </RevealAnimation>
              {/* <span className="text-primary-500 tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal uppercase">About Innova</span> */}
              <h2 className="text-primary-700 mt-2 mb-4 font-bold text-[22px] sm:text-[26px] md:text-[34px] lg:text-[40px] leading-tight">
                Innova Solutions is a global technology and talent partner specializing in transformative digital solutions.
              </h2>
              <p className="text-secondary lg:max-w-[690px] text-sm md:text-base mb-2">
                Since 1998, we’ve integrated next-gen tech with our accelerated engineering methodology to help the world’s leading organizations solve complex challenges, drive rapid innovation, and achieve valuable outcomes. </p>
              <p className="text-secondary lg:max-w-[690px] text-sm md:text-base">
                With curated talent communities specializing in cloud, data & analytics, digital product engineering, AI & automation, and cybersecurity, we partner with clients across industries to modernize faster and operate smarter.
              </p>
              <LinkButton
                href="https://innovasolutions.com/company/about-us/"
                target='_blank'
                insideSpan={false}
                className="btn rounded-full btn-primary text-white hover:btn-white-dark px-4 py-2 !leading-[24px] sm:!leading-[24px] md:!leading-[28px] lg:!leading-[32px] text-sm sm:text-base font-bold w-full sm:w-[170px] md:w-[210px] lg:w-[234px] sm:h-10 md:h-11 lg:h-12 shadow-sm mt-8">
                Read More
              </LinkButton>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-3">
            <div className="flex flex-wrap gap-4 sm:flex-nowrap sm:gap-2.5">
              <div className="w-full">
                <figure>
                  <Image src={about} alt="about" className='w-full h-auto' />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurMission.displayName = 'OurMission';
export default OurMission;
