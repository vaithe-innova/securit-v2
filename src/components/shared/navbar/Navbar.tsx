// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/main-logo.svg';
import facebookIcon from '@public/images/icons/facebook.svg';
import linkedinIcon from '@public/images/icons/linkedin.svg';
import twitterIcon from '@public/images/icons/twitter.svg';
import instagramIcon from '@public/images/icons/instagram.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import { mobileMenuData } from './data';
import { useEffect, useState } from 'react';
import useActiveSection from '@/hooks/useActiveSection';

const Navbar = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  const { isScrolled } = useNavbarScroll(150);

  const isActive = (path: string) => {
    return pathname === path || pathname.endsWith(path) || pathname.endsWith(path + "/");
  };

  const activeSection = useActiveSection(['home', 'features', 'platform', 'industries', 'contact']);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    if (activeSection) {
      setActiveHash(`#${activeSection}`);
    } else {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [activeSection, pathname]);

  const isHomePage = pathname === "/" || pathname.startsWith("/demo");

  const isHomeActive = isHomePage && (!activeHash || activeHash === "#home");

  const isFeatureActive = isHomePage && activeHash === "#features";

  const isPlatformActive = isHomePage && activeHash === "#platform";

  const isIndustriesActive = isHomePage && activeHash === "#industries";

  const isContactActive = isHomePage && activeHash === "#contact";

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'fixed  h-[72px] left-1/2 z-50 top-0 mx-auto w-full -translate-x-1/2 transition-all duration-500',
          isScrolled && '',
        )}>
        <div className={cn("bg-[#0070CE] w-full transition-all duration-300 overflow-hidden", isScrolled ? "h-0 opacity-0" : "h-[36px] opacity-100")}>
          <div className="main-container mx-auto flex items-center justify-between text-white text-[13px] h-full">
            <div className="flex items-center gap-1 sm:gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              <a href="mailto:info@securit.app" className="hover:underline">info@securit.app</a>
            </div>
            <div className="flex justify-end sm:justify-center sm:items-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
              <Link href="/#contact" className="hover:underline flex items-center gap-1 font-medium text-xs sm:text-sm">
                Try 30-day free trial <span className="text-[14px]">&rarr;</span>
              </Link>
            </div>
            <div className="hidden sm:flex flex-1 sm:flex-none justify-end items-center gap-4">
              <Link href="https://linkedin.com" target="_blank" aria-label="Visit our LinkedIn page (opens in new tab)" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={linkedinIcon} alt="" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://facebook.com" target="_blank" aria-label="Visit our Facebook page (opens in new tab)" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={facebookIcon} alt="" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://x.com" target="_blank" aria-label="Follow us on X / Twitter (opens in new tab)" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={twitterIcon} alt="" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://instagram.com" target="_blank" aria-label="Follow us on Instagram (opens in new tab)" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={instagramIcon} alt="" width={12} height={12} className="brightness-0 invert" />
              </Link>
            </div>
          </div>
        </div>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div
            className={cn(
              'border-stroke-2 dark:border-stroke-6 bg-accent dark:bg-background-9 border-b-2 py-2.5 xl:py-1',
            )}>
            <div className='main-container  mx-auto flex items-center justify-between max-lg:justify-between'>
              <div className="flex items-center justify-center">
                <Link href="/" className="inline-flex items-center" aria-label="Securit - Go to homepage">
                  <Image src={mainLogo} alt="Securit" className="h-auto w-full dark:invert lg:max-w-[198px]" priority loading="eager" />
                </Link>
              </div>
              <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
                <ul className="flex items-center">
                  <li className={cn("relative py-2.5", isHomeActive && "active")}>
                    <Link href="/#home" onClick={() => setActiveHash("#home")}
                      aria-current={isHomeActive ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isFeatureActive && "active")}>
                    <Link
                      href="/#features"
                      onClick={() => setActiveHash('#features')}
                      aria-current={isFeatureActive ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Features</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isPlatformActive && "active")}>
                    <Link
                      href="/#platform"
                      onClick={() => setActiveHash('#platform')}
                      aria-current={isPlatformActive ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Platform</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isIndustriesActive && "active")}>
                    <Link
                      href="/#industries"
                      onClick={() => setActiveHash('#industries')}
                      aria-current={isIndustriesActive ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Industries</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isActive("/blog") && "active")}>
                    <Link
                      href="/blog"
                      aria-current={isActive("/blog") ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Blogs &amp; Events</span>
                    </Link>
                  </li>
                  <li className={cn("relative cursor-pointer py-2.5", isActive("/about") && "active")}>
                    <Link
                      href="/about"
                      aria-current={isActive("/about") ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isContactActive && "active")}>
                    <Link
                      href="/#contact"
                      onClick={() => setActiveHash('#contact')}
                      aria-current={isContactActive ? "page" : undefined}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent pl-4 pr-0 py-2 font-semibold transition-all duration-200">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
