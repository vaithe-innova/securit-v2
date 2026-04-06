'use client';

import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

import imgConstruction from '@public/images/construction.png';
import imgManufacturing from '@public/images/ns-img-6.png'; 
import imgOilGas from '@public/images/oil-gas-energy.png';
import imgMining from '@public/images/remote.png'; 
import imgLogistics from '@public/images/ns-img-5.png'; 

const industries = [
  { id: 1, name: 'Construction', image: imgConstruction },
  { id: 2, name: 'Manufacturing', image: imgManufacturing },
  { id: 3, name: 'Oil & Gas', image: imgOilGas },
  { id: 4, name: 'Mining', image: imgMining },
  { id: 5, name: 'Logistics', image: imgLogistics },
];

const Industries = () => {
  return (
    <section className="bg-white dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        {/* Heading Section */}
        <div className="mx-auto mb-10 md:mb-14 max-w-[800px] space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <div className="inline-block border border-primary-200 dark:border-primary-500/30 rounded-[30px] px-5 py-[6px] mb-2 bg-transparent">
              <span className="text-primary-700 dark:text-primary-400 text-sm sm:text-[15px] font-medium">
                Industries We Supports
              </span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="text-primary-700 dark:text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4">
              Built for environments where safety moves fast
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-secondary dark:text-accent/60 mx-auto max-w-[750px] text-[18px] md:text-[20px] leading-[1.5]">
              Securit delivers real-time visibility and rapid response for high-risk, high-activity workplaces.
            </p>
          </RevealAnimation>
        </div>

        {/* Grid of Industries */}
        <RevealAnimation delay={0.5}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5 w-full mx-auto">
            {industries.map((industry) => (
              <div 
                key={industry.id} 
                className="flex flex-col group overflow-hidden bg-primary-700 dark:bg-background-5 w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px] cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative w-full h-[76%] overflow-hidden bg-black/10">
                  <Image 
                    src={industry.image} 
                    alt={industry.name} 
                    fill 
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Subtle overlay for better contrast */}
                  <div className="absolute inset-0 bg-primary-700/10 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                </div>
                
                {/* Title Section */}
                <div className="h-[24%] flex items-center justify-center p-3 text-center bg-primary-700">
                  <h3 className="text-white font-bold text-[15px] sm:text-base md:text-lg tracking-wide">
                    {industry.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Industries;