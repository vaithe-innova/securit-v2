'use client';

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
                <span className="badge badge-green">Our Approach</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="">Stop waiting on data. Start acting on it.</h2>
              </RevealAnimation>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-y-14 lg:gap-8">
          {useCasesData.map((useCase, index) => (
            <RevealAnimation key={useCase.slug} delay={0.4 + index * 0.1}>
              <div className="col-span-12 lg:col-span-3">
                <div className="space-y-6">
                  <div className="max-lg:text-center">
                    <span className={`${useCase.icon} text-secondary dark:text-accent text-[52px]`} />
                  </div>
                  <div className="space-y-1 text-center lg:text-left">
                    <h3 className="text-heading-5">{useCase.title}</h3>
                    <p className="mx-auto line-clamp-3 max-w-[337px] lg:mx-0">{useCase.description}</p>
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
