import React, { useState, useEffect, useRef } from 'react';

interface ParallaxVideoBannerProps {
  videoLocal: string;
  videoRemote: string;
  className?: string;
  ariaLabel?: string;
}

export const ParallaxVideoBanner: React.FC<ParallaxVideoBannerProps> = ({
  videoLocal,
  videoRemote,
  className = '',
  ariaLabel = 'Aksoy Jewelry Video Showcase'
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState<number>(0);

  // Smooth scroll parallax calculation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;
            setParallaxOffset(distanceFromCenter * 0.16);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // IntersectionObserver: Start rapid video playback when scrolled into view, pause when off-screen
  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Preload video stream immediately
    video.preload = 'auto';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Auto-play was safely deferred or interrupted
              });
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '200px 0px 200px 0px', // Start pre-warming 200px before appearing
        threshold: [0, 0.15]
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] min-h-[420px] overflow-hidden rounded-3xl border border-[#C5A059]/30 bg-black flex items-center justify-center shadow-[0_12px_48px_rgba(0,0,0,0.85)] ${className}`}
    >
      <div
        className="absolute inset-0 w-full h-[120%] -top-[10%] flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate3d(0, ${-parallaxOffset}px, 0)`,
          willChange: 'transform',
        }}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className="w-full h-full object-cover sm:object-contain block opacity-100 pointer-events-none transform-gpu"
          aria-label={ariaLabel}
          aria-hidden="true"
        >
          <source src={videoLocal} type="video/mp4" />
          <source src={videoRemote} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

