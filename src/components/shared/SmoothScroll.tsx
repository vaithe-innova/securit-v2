'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, useEffect, useRef } from 'react';

interface SmoothScrollingProps {
  children: ReactNode;
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);

  const lenis = useLenis();

  useEffect(() => {
    // Only scroll to top if pathname actually changed (navigation), not on initial render or reload
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      if (!window.location.hash) {
        lenis?.scrollTo(0, { immediate: true });
      }
    }

    // Handle initial hash scroll or hash change on same page
    const hash = window.location.hash;
    if (hash && lenis) {
      // Small delay to ensure content is measured after hydration
      const timeoutId = setTimeout(() => {
        lenis.scrollTo(hash, { offset: -100 });
      }, 500);
      return () => clearTimeout(timeoutId);
    }

    // Update refs
    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname, searchParams, lenis]);

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const handleClick = (ele: Element) => {
      lenis.scrollTo(ele.getAttribute('href') ?? '', {
        offset: -100,
      });
    };

    const elements = document.querySelectorAll('.lenis-scroll-to');
    const clickHandler = (e: Event) => handleClick(e.target as Element);

    elements.forEach((ele) => {
      ele.addEventListener('click', clickHandler);
    });

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', clickHandler);
      });
    };
  }, [lenis, pathname]);

  return (
    <ReactLenis root options={{ duration: 1.1 }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScrollProvider;
