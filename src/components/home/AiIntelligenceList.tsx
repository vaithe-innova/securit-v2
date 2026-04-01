'use client';

import { IIntelligence } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface AiIntelligenceListProps {
    intelligenceData: IIntelligence[];
}

const AiIntelligenceList = ({ intelligenceData }: AiIntelligenceListProps) => {
    return (
        <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
            <div className="main-container">
                <div className="mb-[70px] space-y-5 text-center">
                    <RevealAnimation delay={0.2}>
                        <span className="uppercase text-primary-500 tracking-[2px] sm:tracking-[3px] text-xs sm:text-sm">AI Intelligence</span>
                    </RevealAnimation>
                </div>
                <div className="grid grid-cols-12 gap-y-5 md:gap-8 xl:gap-8">
                    {intelligenceData.map((intelligence, index) => (
                        <RevealAnimation key={intelligence.slug} delay={0.5 + index * 0.1}>
                            <div className="col-span-12 md:col-span-6 xl:col-span-4">
                                <div className="bg-background-3 dark:bg-background-7 grid items-center justify-center space-y-6 rounded-[20px] px-6 py-8 text-center transition-transform duration-500 ease-in-out hover:translate-y-[-10px]">
                                    <div className="flex items-center justify-center">
                                        <span className={`${intelligence.icon} text-secondary dark:text-accent text-[52px]`} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-heading-5 line-clamp-1">{intelligence.title}</h3>
                                        <p className="mx-auto line-clamp-3 max-w-[361px]">{intelligence.description}</p>
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
