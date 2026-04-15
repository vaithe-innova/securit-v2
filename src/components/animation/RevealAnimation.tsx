'use client';
import { cn } from '@/utils/cn';
import Springer from '@/utils/springer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { ReactElement, Ref, cloneElement, useEffect, useRef, useState } from 'react';

interface RevealAnimationProps {
  children: ReactElement<{
    className?: string;
    ref?: Ref<HTMLElement>;
    'data-ns-animate'?: string;
  }>;
  duration?: number;
  delay?: number;
  offset?: number;
  instant?: boolean;
  start?: string;
  end?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  useSpring?: boolean;
  rotation?: number;
  animationType?: 'from' | 'to' | 'skew-in';
  className?: string;
  repeatative?: boolean;
}

const RevealAnimation = ({
  children,
  duration = 0.6,
  delay = 0,
  offset = 60,
  instant = false,
  start = 'top 90%',
  end = 'top 50%',
  direction = 'down',
  useSpring = false,
  rotation = 0,
  animationType = 'from',
  className = '',
  repeatative = false,
}: RevealAnimationProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const element = elementRef.current;
    if (!element) {
      return;
    }

    // Get spring easing if useSpring is true
    const spring = useSpring ? Springer.default(0.2, 0.8) : null;

    // Force initial state for some properties to avoid FOUC or layout shifts
    gsap.set(element, { opacity: 1, filter: 'blur(0px)', scale: 1, skewX: 0, skewY: 0 });

    // Set animation properties based on animation type
    let vars: gsap.TweenVars = {
      duration: duration,
      delay: delay,
      ease: useSpring && spring ? (spring as any) : 'power3.out',
      overwrite: 'auto',
    };

    // Handle ScrollTrigger
    if (!instant) {
      vars.scrollTrigger = {
        trigger: element,
        start: start,
        end: end,
        toggleActions: repeatative ? 'restart none none reset' : 'play none none none',
      };
    }

    // Base values for 'from' animation
    const fromVars: gsap.TweenVars = {
      opacity: 0,
    };

    // Add rotation
    if (rotation !== 0) {
      fromVars.rotation = rotation;
    }

    // Direction-based offsets
    switch (direction) {
      case 'left': fromVars.x = -offset; break;
      case 'right': fromVars.x = offset; break;
      case 'down': fromVars.y = offset; break;
      case 'up': fromVars.y = -offset; break;
    }

    // To state (fully visible, resting position)
    const toVars: gsap.TweenVars = { ...vars, opacity: 1, x: 0, y: 0, rotation: 0, skewX: 0, skewY: 0 };

    // Specific animation logic
    if (animationType === 'from') {
      if (repeatative) {
        gsap.fromTo(element, fromVars, toVars);
      } else {
        gsap.from(element, { ...vars, ...fromVars });
      }
    } else if (animationType === 'skew-in') {
      const skewFromVars = {
        ...fromVars,
        skewX: direction === 'left' ? -6 : direction === 'right' ? 6 : 0,
        skewY: direction === 'up' ? -4 : direction === 'down' ? 4 : 0,
      };
      if (repeatative) {
        gsap.fromTo(element, skewFromVars, toVars);
      } else {
        gsap.from(element, { ...vars, ...skewFromVars });
      }
    } else {
      gsap.fromTo(element, fromVars, toVars);
    }

    return () => {
      if (!instant) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.trigger === element) {
            trigger.kill();
          }
        });
      }
    };
  }, [isMounted, duration, delay, offset, instant, start, end, direction, useSpring, rotation, animationType, repeatative]);

  // Early return if children is not valid (after all hooks)
  if (!children || !React.isValidElement(children)) {
    return null;
  }

  if (!isMounted) {
    return children;
  }

  // Clone the child element and add the ref, className, and data-ns-animate attribute
  return cloneElement(children, {
    ref: elementRef,
    className: cn(children?.props?.className, className),
    'data-ns-animate': 'true',
  });
};

export default RevealAnimation;
