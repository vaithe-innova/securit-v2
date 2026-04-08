import { FooterOneData, IMobileMenuGroup } from '@/interface';

export const mobileMenuData: IMobileMenuGroup[] = [
  {
    id: 'home',
    title: 'Home',
    submenu: [],
    href: '/',
  },
  {
    id: 'features',
    title: 'Features',
    submenu: [],
    href: '/#features',
  },
  {
    id: 'blog',
    title: 'Blogs and Events',
    submenu: [],
    href: '/blog',
  },
  {
    id: 'about',
    title: 'About Us',
    submenu: [],
    href: '/about',
  },
  // {
  //   id: 'company',
  //   title: 'Company',
  //   href: undefined,
  //   submenu: [
  //     { id: 'about', label: 'About Us', href: '/about' },
  //     { id: 'team', label: 'Our Team', href: '/#team' },
  //   ],
  // },
  {
    id: 'contact-us',
    title: 'Contact Us',
    submenu: [],
    href: '/#contact',
  },
];

export const insightsData: FooterOneData[] = [
  {
    title: 'Insights',
    links: [
      { label: 'Blogs', href: '/blog' },
      // { label: 'Case Studies', href: '' },
      { label: 'News and events', href: '/blog/#events' },
      { label: 'Collaboration', href: '' },
    ],
  },
];
export const companyData: FooterOneData[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      // { label: 'Pricing', href: '/pricing' },
      { label: 'Contact Us', href: '/#contact' },
      { label: 'FAQs', href: '/faq' },
    ],
  },
];
