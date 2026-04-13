'use client';

import { IMobileMenuGroup } from '@/interface';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/main-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useActiveSection from '@/hooks/useActiveSection';

const MobileMenu = ({ menuData }: { menuData: IMobileMenuGroup[] }) => {
  const { isOpen } = useMobileMenuContext();

  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState('');

  const activeSection = useActiveSection(['home', 'features', 'platform', 'industries', 'contact']);

  useEffect(() => {
    if (activeSection) {
      setActiveHash(`#${activeSection}`);
    } else {
      const handleHashChange = () => {
        setActiveHash(window.location.hash);
      };

      handleHashChange();
    }
  }, [activeSection, pathname]);

  // ✅ Active logic
  const isHomePage = pathname === '/' || pathname.startsWith('/demo');

  const isHomeActive = isHomePage && (!activeHash || activeHash === "#home");
  const isFeatureActive = isHomePage && activeHash === '#features';
  const isContactActive = isHomePage && activeHash === '#contact';
  const isPlatformActive = isHomePage && activeHash === '#platform';
  const isIndustriesActive = isHomePage && activeHash === '#industries';

  const isActive = (href: string) => {
    if (href === '/' || href.includes('#home')) { return isHomeActive; }
    if (href.includes('#features')) { return isFeatureActive; }
    if (href.includes('#platform')) { return isPlatformActive; }
    if (href.includes('#industries')) { return isIndustriesActive; }
    if (href.includes('#contact')) { return isContactActive; }

    return pathname === href || pathname.startsWith(href);
  };

  return (
    <aside
      className={cn(
        'dark:bg-background-8 fixed top-0 right-0 z-[9999] h-screen w-full translate-x-full bg-white transition-all duration-300 sm:w-1/2 sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}
    >
      <div className="space-y-4 p-5 sm:p-8 lg:p-9">

        {/* HEADER */}
        <div className="flex items-center justify-between">
          <Link href="/#home" onClick={() => setActiveHash('#home')}>
            <Image src={mainLogo} alt="Logo" />
          </Link>
          <MenuCloseButton />
        </div>

        {/* MENU */}
        <div className="mt-6 h-[85vh] overflow-y-auto pb-10">
          <p className="text-secondary mb-2">Menu</p>

          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                href={item.href}
                target={item.target}
                hasSubmenu={item.submenu.length > 0}
                isActive={item.href ? isActive(item.href) : false}
              >
                <ul>
                  {item?.submenu?.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        target={subItem.target}
                        onClick={() => {
                          // ✅ manual hash control
                          if (subItem.href.includes('#home')) {
                            setActiveHash('#home');
                          } else if (subItem.href.includes('#features')) {
                            setActiveHash('#features');
                          } else if (subItem.href.includes('#platform')) {
                            setActiveHash('#platform');
                          } else if (subItem.href.includes('#industries')) {
                            setActiveHash('#industries');
                          } else if (subItem.href.includes('#contact')) {
                            setActiveHash('#contact');
                          } else {
                            setActiveHash('');
                          }
                        }}
                        className={cn(
                          'ml-4 block py-2.5 text-left transition-all duration-200',
                          isActive(subItem.href)
                            ? 'text-primary-500 font-semibold'
                            : 'text-secondary'
                        )}
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default MobileMenu;