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
      { id: 'blog', label: 'Blog', href: '' },
      { id: 'tutorial', label: 'Tutorial', href: '' },
      { id: 'faq', label: 'FAQ', href: './' },
      { id: 'glossary', label: 'Glossary', href: '' },
    ],
  },
  {
    id: 'company',
    title: 'Company',
    submenu: [],
    href: 'https://www.innovasolutions.com',
    target: '_blank',
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

export const footerData: FooterOneData[] = [
  {
    links: [
      { label: 'Blogs', href: '' },
      { label: 'Case Studies', href: '' },
      { label: 'News and events', href: '' },
      { label: 'Collaboration', href: '' },
    ],
  },
  {
    links: [
      { label: 'About Us', href: '' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'FAQs', href: '' },
    ],
  },
];
