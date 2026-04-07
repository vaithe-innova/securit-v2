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
                        <div className="mb-5 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#B7D4FF]">
                            <span className="text-xs sm:text-sm md:text-base font-normal bg-white text-primary-700">What We Offer</span>
                        </div>
                    </RevealAnimation>
                    <RevealAnimation delay={0.3}>
                        <h2 className="my-3 max-w-[900px] mx-auto text-white fw-700 text-[30px] !leading-[33px]" >
                            Built to prevent. Not just respond. 
                        </h2>
                    </RevealAnimation>
                    {/* <RevealAnimation delay={0.4}>
                        <p className="max-w-[680px] mx-auto text-primary-200 text-sm md:text-base lg:text-lg lg:!leading-[26px]">
                            Securit uses machine learning to interpret behavior, detect patterns, and surface risks —going beyond static rules and delayed responses.
                        </p>
                    </RevealAnimation> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {offerData.map((offer, index) => (
                        <RevealAnimation key={offer.slug} delay={0.1 + index * 0.1}>
                            <div className="h-full">
                                <div className="bg-[#050B15] border border-[#155DFC66] rounded-[24px] p-8 md:p-10 text-left h-full transition-all duration-300 hover:border-primary-500 group">
                                    <div className="w-[52px] h-[52px] bg-primary-500 rounded-[12px] flex items-center justify-center mb-8">
                                        {/* <span className={`${offer.icon} text-white text-[24px]`} /> */}
                                        <div dangerouslySetInnerHTML={{ __html: offer.svgIcon }} />
                                    </div>
                                    <div className='space-y-4'>
                                        <h3 className="text-[16px] lg:text-[20px] fw-700 text-white !leading-tight" >{offer.title}</h3>
                                        <p className="text-[#DBEAFE] text-[14px] lg:text-[16px] !leading-[26px]">{offer.description}</p>
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
