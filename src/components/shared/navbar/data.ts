import { FooterOneData, IMobileMenuGroup } from '@/interface';

export const mobileMenuData: IMobileMenuGroup[] = [
  {
    id: 'home',
    title: 'Home',
    submenu: [],
    href: '/',
  },
  {
    id: 'resources',
    title: 'Resources',
    href: undefined,
    submenu: [
      { id: 'blog', label: 'Blogs', href: '' },
      { id: 'case', label: 'Case Studies', href: '' },
      { id: 'news', label: 'News and events', href: '' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [],
    href: '/about',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    submenu: [],
    href: '/pricing',
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    submenu: [],
    href: '/contact-us',
  },
];

export const insightsData: FooterOneData[] = [
  {
    links: [
      { label: 'Blogs', href: '' },
      { label: 'Case Studies', href: '' },
      { label: 'News and events', href: '' },
      { label: 'Collaboration', href: '' },
    ],
  },
];
export const companyData: FooterOneData[] = [
  {
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'FAQs', href: '' },
    ],
  },
];
