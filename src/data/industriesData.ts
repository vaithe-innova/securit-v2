import aboutWarehousing from '@public/images/ns-img-5.png';
import aboutManufacturing from '@public/images/ns-img-6.png';
import iconN1First from '@public/images/ns1-icon1.svg';
import iconN1Two from '@public/images/ns1-icon2.svg';
import iconN1Three from '@public/images/ns1-icon3.svg';
import iconN1Four from '@public/images/ns1-icon4.svg';
import aboutRemote from '@public/images/remote.png';
import aboutConstruction from '@public/images/construction.png';
import aboutOilGas from '@public/images/oil-gas-energy.png';

export const industriesTabsData = [
  {
    id: 'manufacturing',
    badge: 'About',
    maintitle: 'Manufacturing & Industrial',
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
    maintitle: 'Warehousing & Logistics',
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
    maintitle: 'Construction & Field Work',
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
    maintitle: 'Utilities & Remote Operations',
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
    maintitle: 'Oil, Gas & Energy',
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