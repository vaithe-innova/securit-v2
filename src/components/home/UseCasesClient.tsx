'use client';

import Image from 'next/image';
import { IApproach } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface UseCasesClientProps {
  useCasesData: (IApproach & { [key: string]: unknown })[];
}

const UseCasesClient = ({ useCasesData }: UseCasesClientProps) => {
  return (
    <section className="bg-background-2 dark:bg-background-5 pt-[100px] pb-[100px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] flex flex-col items-center justify-between lg:flex-row lg:items-end lg:gap-0">
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-3">
              <RevealAnimation delay={0.1}>
                <span className="uppercase text-white tracking-[3px] text-sm">Our Approach</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-gradient fw-700">Stop waiting on data. Start acting on it.</h2>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <iframe width="100%" height="auto" className="min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] md:min-h-[500px] mb-16" frameBorder="0" src="https://www.youtube.com/embed/b-lDuufDDLs?si=PZWr8sLe2XMlkfc9" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        <div className="grid grid-cols-12 gap-y-14 lg:gap-8">
          {useCasesData.map((useCase, index) => (
            <RevealAnimation key={useCase.slug} delay={0.4 + index * 0.1}>
              <div className="col-span-12 lg:col-span-3">
                <div className="space-y-6">
                  <div className="flex lg:justify-start md:justify-center max-sm:justify-center">
                    <Image src={useCase.icon} alt="icon" width={40} height={40} />
                  </div>
                  <div className="space-y-1 text-center lg:text-left">
                    <h3 className="text-heading-5 h-20">{useCase.title}</h3>
                    <p className="mx-auto line-clamp-3 max-w-[337px] lg:mx-0 font-normal">{useCase.description}</p>
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

export default UseCasesClient;
