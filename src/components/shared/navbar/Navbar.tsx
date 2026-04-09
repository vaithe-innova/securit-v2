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
// import CompanyMenu from './CompanyMenu';
import { mobileMenuData } from './data';
import { useEffect, useState } from 'react';

// const dropdownNavItems = [
//   { label: 'Company', dataMenu: 'company-dropdown-menu', MenuComponent: CompanyMenu },
// ];

const Navbar = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  // const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Handle explicit hash changes (like from another page)
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    // Scroll Spy for Home Page Sections
    let observer: IntersectionObserver;
    const observedElements: Element[] = [];

    // Run slightly after mount so elements exist
    const timeoutId = setTimeout(() => {
      const sections = ['features', 'contact'];
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveHash(`#${entry.target.id}`);
            }
          });
        },
        { rootMargin: '-20% 0px -70% 0px' }
      );

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
          observedElements.push(element);
        }
      });
    }, 500);

    const handleScrollClear = () => {
      if (window.scrollY < 100) {
        setActiveHash('');
      }
    };
    window.addEventListener('scroll', handleScrollClear);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener('scroll', handleScrollClear);
      clearTimeout(timeoutId);
      if (observer) {
        observedElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      }
    };
  }, [pathname]);

  const isActive = (path: string) => {
    return pathname === path || pathname.endsWith(path) || pathname.endsWith(path + "/");
  };

  const isHomePage = pathname === "/" || pathname.startsWith("/demo");

  const isHomeActive = isHomePage && !activeHash;

  const isFeatureActive = isHomePage && activeHash === "#features";

  const isContactActive = isHomePage && activeHash === "#contact";

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'fixed left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-500',
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
              <Link href="https://linkedin.com" target="_blank" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={linkedinIcon} alt="LinkedIn" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={facebookIcon} alt="Facebook" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://x.com" target="_blank" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={twitterIcon} alt="X" width={12} height={12} className="brightness-0 invert" />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:opacity-80 transition-opacity flex items-center justify-center">
                <Image src={instagramIcon} alt="Instagram" width={12} height={12} className="brightness-0 invert" />
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
                <Link href="/" className="inline-flex items-center">
                  <span className="sr-only">Home</span>
                  <figure className="lg:max-w-[198px]">
                    <Image src={mainLogo} alt="Securit" className="h-auto w-full dark:invert" priority loading="eager" />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center lg:flex">
                <ul className="flex items-center">
                  <li className={cn("relative py-2.5", isHomeActive && "active")}>
                    <Link href="/" onClick={() => setActiveHash("")}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isFeatureActive && "active")}>
                    <Link
                      href="/#features"
                      onClick={() => setActiveHash('#features')}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Features</span>
                    </Link>
                  </li>
                  <li className={cn("relative py-2.5", isActive("/blog") && "active")}>
                    <Link
                      href="/blog"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Blogs &amp; Events</span>
                    </Link>
                  </li>
                  <li className={cn("relative cursor-pointer py-2.5", isActive("/about") && "active")}>
                    <Link
                      href="/about"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>About Us</span>
                    </Link>
                  </li>
                  {/* {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                    <li
                      key={label}
                      className={cn("group relative cursor-pointer py-2.5", (menuDropdownId === dataMenu || pathname.startsWith('/company')) && "active")}
                      data-menu={dataMenu}
                      onMouseEnter={() => handleMenuHover(dataMenu)}>
                      <button
                        type="button"
                        className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex cursor-pointer items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                        <span>{label}</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                          </svg>
                        </span>
                      </button>
                      <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                    </li>
                  ))} */}
                  <li className={cn("relative py-2.5", isContactActive && "active")}>
                    <Link
                      href="/#contact"
                      onClick={() => setActiveHash('#contact')}
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent pl-4 pr-0 py-2 font-semibold transition-all duration-200">
                      <span>Contact</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* <div className="hidden items-center justify-center lg:flex">
                <Link href="https://workersafety.innovasolutions.com/" target="_blank" className="btn btn-md-v3 btn-primary hover:btn-white-dark dark:hover:btn-white font-bold">
                  <span>Login</span>
                </Link>
              </div> */}

              {/* mobile menu ham burger icon  */}
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
        {/* mobile menu component */}
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
