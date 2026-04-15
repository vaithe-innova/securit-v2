'use client';

import { IOffer } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';

interface OfferListProps {
    offerData: IOffer[];
}

const OfferList = ({ offerData }: OfferListProps) => {
    return (
        <div className="main-container">
            <div className="mb-[60px] space-y-6 text-center">
                <RevealAnimation delay={0.2} direction="left" animationType="from" offset={100} useSpring={true} repeatative>
                    <div className="mb-5 flex items-center w-fit mx-auto rounded-[30px] bg-white py-[6px] px-5 border-[1px] border-[#0070CE]">
                        <span className="text-xs sm:text-sm md:text-base font-normal bg-white text-primary-700">What We Offer</span>
                    </div>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                    <h2 className="my-3 max-w-[900px] mx-auto text-primary-700 fw-700 text-[22px] sm:text-[26px] md:text-[30px] !leading-[28px] sm:!leading-[31px] md:!leading-[33px]" >
                        One platform for total safety visibility
                    </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                    <p className="max-w-[680px] mx-auto text-black text-sm md:text-base lg:text-lg lg:!leading-[26px]">
                        Our system connects workers, devices, and monitoring systems into one centralized platform, helping you turn information into insight and action.
                    </p>
                </RevealAnimation>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {offerData.map((offer, index) => (
                    <RevealAnimation key={offer.slug} delay={0.15 + index * 0.12} direction="up" offset={50}>
                        <div className="group relative bg-white hover:bg-[#050B15] border border-[#155DFC66] h-full rounded-[24px] overflow-hidden transition-all duration-500 ease-in-out hover:-translate-y-3 hover:shadow-[0_20px_40px_-15px_rgba(21,93,252,0.3)]">
                            <div className="p-6 sm:p-8 md:p-10 text-left h-full transition-all duration-500">
                                <div className="w-[52px] h-[52px] bg-primary-500 rounded-[12px] flex items-center justify-center mb-5 sm:mb-8 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 shadow-md">
                                    <div dangerouslySetInnerHTML={{ __html: offer.svgIcon }} className="scale-100 group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className='space-y-4'>
                                    <h3 className="text-[16px] lg:text-[20px] fw-700 !leading-tight text-black transition-colors duration-500 group-hover:text-white">{offer.title}</h3>
                                    <p className="text-black transition-colors duration-500 group-hover:text-[#DBEAFE] text-[14px] lg:text-[16px] !leading-[26px] opacity-80 group-hover:opacity-100">{offer.description}</p>
                                </div>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary-500 to-primary-700 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    </RevealAnimation>
                ))}
            </div>
        </div >
    );
};

export default OfferList;
