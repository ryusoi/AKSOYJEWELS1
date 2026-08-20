import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, MessageCircle, Anchor, Sparkles } from 'lucide-react';
import { Language, Theme, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';

// Video constants
export const MARMARIS_BG_VIDEO_REMOTE = 'https://raw.githubusercontent.com/ryusoi/aksoy-jewelry-media/main/VIDEO/PINK%20FLOWER%20AKSOY%201.mp4';
export const MARMARIS_BG_VIDEO_LOCAL = '/videos/pink_flower_aksoy_1.mp4';

interface MarmarisSceneProps {
  currentLanguage: Language;
  currentTheme: Theme;
  onNavigate: (route: PageRoute) => void;
}

export const MarmarisScene: React.FC<MarmarisSceneProps> = ({
  currentLanguage,
  currentTheme,
  onNavigate: _onNavigate
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [parallaxOffset, setParallaxOffset] = useState<number>(0);

  // Smooth scroll parallax calculation
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate how far the section is from viewport center
            const sectionCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = sectionCenter - viewportCenter;
            
            // Subtle, silky smooth parallax shift
            setParallaxOffset(distanceFromCenter * 0.18);
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

  // IntersectionObserver: Play when entering viewport, pause when offscreen
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

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
        rootMargin: '200px 0px 200px 0px',
        threshold: [0, 0.1]
      }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="aksoy-marmaris-section"
      className="relative min-h-[90vh] pt-12 pb-28 sm:pt-16 sm:pb-36 px-4 sm:px-8 overflow-hidden bg-black flex flex-col items-center justify-center"
    >
      {/* Top Location Badge & Frame - Positioned Further Up Well Above the Video */}
      <div className="relative z-20 mb-10 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#C5A059]/70 bg-black/95 text-[#C5A059] text-xs sm:text-sm tracking-[0.25em] uppercase font-bold shadow-[0_6px_24px_rgba(0,0,0,0.95)]">
          <Anchor className="w-4 h-4 text-[#C5A059]" />
          <span>MARMARIS, MUĞLA • LOTUS BEACH HOTEL</span>
        </div>
      </div>

      {/* Fullscreen Video Background without Cropping, Positioned Cleanly Below the Top Titles with Parallax */}
      <div 
        className="absolute inset-x-0 top-44 sm:top-52 lg:top-56 z-0 overflow-hidden flex items-start justify-center pointer-events-none"
        style={{
          transform: `translate3d(0, ${-parallaxOffset * 0.85}px, 0)`,
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
          className="w-auto h-[480px] sm:h-[600px] lg:h-[680px] max-w-full object-contain block opacity-100 pointer-events-none transform-gpu"
          aria-hidden="true"
        >
          <source src={MARMARIS_BG_VIDEO_LOCAL} type="video/mp4" />
          <source src={MARMARIS_BG_VIDEO_REMOTE} type="video/mp4" />
        </video>
      </div>

      <div 
        className="relative z-10 max-w-7xl w-full mx-auto space-y-12"
        style={{
          transform: `translate3d(0, ${parallaxOffset * 0.25}px, 0)`,
          willChange: 'transform',
        }}
      >
        {/* Main Title Above Video */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E0D8C0] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
            {t.marmaris.title}
          </h2>
        </div>

        {/* Content Below Video: Subtitle & 3 Pillars */}
        <div className="pt-[440px] sm:pt-[540px] lg:pt-[600px] space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <p className="font-neoris-primary text-lg sm:text-2xl text-[#C5A059] font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {t.marmaris.subtitle}
            </p>
          </div>

          {/* 3 Pillars of Marmaris Salon */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex md:flex w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 items-center justify-center text-[#C5A059] shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Lotus Beach Hotel Boutique
              </h3>
              <p className="text-xs sm:text-sm text-[#E0D8C0]/95 font-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {t.marmaris.boutiqueP1}
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex md:flex w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 items-center justify-center text-[#C5A059] shadow-sm">
                <Anchor className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Private Yacht & Shore Appointments
              </h3>
              <p className="text-xs sm:text-sm text-[#E0D8C0]/95 font-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                {t.marmaris.boutiqueP2}
              </p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="inline-flex md:flex w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 items-center justify-center text-[#C5A059] shadow-sm">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Complimentary VIP Chauffeur
              </h3>
              <p className="text-xs sm:text-sm text-[#E0D8C0]/95 font-light leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
                Arranged private Mercedes transfer from anywhere along the Marmaris, Içmeler, or Datça coast directly to our boutique.
              </p>
            </div>
          </div>
        </div>

        {/* Dedicated Marmaris Contact Action Banner */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[#C5A059]/40 bg-black/60 shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <div className="text-xs tracking-[0.25em] uppercase text-[#C5A059] font-bold">
              {t.marmaris.contactCardTitle}
            </div>
            <h3 className="font-neoris-display text-2xl sm:text-3xl text-[#C5A059] font-light">
              Mr. Parvin
            </h3>
            <p className="text-xs sm:text-sm text-[#E0D8C0]/90 max-w-xl">
              {t.marmaris.contactCardSubtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/905352795176?text=Hello%20Mr.%20Parvin,%20I%20would%20like%20to%20arrange%20a%20visit%20to%20Aksoy%20Jewel%20in%20Marmaris."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Mr. Parvin</span>
            </a>

            <a
              href="tel:+905352795176"
              className="px-6 py-3.5 rounded-full bg-[#C5A059] hover:bg-[#d8b56f] text-[#050B14] font-semibold text-xs sm:text-sm tracking-wider uppercase flex items-center gap-2 transition-all shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>+90 535 279 51 76</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
