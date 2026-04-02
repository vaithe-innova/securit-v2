// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import ResourcesMenu from './ResourcesMenu';
import { mobileMenuData } from './data';

const dropdownNavItems = [
  { label: 'Resources', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'fixed left-1/2 z-50 mx-auto w-full -translate-x-1/2 transition-all duration-500',
          isScrolled && '',
        )}>
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
                    <Image src={mainLogo} alt="Securit" className="h-auto w-full dark:invert" priority />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center lg:flex">
                <ul className="flex items-center">
                  <li className={cn("relative cursor-pointer py-2.5", pathname === "/" && "active")}>
                    <Link
                      href="/"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Home</span>
                    </Link>
                  </li>
                  {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                    <li
                      key={label}
                      className={cn("group relative cursor-pointer py-2.5", (menuDropdownId === dataMenu || pathname.startsWith('/resources')) && "active")}
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
                  ))}
                  <li className="relative cursor-pointer py-2.5">
                    <Link
                      href="/about"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Company</span>
                    </Link>
                  </li>
                  <li className={cn("relative cursor-pointer py-2.5", pathname === "/pricing" && "active")}>
                    <Link
                      href="/pricing"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Pricing</span>
                    </Link>
                  </li>
                  <li className={cn("relative cursor-pointer py-2.5", pathname === "/contact-us" && "active")}>
                    <Link
                      href="/contact-us"
                      className=" text-tagline-1 text-secondary hover:text-primary-500 dark:text-accent/60 dark:hover:text-accent flex items-center gap-1 rounded-full border border-transparent px-4 py-2 font-semibold transition-all duration-200">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center lg:flex">
                <Link href="/#contact" className="btn btn-md btn-primary hover:btn-white-dark dark:hover:btn-white mr-4 font-bold">
                  <span>Get a Demo</span>
                </Link>
                <Link href="" className="btn btn-md btn-outline-primary hover:btn-white-dark dark:hover:btn-white font-bold text-primary-500">
                  <span>Login</span>
                </Link>
              </div>

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
