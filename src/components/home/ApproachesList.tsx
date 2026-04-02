'use client';

import Image from 'next/image';
import { IApproach } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface ApproachesListProps {
  approachesData: (IApproach & { [key: string]: unknown })[];
}

const ApproachesList = ({ approachesData }: ApproachesListProps) => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[70px] md:pt-[100px] pb-[70px] md:pb-[100px] xl:pb-[150px]" id='video'>
      <div className="main-container">
        <div className="mb-10 sm:mb-[35px] flex flex-col items-center justify-between lg:flex-row lg:items-end lg:gap-0">
          <div className="flex-1 text-center lg:text-left">
            <div className="gap-2 flex flex-col">
              <RevealAnimation delay={0.1}>
                <span className="uppercase text-white tracking-[2%] sm:tracking-[3%] !leading-4 text-xs sm:text-sm font-normal">Our Approach</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-gradient fw-700 text-[40px] !leading-[42px] md:text-[44px] md:!leading-[48px] lg:text-[48px] lg:!leading-[52px]">Stop waiting on data. Start acting on it.</h2>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe width="100%" height="auto" className="min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] md:min-h-[500px] mb-16" frameBorder="0" src="https://www.youtube.com/embed/b-lDuufDDLs?si=PZWr8sLe2XMlkfc9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="grid grid-cols-12 gap-y-14 lg:gap-8">
          {approachesData.map((approach, index) => (
            <RevealAnimation key={approach.slug} delay={0.4 + index * 0.1}>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="space-y-6">
                  <div className="flex lg:justify-start justify-center">
                    <Image src={approach.icon} alt="icon" width={40} height={40} />
                  </div>
                  <div className="space-y-1 text-center lg:text-left">
                    <h3 className="text-[18px] sm:text-[22px] text-white font-bold pb-0 mt-0 lg:h-[62px]">{approach.title}</h3>
                    <p className="mx-auto max-w-[337px] lg:mx-0 font-normal text-[#8A8A8A] !leading-[18px]">{approach.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachesList;
