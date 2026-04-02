'use client';

import { IIntelligence } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface AiIntelligenceListProps {
    intelligenceData: IIntelligence[];
}

const AiIntelligenceList = ({ intelligenceData }: AiIntelligenceListProps) => {
    return (
        <section className="pt-32 pb-20 md:pb-16 lg:pb-[88px] xl:pt-[80px] xl:pb-[100px]">
            <div className="main-container">
                <div className="mb-[50px] space-y-5 text-center">
                    <RevealAnimation delay={0.2}>
                        <span className="uppercase text-primary-500 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">AI Intelligence</span>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                        <h2 className="my-2 max-w-[680px] mx-auto text-primary-700 fw-700 text-3xl lg:text-4xl" >AI Intelligence</h2>
                    </RevealAnimation>
                </div>
                <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
                    {intelligenceData.map((intelligence, index) => (
                        <RevealAnimation key={intelligence.slug} delay={0.5 + index * 0.1}>
                            <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                <div className="bg-background-3 dark:bg-background-7 grid items-center justify-center space-y-6 rounded-[20px] px-6 py-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px h-full">
                                    <div className="flex items-center justify-center">
                                        <span className={`${intelligence.icon} text-secondary dark:text-accent text-[52px]`} />
                                    </div>
                                    <div className='h-[48px]'>
                                        <h3 className="text-heading-5 fw-700 text-primary-700" title={intelligence.title} >{intelligence.title}</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="mx-auto line-clamp-5 text-secondary text-[16px] max-w-[361px]" title={intelligence.description}>{intelligence.description}</p>
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

export default AiIntelligenceList;
