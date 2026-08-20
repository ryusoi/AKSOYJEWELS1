import React, { useEffect, useRef } from 'react';
import localPosterAsset from '../assets/images/aksoy_logo_4k_poster.jpg';

interface AksoyLogoProps {
  variant?: 'header' | 'footer' | 'sidebar' | 'full' | 'compact' | 'minimal' | 'hero';
  className?: string;
  theme?: 'dark' | 'light';
  onClick?: () => void;
  showSubtitle?: boolean;
  transparent?: boolean;
}

// User specified 4K logo video: https://github.com/ryusoi/aksoy-jewelry-media/blob/main/VIDEO/AKSOY%20LOGO%204K.mp4
export const LOGO_VIDEO_4K_REMOTE = 'https://raw.githubusercontent.com/ryusoi/aksoy-jewelry-media/main/VIDEO/AKSOY%20LOGO%204K.mp4';
export const LOGO_VIDEO_4K_LOCAL = '/videos/aksoy_logo_4k.mp4';
export const LOGO_VIDEO_HD_LOCAL = '/videos/aksoy_logo_hd.mp4';
export const LOGO_POSTER_IMG = localPosterAsset;

export const AksoyLogo: React.FC<AksoyLogoProps> = ({
  variant = 'compact',
  className = '',
  transparent = true,
  onClick
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.preload = 'auto';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {});
            }
          } else {
            if (!video.paused) {
              video.pause();
            }
          }
        });
      },
      {
        threshold: [0, 0.1]
      }
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, []);

  const getSizingClasses = () => {
    switch (variant) {
      case 'header':
        return 'h-18 sm:h-22 lg:h-28 aspect-[5/4]';
      case 'sidebar':
        return 'h-16 sm:h-20 aspect-[5/4]';
      case 'footer':
        return 'h-20 sm:h-24 lg:h-28 aspect-[5/4]';
      case 'compact':
        return 'h-15 sm:h-18 aspect-[5/4]';
      case 'minimal':
        return 'h-11 sm:h-13 aspect-[5/4]';
      case 'full':
      case 'hero':
      default:
        return 'h-36 sm:h-52 lg:h-68 aspect-[5/4] max-w-full';
    }
  };

  return (
    <div 
      onClick={onClick}
      className={`inline-flex items-center justify-center cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] ${className}`}
      id="aksoy-jewels-main-logo"
      aria-label="Aksoy Jewels Official 4K Video Logo"
    >
      {/* Transparent Golden box frame with round edges */}
      <div className={`relative ${getSizingClasses()} rounded-xl sm:rounded-2xl border-2 border-[#C5A059] ${transparent ? 'bg-transparent' : 'bg-black/30'} shadow-[0_0_18px_rgba(197,160,89,0.45)] flex items-center justify-center overflow-hidden`}>
        <video 
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          controls={false}
          className="w-full h-full object-cover rounded-[10px] sm:rounded-[14px] block pointer-events-none"
          aria-label="Aksoy Jewels 4K Video Logo"
        >
          {/* HD local stream for instant loading */}
          <source src={LOGO_VIDEO_HD_LOCAL} type="video/mp4" />
          {/* Direct 4K full sources */}
          <source src={LOGO_VIDEO_4K_REMOTE} type="video/mp4" />
          <source src={LOGO_VIDEO_4K_LOCAL} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};


