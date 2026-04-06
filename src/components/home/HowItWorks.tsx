'use client';

import { useState, useRef, useEffect } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

const HowItWorks = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().catch((err) => {
                console.log('Autoplay prevented by browser:', err);
              });
            }
          } else {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 } // Starts playing when 50% visible
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  return (
    <section className="bg-white dark:bg-background-6 pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-[90px] lg:pb-[90px]">
      <div className="main-container">
        
        {/* Headings */}
        <div className="mb-10 md:mb-14 space-y-4 text-center">
          <RevealAnimation delay={0.2}>
            <div className="mb-3 flex items-center w-fit mx-auto rounded-full bg-white py-[6px] px-[13px] border-[1px] border-[#B7D4FF]">
              <span className="text-xs sm:text-sm md:text-base font-normal text-primary-700">How Securit Works</span>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <h2 className="text-primary-700 font-bold text-[30px] !leading-[34px] mb-2">
              Real-time safety, powered by intelligence
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <p className="text-secondary text-[20px] !leading-[26px]">
              Securit collects worker and site data, analyzes risk instantly, and triggers alerts when it matters most.
            </p>
          </RevealAnimation>
        </div>

        {/* Video Placeholder */}
        <RevealAnimation delay={0.5}>
          <div
            ref={containerRef}
            className="relative mx-auto max-w-[1060px] w-full aspect-video rounded-[32px] overflow-hidden bg-[#0A1128] shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer"
            onClick={togglePlay}
          >
            
            {/* Real Dummy Video Element behind the play button */}
            <video
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-60'}`}
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              loop
              muted
              playsInline
            />

            {/* Decorative background simulating the dark particles if video doesn't load immediately */}
            {!isPlaying && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19]/80 via-[#1A233A]/80 to-[#0A1128]/80 pointer-events-none"></div>
            )}

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_40px_rgb(0,0,0,0.2)]">
                  {/* Custom Play Icon */}
                  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="48" cy="48" r="47" fill="white" stroke="#0070CE" strokeWidth="2" />
                    <path d="M38.666 38.6665C38.6659 38.1973 38.7895 37.7363 39.0245 37.3302C39.2595 36.9241 39.5975 36.5871 40.0044 36.3534C40.4112 36.1197 40.8725 35.9974 41.3417 35.999C41.8109 36.0006 42.2714 36.126 42.6767 36.3625L58.6727 45.6931C59.0764 45.9274 59.4115 46.2635 59.6446 46.6678C59.8777 47.0722 60.0006 47.5306 60.001 47.9973C60.0014 48.4641 59.8793 48.9227 59.6469 49.3275C59.4145 49.7322 59.08 50.0689 58.6767 50.3038L42.6767 59.6371C42.2714 59.8736 41.8109 59.999 41.3417 60.0006C40.8725 60.0022 40.4112 59.8799 40.0044 59.6462C39.5975 59.4125 39.2595 59.0756 39.0245 58.6694C38.7895 58.2633 38.6659 57.8024 38.666 57.3331V38.6665Z" fill="#0070CE" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </RevealAnimation>

      </div>
    </section>
  );
};

export default HowItWorks;
