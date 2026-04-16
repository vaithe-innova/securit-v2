'use client';
import RevealAnimation from '../animation/RevealAnimation';
import faqData from '@/data/json/faq/faq.json';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const Faq = () => {
  return (
    <section className="pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="main-container">
        {/* Headings */}
        <div className="mb-3 max-w-[70%] mx-auto space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#0070CE]">
              <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">FAQ</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="text-primary-700 font-bold text-[22px] sm:text-[30px] !leading-[28px] sm:!leading-[34px] mb-2">
              Commonly Asked Question
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-secondary text-base sm:text-[20px] !leading-[24px] sm:!leading-[26px]">
              By offering concise and informative responses, this section helps users find solutions without the need to contact customer support, saving time
            </p>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="py-[70px]">
            <Accordion
              className="mx-auto w-full max-w-[850px] space-y-4"
              defaultValue="1"
              enableScrollAnimation={true}
              animationDelay={0.1}>
              {faqData.map((item) => (
                <AccordionItem
                  className="dark:bg-background-7 rounded-[20px] bg-white px-6 sm:px-8"
                  key={item.id}
                  value={item.id.toString()}>
                  <AccordionTrigger
                    titleClassName="flex-1 text-left sm:text-heading-6 text-tagline-1 font-normal text-secondary dark:text-accent"
                    className="flex w-full cursor-pointer items-center justify-between pt-5 pb-5 sm:pt-8 sm:pb-8"
                    value={item.id.toString()}
                    iconType="arrow">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent value={item.id.toString()}>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

Faq.displayName = 'Faq';
export default Faq;
