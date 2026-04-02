import Image from 'next/image';
import TabContent from '../ui/tab/TabContent';
import { industriesTabsData } from '@/data/industriesData';



const IndustriesTabContent = () => {
  return (
    <div className="hidden lg:block">
      {industriesTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <h2 className={`${index === 0 ? 'text-[32px] lg:text-[36px] xl:text-[40px] leading-[1.1] text-background-5 font-bold' : 'text-[36px] md:text-[40px] lg:text-[48px] leading-[1.1] text-background-5 font-bold'} mb-3`}>
                {tab.title}
                {tab.titleBreak && <br className="hidden lg:block" />}
                {tab.titleContinue && ` ${tab.titleContinue}`}
                <span className={`text-primary-500 ${index === 1 ? 'inline-block' : ''}`}>{tab.highlightedText}</span>
              </h2>
              <p className={`${index === 0 ? 'mb-6 xl:mb-8' : 'mb-8'} lg:max-w-[478px]`}>{tab.description}</p>
              <ul className={`${index === 0 ? 'mb-7 xl:mb-14' : 'mb-7 md:mb-14'} space-y-1.5`}>
                {tab.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex list-none items-center gap-5 py-2">
                    {/* <span className={`${feature.icon} text-secondary text-[36px] dark:text-white`}></span> */}
                    <figure className={index === 0 ? 'w-[calc(100%-40px)]lg:inline-block' : 'tab-item-image'}>
                      <Image src={feature.image} alt={feature.imageAlt} className={index === 0 ? 'w-fit object-cover rounded-[16px] w-10 h-10' : ''} />
                    </figure>
                    <div className='w-[calc(100%-40px)]'>
                      <strong className="text-tagline-1 text-secondary dark:text-accent font-medium">
                        {feature.title}
                      </strong>
                      <p className="text-base text-secondary font-normal">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* About Image */}
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <div className="flex items-center justify-center">
                <figure className={index === 0 ? 'lg:inline-block' : 'tab-item-image'}>
                  <Image src={tab.image} alt={tab.imageAlt} className={index === 0 ? 'w-fit object-cover rounded-[16px]' : ''} />
                </figure>
              </div>
            </div>
          </div>
        </TabContent>
      ))}
    </div>
  );
};
IndustriesTabContent.displayName = 'IndustriesTabContent';
export default IndustriesTabContent;
