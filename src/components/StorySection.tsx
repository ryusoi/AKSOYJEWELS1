import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Users, Gem, Clock, ArrowRight } from 'lucide-react';
import { Language, Theme, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';

// Platinum Ring Video Constants
export const PLATINUM_RING_VIDEO_REMOTE = 'https://raw.githubusercontent.com/ryusoi/aksoy-jewelry-media/main/VIDEO/platinum%20ring.mp4';
export const PLATINUM_RING_VIDEO_LOCAL = '/videos/platinum_ring.mp4';

interface StorySectionProps {
  currentLanguage: Language;
  currentTheme: Theme;
  onNavigate: (route: PageRoute) => void;
}

export const StorySection: React.FC<StorySectionProps> = ({
  currentLanguage,
  currentTheme,
  onNavigate
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const videoContainerRef = useRef<HTMLDivElement | null>(null);
  const [videoParallaxOffset, setVideoParallaxOffset] = useState<number>(0);

  // Smooth scroll parallax calculation for the video
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (videoContainerRef.current) {
            const rect = videoContainerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Calculate distance from viewport center
            const elementCenter = rect.top + rect.height / 2;
            const viewportCenter = windowHeight / 2;
            const distanceFromCenter = elementCenter - viewportCenter;
            
            // Silky smooth parallax translation
            setVideoParallaxOffset(distanceFromCenter * 0.16);
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

  return (
    <section 
      id="aksoy-our-story-section"
      className={`py-12 sm:py-20 px-4 sm:px-8 relative overflow-hidden ${
        isLight ? 'bg-[#faf8f5]' : 'bg-[#050B14]'
      }`}
    >
      {/* Background Subtle Watermark M with Mediterranean Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] select-none text-[35vw] font-cinzel font-bold text-[#C5A059]">
        M
      </div>

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Fullscreen Video Background with Scrolling Parallax (Unfiltered, Muted, Looping) */}
        <div 
          ref={videoContainerRef}
          className="relative w-full h-[60vh] sm:h-[75vh] lg:h-[85vh] min-h-[420px] overflow-hidden rounded-3xl border border-[#C5A059]/30 bg-black flex items-center justify-center shadow-[0_12px_48px_rgba(0,0,0,0.85)]"
        >
          <div 
            className="absolute inset-0 w-full h-[120%] -top-[10%] flex items-center justify-center pointer-events-none"
            style={{
              transform: `translate3d(0, ${-videoParallaxOffset}px, 0)`,
              willChange: 'transform',
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              controls={false}
              className="w-full h-full object-cover sm:object-contain block opacity-100 pointer-events-none transform-gpu"
              aria-hidden="true"
            >
              <source src={PLATINUM_RING_VIDEO_LOCAL} type="video/mp4" />
              <source src={PLATINUM_RING_VIDEO_REMOTE} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Top Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] text-xs tracking-[0.3em] uppercase font-bold">
            <Clock className="w-3.5 h-3.5" />
            <span>{t.story.badge}</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold tracking-tight text-[#E0D8C0]">
            {t.story.heading}
          </h2>

          <p className="font-neoris-primary text-base sm:text-lg text-[#C5A059] font-light">
            "Aksoy Jewel, which took part in the sector in 1990 to provide better service in the GOLD sector, has achieved a reputable place in 2 sectors by showing a stable growth."
          </p>
        </div>

        {/* Narrative Paragraphs in High-End 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 text-sm sm:text-base leading-relaxed font-light text-[#E0D8C0]/90">
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p1}
            </p>
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p2}
            </p>
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p3}
            </p>
          </div>

          <div className="space-y-5 text-sm sm:text-base leading-relaxed font-light text-[#E0D8C0]/90">
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p4}
            </p>
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p5}
            </p>
            <p className={isLight ? 'text-zinc-800' : 'text-[#E0D8C0]/90'}>
              {t.story.p6}
            </p>
          </div>
        </div>

        {/* Partners & Founders Feature Card */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[rgba(197,160,89,0.3)] bg-gradient-to-r from-[#1A3C5A]/25 via-[#050B14]/80 to-[#050B14]/95 shadow-2xl backdrop-blur-xl">
          <div className="text-center space-y-2 mb-8">
            <div className="text-xs tracking-[0.3em] uppercase text-[#C5A059] font-bold">
              ESTEEMED LEADERSHIP
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E0D8C0]">
              {t.story.partnersTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {/* Partner 1 */}
            <div className="p-6 rounded-2xl border border-[rgba(224,216,192,0.15)] bg-black/40 text-center space-y-2 hover:border-[#C5A059]/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <Gem className="w-6 h-6" />
              </div>
              <div className="font-cinzel text-lg font-bold text-white">
                {t.story.partner1Name}
              </div>
              <div className="text-xs text-[#C5A059] font-medium tracking-wider uppercase">
                {t.story.partner1Role}
              </div>
            </div>

            {/* Partner 2 */}
            <div className="p-6 rounded-2xl border border-[rgba(224,216,192,0.15)] bg-black/40 text-center space-y-2 hover:border-[#C5A059]/50 transition-colors">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                <Award className="w-6 h-6" />
              </div>
              <div className="font-cinzel text-lg font-bold text-white">
                {t.story.partner2Name}
              </div>
              <div className="text-xs text-[#C5A059] font-medium tracking-wider uppercase">
                {t.story.partner2Role}
              </div>
            </div>
          </div>
        </div>

        {/* 256-Bit SSL Encrypted Security Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 text-emerald-300 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-emerald-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h4 className="font-cinzel text-lg font-bold text-emerald-200">
              {t.story.securityTitle}
            </h4>
            <p className="text-xs sm:text-sm text-emerald-300/90 leading-relaxed font-light">
              {t.story.securityText}
            </p>
          </div>
        </div>

        {/* Mission & Vision Twin Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl border border-[rgba(197,160,89,0.3)] bg-black/40 space-y-3 backdrop-blur-md">
            <div className="text-xs tracking-[0.25em] uppercase text-[#C5A059] font-bold">
              OUR GUIDING PURPOSE
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E0D8C0]">
              {t.story.missionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#E0D8C0]/80 font-light leading-relaxed">
              {t.story.missionText}
            </p>
          </div>

          <div className="p-8 rounded-3xl border border-[rgba(197,160,89,0.3)] bg-black/40 space-y-3 backdrop-blur-md">
            <div className="text-xs tracking-[0.25em] uppercase text-[#C5A059] font-bold">
              OUR STRATEGIC FUTURE
            </div>
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E0D8C0]">
              {t.story.visionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#E0D8C0]/80 font-light leading-relaxed">
              {t.story.visionText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
