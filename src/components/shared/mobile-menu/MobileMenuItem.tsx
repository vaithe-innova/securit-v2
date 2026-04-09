'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { ReactNode } from 'react';

interface MobileMenuItemProps {
  id: string;
  title: string;
  href?: string;
  target?: string;
  children?: ReactNode;
  hasSubmenu?: boolean;
  isActive?: boolean; 
}

const MobileMenuItem = ({ id, title, href, target, children, hasSubmenu = false, isActive = false }: MobileMenuItemProps) => {
  const { activeSubmenu, toggleSubmenu, closeMenu } = useMobileMenuContext();

  const isSubmenuOpen = activeSubmenu === id;

  const handleToggle = () => {
    if (hasSubmenu) {
      toggleSubmenu(id);
    }
  };

  const itemClassName = cn(
    'flex w-full cursor-pointer items-center justify-between p-2.5 transition-all duration-200 text-left',
  );

  const textClassName = cn(
    'text-tagline-1 ease block font-normal transition-colors duration-300',
    isActive ? 'text-primary-500 font-semibold' : (isSubmenuOpen ? 'text-secondary dark:text-accent font-medium' : 'text-secondary/60 dark:text-accent/60'),
  );

  const content = (
    <>
      <span className={textClassName}>{title} </span>
      {hasSubmenu && (
        <span
          className={cn(
            'stroke-secondary/60 dark:stroke-accent/60 size-5 transition-transform duration-300 ease-in-out',
            isSubmenuOpen && 'rotate-90',
          )}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
            <path d="M8 12L12 8L8 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      )}
    </>
  );

  return (
    <li className="space-y-2">
      {hasSubmenu ? (
        <button
          onClick={handleToggle}
          className={itemClassName}
          aria-expanded={isSubmenuOpen}
          aria-controls={`submenu-${id}`}>
          {content}
        </button>
      ) : href ? (
        <Link href={href} target={target} onClick={() => closeMenu()} className={itemClassName}>
          {content}
        </Link>
      ) : (
        <div className={itemClassName}>{content}</div>
      )}

      {/* show submenu parent  */}
      {hasSubmenu && children && (
        <div
          id={`submenu-${id}`}
          className={cn(
            'dark:bg-background-8 ml-3.5 w-full overflow-y-hidden bg-white transition-[height,opacity] duration-300 ease-in-out',
            isSubmenuOpen ? 'pointer-events-auto h-fit opacity-100' : 'pointer-events-none h-0 opacity-0',
          )}>
          {/* render submenu  */}
          {children}
        </div>
      )}
    </li>
  );
};

MobileMenuItem.displayName = 'MobileMenuItem';
export default MobileMenuItem;
