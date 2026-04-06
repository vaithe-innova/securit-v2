'use client';

import { IOffer } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface OfferListProps {
    offerData: IOffer[];
}

const OfferList = ({ offerData }: OfferListProps) => {
    return (
        <section className="bg-background-5 pt-20 pb-20 md:pb-16 lg:pb-[100px] xl:pt-[120px] xl:pb-[140px]">
            <div className="main-container">
                <div className="mb-[60px] space-y-6 text-center">
                    <RevealAnimation delay={0.2}>
                        <div className="inline-flex items-center rounded-full bg-white px-5 py-2 text-primary-700 font-bold text-xs sm:text-sm">
                            What We Offers
                        </div>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                        <h2 className="my-2 max-w-[900px] mx-auto text-white fw-700 text-3xl lg:text-5xl xl:text-[48px] !leading-snug" >
                            Most systems react. This one understands.
                        </h2>
                    </RevealAnimation>
                    <RevealAnimation delay={0.4}>
                        <p className="max-w-[800px] mx-auto text-[#94999C] text-sm md:text-base lg:text-lg lg:!leading-[28px]">
                            Securit uses machine learning to interpret behavior, detect patterns, and surface risks —going beyond static rules and delayed responses.
                        </p>
                    </RevealAnimation>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {offerData.map((offer, index) => (
                        <RevealAnimation key={offer.slug} delay={0.1 + index * 0.1}>
                            <div className="h-full">
                                <div className="bg-[#050B15] border border-[#161C26] rounded-[24px] p-8 md:p-10 text-left h-full transition-all duration-300 hover:border-primary-500 group">
                                    <div className="w-[52px] h-[52px] bg-primary-500 rounded-[12px] flex items-center justify-center mb-8">
                                        <span className={`${offer.icon} text-white text-[24px]`} />
                                    </div>
                                    <div className='space-y-4'>
                                        <h3 className="text-[22px] lg:text-[24px] fw-700 text-white !leading-tight group-hover:text-primary-500 transition-colors" >{offer.title}</h3>
                                        <p className="text-[#94999C] text-[15px] lg:text-[16px] !leading-[26px]">{offer.description}</p>
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

export default OfferList;
