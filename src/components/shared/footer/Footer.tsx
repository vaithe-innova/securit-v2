'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { FooterOneData } from '@/interface';
import darkLogo from '@public/images/shared/logo-dark.svg';
import Image from 'next/image';
import Link from 'next/link';
import { insightsData, companyData } from '../navbar/data';
import FooterDivider from './FooterDivider';

const legalLinks = [
  { label: 'Privacy Policy', href: '/' },
  { label: 'Terms of Service', href: '/' },
  { label: 'Security', href: '/' },
];

const Footer = () => {
  const footerColumns = [...insightsData, ...companyData];

  return (
    <footer className="relative overflow-hidden bg-[#000000]">
      <div className="main-container px-5">
        <div className="grid grid-cols-12 justify-between gap-y-12 pt-16 pb-12 xl:gap-x-10 xl:pt-[90px]">
          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <RevealAnimation delay={0.3}>
              <div className="max-w-[306px]">
                <figure >
                  <Image src={darkLogo} alt="Securit Logo" width={175} height={32} />
                </figure>
                <div className="flex items-center mt-6 gap-3">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/innova-solutions"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-[#1D293D] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src="/images/icons/linkedin.svg" alt="LinkedIn" className="w-[12px] h-[12px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.twitter.com/innovasolutions"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-[#1D293D] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src="/images/icons/twitter.svg" alt="Twitter" className="w-[12px] h-[12px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/innovasolutions"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-[#1D293D] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src="/images/icons/instagram.svg" alt="Instagram" className="w-[12px] h-[12px]" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://facebook.com"
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-lg bg-[#1D293D] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <img src="/images/icons/facebook.svg" alt="Facebook" className="w-[12px] h-[12px]" />
                  </Link>
                </div>
              </div>
            </RevealAnimation>
          </div>
          {footerColumns.map((item: FooterOneData, index: number) => (
            <div key={index} className="col-span-12 md:col-span-6 xl:col-span-3">
              <RevealAnimation delay={0.4 + 0.1 * index}>
                <div className="space-y-6">
                  {item.title && (
                    <h4 className="text-[18px] !leading-[20px] text-white fw-700">{item.title}</h4>
                  )}
                  <ul className="space-y-4">
                    {item.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          target={link.target}
                          className="text-[14px] !leading-[18px] text-primary-50 hover:text-white font-normal transition-colors duration-200"
                        >
                          {link.label}
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
                <h4 className="text-[18px] !leading[20px] text-white fw-700">General Inquiries</h4>
                <p className="text-primary-50 text-[14px] !leading-[18px]">
                  Have a question or want to learn more? Reach out and we&apos;ll connect you with the right person.
                </p>
                <div className="space-y-1">
                  <p className="text-[14px] !leading-[18px] text-white">
                    <span className="text-primary-50 mr-1">Email:</span>
                    <a href="mailto:info@securit.com" className="text-primary-50 transition-colors duration-200 hover:text-accent/80">
                      info@securit.com
                    </a>
                  </p>
                </div>

                <div className="space-y-1">
                  <p className="text-[14px] !leading-[18px] text-white">
                    <span className="text-primary-50 mr-1">Phone:</span>
                    <a href="tel:+18007248328" className="text-primary-50 transition-colors duration-200 hover:text-accent/80">
                      +1 (800) 724-8328
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
            <div className="flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
              {/* copyright */}
              <p className="text-[14px] text-primary-50/70 font-normal">
                &copy;{new Date().getFullYear()} Innova Solutions. All Rights Reserved.
              </p>

              {/* legal links */}
              <nav aria-label="Legal links">
                <ul className="flex items-center gap-6 sm:gap-8">
                  {legalLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-primary-50/70 hover:text-primary-50 font-normal transition-colors duration-200"
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
