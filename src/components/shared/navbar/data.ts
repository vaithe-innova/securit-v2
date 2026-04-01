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
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'tutorial', label: 'Tutorial', href: './tutorial' },
      { id: 'faq', label: 'FAQ', href: './faq' },
      { id: 'glossary', label: 'Glossary', href: './glossary' },
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
      { label: 'Blogs', href: '/blog' },
      { label: 'Case Studies', href: '/case-study' },
      { label: 'News and events', href: '/news-and-events' },
      { label: 'Collaboration', href: '/collaboration' },
    ],
  },
  {
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
];
