'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { FooterOneData } from '@/interface';
import linkedin from '@public/images/icons/linkedin.svg';
import youtube from '@public/images/icons/youtube.svg';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from '../navbar/data';
import FooterDivider from './FooterDivider';

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-conditions' },
  { label: 'Security', href: '/security' },
];

const Footer = () => {

  return (
    <footer className="relative overflow-hidden bg-[#000000]">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-y-12 pt-16 pb-12 xl:gap-x-10 xl:pt-[90px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure>
                  <Image src={darkLogo} alt="Securit Logo" width={175} height={32} />
                </figure>
                <p className="text-accent/60 text-tagline-1 mt-7 mb-7 font-normal">
                  Smart Safety for Every Worker. Real-time visibility and AI-powered insights to protect your workforce.
                </p>
                <div className="flex items-center gap-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com"
                    className="flex size-10 items-center justify-center rounded-lg bg-[#1A1A1E] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <Image className="size-5 brightness-0 invert" src={linkedin} alt="LinkedIn" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.x.com"
                    className="flex size-10 items-center justify-center rounded-lg bg-[#1A1A1E] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">X (Twitter)</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.139l11.944 15.644z" />
                    </svg>
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.youtube.com"
                    className="flex size-10 items-center justify-center rounded-lg bg-[#1A1A1E] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <span className="sr-only">Youtube</span>
                    <Image className="size-5 brightness-0 invert" src={youtube} alt="Youtube" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {footerData?.map((item: FooterOneData, index: number) => (
            <div key={index} className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4 + 0.1 * index}>
                <div className="space-y-4">
                  <ul className="space-y-4">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-tagline-2 text-primary-50/70 hover:text-primary-50 font-normal transition-colors duration-200"
                        >  {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealAnimation>
            </div>
          ))}
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <RevealAnimation delay={0.6}>
              <div className="max-w-[390px] space-y-6">
                <h4 className="text-tagline-1 font-bold text-white">General Inquiries</h4>
                <p className="text-accent/60 text-tagline-1 font-normal">
                  Have a question or want to learn more? Reach out and we&apos;ll connect you with the right person.
                </p>
                <div className="space-y-3">
                  <p className="text-tagline-1 text-white">
                    <span className="font-bold mr-1">Email:</span>
                    <a href="mailto:info@securit.com" className="text-accent/60 transition-colors duration-200 hover:text-white">
                      info@securit.com
                    </a>
                  </p>
                  <p className="text-tagline-1 text-white">
                    <span className="font-bold mr-1">Phone:</span>
                    <a href="tel:+1-770-493-5588" className="text-accent/60 transition-colors duration-200 hover:text-white">
                      +1 770-493-5588
                    </a>
                  </p>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Divider and Copyright */}
        <div className="relative pt-[26px] pb-[100px] text-center">
          <FooterDivider />
          <RevealAnimation delay={0.7} offset={10} start="top 95%">
            <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:justify-between">
              {/* copyright */}
              <p className="text-tagline-2 text-primary-50/70 font-normal">
                &copy;2026 Innova Solutions. All Rights Reserved.
              </p>

              {/* legal links */}
              <nav aria-label="Legal links">
                <ul className="flex items-center gap-6 sm:gap-8">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-tagline-2 text-primary-50/70 hover:text-primary-50 font-normal transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';

export default Footer;
