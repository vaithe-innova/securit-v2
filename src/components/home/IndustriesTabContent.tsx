import aboutWarehousing from '@public/images/ns-img-5.png';
import aboutManufacturing from '@public/images/ns-img-6.png';
import iconN1First from '@public/images/ns1-icon1.svg';
import iconN1Two from '@public/images/ns1-icon2.svg';
import iconN1Three from '@public/images/ns1-icon3.svg';
import iconN1Four from '@public/images/ns1-icon4.svg';
import aboutRemote from '@public/images/remote.png';
import aboutConstruction from '@public/images/construction.png';
import aboutOilGas from '@public/images/oil-gas-energy.png';
import Image from 'next/image';
import TabContent from '../ui/tab/TabContent';

const industriesTabsData = [
  {
    id: 'manufacturing',
    badge: 'About',
    title: 'Managing risk during live production and maintenance transitions',
    titleBreak: true,
    titleContinue: '',
    highlightedText: '',
    description:
      '',
    image: aboutManufacturing,
    imageAlt: '',
    buttonText: 'About us',
    buttonHref: '/about',
    features: [
      {
        icon: 'ns-shape-6',
        title: '',
        image: iconN1First,
        imageAlt: '',
        description: 'Detect when workers enter maintenance areas while equipment is still running or hasn’t been fully shut down ',
      },
      {
        icon: 'ns-shape-46',
        title: '',
        image: iconN1Two,
        imageAlt: '',
        description: 'Track how close workers are to moving machinery like robotic arms, conveyor belts, and production lines ',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Three,
        imageAlt: '',
        description: 'Monitor activity during line changeovers, shutdowns, and restarts — when mistakes and miscommunication are most likely ',
      },
      {
        icon: 'ns-shape-48',
        title: '',
        image: iconN1Four,
        imageAlt: '',
        description: 'Capture full timelines of incidents, tied to specific machines, locations, and actions taken',
      },
    ],
  },
  {
    id: 'warehousing',
    badge: 'About',
    title: 'Reducing forklift incidents and high-traffic collisions ',
    titleBreak: false,
    highlightedText: ' ',
    description:
      '',
    image: aboutWarehousing,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about',
    features: [
      {
        icon: 'ns-shape-6',
        title: '',
        image: iconN1First,
        imageAlt: '',
        description: 'Set boundaries around loading docks, cross-aisles, and forklift lanes where traffic is highest ',
      },
      {
        icon: 'ns-shape-46',
        title: '',
        image: iconN1Two,
        imageAlt: '',
        description: 'Detect when workers and forklifts are operating too close to each other in busy areas ',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Three,
        imageAlt: '',
        description: 'Track movement across picking, packing, and staging zones to identify congestion points ',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Four,
        imageAlt: '',
        description: 'Surface falls or sudden inactivity across large warehouse floors immediately ',
      },
    ],
  },
  {
    id: 'construction',
    badge: 'About',
    title: 'Keeping safety aligned with constantly changing job sites',
    titleBreak: false,
    highlightedText: '',
    description:
      "",
    image: aboutConstruction,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about',
    features: [
      {
        icon: 'ns-shape-6',
        title: '',
        image: iconN1First,
        imageAlt: '',
        description: 'Set temporary boundaries around excavation zones, scaffolding, and elevated work areas as conditions change ',
      },
      {
        icon: 'ns-shape-46',
        title: '',
        image: iconN1Two,
        imageAlt: '',
        description: 'Track worker location across large, multi-level, or spread-out sites',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Three,
        imageAlt: '',
        description: 'Detect falls or lack of movement in isolated or high-risk areas ',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Four,
        imageAlt: '',
        description: 'Automatically log site activity to support incident reporting and compliance requirements ',
      },
    ],
  },
  {
    id: 'remote',
    badge: 'About',
    title: 'Protecting workers in isolated and low-visibility environments ',
    titleBreak: false,
    highlightedText: ' ',
    description:
      '',
    image: aboutOilGas,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about',
    features: [
      {
        icon: 'ns-shape-6',
        title: '',
        image: iconN1First,
        imageAlt: '',
        description: 'Detect missed check-ins or unusual movement during inspections, repairs, or field work ',
      },
      {
        icon: 'ns-shape-46',
        title: '',
        image: iconN1Two,
        imageAlt: '',
        description: 'Escalate alerts when a worker stops moving in areas without direct supervision',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Three,
        imageAlt: '',
        description: 'Maintain visibility even in areas with limited connectivity using available network coverage',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Four,
        imageAlt: '',
        description: 'Track response times and activity during outages, maintenance, or emergency dispatch',
      },
    ],
  },
  {
    id: 'oilgas',
    badge: 'About',
    title: 'Enforcing safety across high-risk, permit-controlled environments ',
    titleBreak: false,
    highlightedText: ' ',
    description:
      '',
    image: aboutRemote,
    imageAlt: 'Happy man using phone',
    buttonText: 'About us',
    buttonHref: '/about',
    features: [
      {
        icon: 'ns-shape-6',
        title: '',
        image: iconN1First,
        imageAlt: '',
        description: 'Restrict access to hazardous areas like confined spaces, hot work zones, or chemical storage locations',
      },
      {
        icon: 'ns-shape-46',
        title: '',
        image: iconN1Two,
        imageAlt: '',
        description: 'Track movement of crews and contractors across active work zones and job assignments ',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Three,
        imageAlt: '',
        description: 'Detect unauthorized entry into restricted or high-risk areas',
      },
      {
        icon: 'ns-shape-47',
        title: '',
        image: iconN1Four,
        imageAlt: '',
        description: 'Coordinate response across large, complex sites during critical incidents',
      },
    ],
  },
];

const IndustriesTabContent = () => {
  return (
    <>
      {industriesTabsData.map((tab, index) => (
        <TabContent key={tab.id} index={index}>
          <div className="flex w-full flex-col items-start justify-between gap-x-24 gap-y-14 lg:flex-row">
            <div className="flex-1 sm:mx-auto sm:max-w-[500px] lg:max-w-full">
              <h2 className={`${index === 0 ? 'text-[36px] md:text-[40px] lg:text-[48px] leading-[1.1] text-background-5 font-bold' : 'text-[36px] md:text-[40px] lg:text-[48px] leading-[1.1] text-background-5 font-bold'} mb-3`}>
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
                      <p className="text-base text-ns-gray-medium font-normal">
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
    </>
  );
};
IndustriesTabContent.displayName = 'IndustriesTabContent';
export default IndustriesTabContent;
