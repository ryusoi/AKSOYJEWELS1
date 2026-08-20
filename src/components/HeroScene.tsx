import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Anchor, Volume2, VolumeX } from 'lucide-react';
import { Language, Theme, PageRoute } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { AksoyLogo } from './AksoyLogo';

// Background Video & Audio Assets
export const HERO_BG_VIDEO_REMOTE = 'https://raw.githubusercontent.com/ryusoi/aksoy-jewelry-media/main/VIDEO/gold%20header.mp4';
export const HERO_BG_VIDEO_LOCAL = '/videos/gold_header.mp4';
export const HERO_AUDIO_REMOTE = 'https://raw.githubusercontent.com/ryusoi/orka-homes-videos/main/audio/IMMI%20audio.mp3';
export const HERO_AUDIO_LOCAL = '/audio/immi_audio.mp3';

interface HeroSceneProps {
  currentLanguage: Language;
  currentTheme: Theme;
  onNavigate: (route: PageRoute) => void;
  onOpenConsultation: () => void;
}

export const HeroScene: React.FC<HeroSceneProps> = ({
  currentLanguage,
  currentTheme,
  onNavigate,
  onOpenConsultation
}) => {
  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isLight = currentTheme === 'light';

  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [scrollY, setScrollY] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Parallax scroll tracking with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Initialize and auto-play unmuted audio on mount, with fallback for browser autoplay policies
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 0.6;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // If browser restricts unmuted autoplay before user gesture, play on first interaction
          const resumeAudioOnGesture = () => {
            if (audioRef.current && !audioRef.current.muted) {
              audioRef.current.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {});
            }
          };

          window.addEventListener('click', resumeAudioOnGesture, { once: true });
          window.addEventListener('touchstart', resumeAudioOnGesture, { once: true });
          window.addEventListener('scroll', resumeAudioOnGesture, { once: true });
        });
    }

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  // Optimize video play/pause on visibility
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

  // Toggle Sound safely
  const toggleSound = () => {
    if (!audioRef.current) return;

    if (isMuted) {
      audioRef.current.muted = false;
      audioRef.current.volume = 0.6;
      audioRef.current.play().then(() => {
        setIsMuted(false);
        setIsPlaying(true);
      }).catch((err) => {
        console.log('Audio playback error:', err);
      });
    } else {
      audioRef.current.muted = true;
      audioRef.current.pause();
      setIsMuted(true);
      setIsPlaying(false);
    }
  };

  // Parallax transforms
  const videoParallaxY = scrollY * 0.35;
  const contentParallaxY = scrollY * -0.12;

  return (
    <section 
      id="aksoy-cinematic-hero"
      className="relative min-h-[92vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden pt-28 sm:pt-32 pb-16 px-4 sm:px-8"
    >
      {/* Fullscreen Video Background with Smooth Depth Parallax & Crystal Clear Sharpness */}
      <div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{
          transform: `translate3d(0, ${videoParallaxY}px, 0) scale(1.12)`,
          willChange: 'transform',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          controls={false}
          className="w-full h-full object-cover object-center transform-gpu pointer-events-none brightness-[0.92] contrast-[1.04]"
          poster="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2000&auto=format&fit=crop"
          aria-hidden="true"
        >
          <source src={HERO_BG_VIDEO_LOCAL} type="video/mp4" />
          <source src={HERO_BG_VIDEO_REMOTE} type="video/mp4" />
        </video>

        {/* Minimal Non-Blurring Luxury Ambient Gradient for Text Contrast */}
        <div 
          className={`absolute inset-0 ${
            isLight 
              ? 'bg-gradient-to-b from-[#faf8f5]/60 via-transparent to-[#faf8f5]/75' 
              : 'bg-gradient-to-b from-[#050B14]/65 via-transparent to-[#050B14]/80'
          }`} 
        />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Synchronized Looping Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        muted={isMuted}
      >
        <source src={HERO_AUDIO_LOCAL} type="audio/mpeg" />
        <source src={HERO_AUDIO_REMOTE} type="audio/mpeg" />
      </audio>

      {/* Floating Transparent Small Mute / Sound Icon Button */}
      <div className="absolute bottom-5 right-5 sm:bottom-7 sm:right-7 z-30 flex items-center">
        <button
          onClick={toggleSound}
          id="hero-sound-toggle-button"
          aria-label={isMuted ? 'Unmute soundtrack' : 'Mute soundtrack'}
          title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
          className="group relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/35 hover:bg-black/65 border border-[#C5A059]/40 hover:border-[#C5A059] text-[#E0D8C0] hover:text-[#C5A059] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.45)] active:scale-90"
        >
          {isMuted ? (
            <VolumeX className="w-3.5 h-3.5 text-[#E0D8C0]/75 group-hover:text-[#C5A059] transition-colors" />
          ) : (
            <div className="relative flex items-center justify-center">
              <Volume2 className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] animate-ping" />
            </div>
          )}
        </button>
      </div>

      {/* Hero Content Container with Coordinated Parallax Flow */}
      <div 
        className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        style={{
          transform: `translate3d(0, ${contentParallaxY}px, 0)`,
          willChange: 'transform',
        }}
      >
        {/* Left Column: Editorial Typography & Brand Positioning */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Top Heritage Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[rgba(224,216,192,0.2)] bg-[#050B14]/70 backdrop-blur-md text-[#C5A059] text-[10px] sm:text-xs tracking-[0.3em] uppercase font-semibold">
            <Anchor className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Lotus Beach Hotel • Marmaris, Türkiye</span>
          </div>

          {/* Monumental Headline */}
          <h1 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-balance">
            <span className={`block ${isLight ? 'text-[#19191a]' : 'text-white'}`}>
              {t.hero.title.split(' ')[0]} {t.hero.title.split(' ')[1]}
            </span>
            <span className="bg-gradient-to-r from-[#E0D8C0] via-[#C5A059] to-[#E8C257] bg-clip-text text-transparent font-neoris-display font-light">
              {t.hero.title.split(' ').slice(2).join(' ')}
            </span>
          </h1>

          {/* Subtitle with Cursive Highlight */}
          <p className={`font-serif-luxury text-base sm:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light ${
            isLight ? 'text-zinc-700' : 'text-[#E0D8C0]/85'
          }`}>
            {t.hero.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <button
              onClick={() => onNavigate('shop')}
              className="px-8 py-4 rounded-full bg-[#C5A059] text-[#050B14] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#d8b56f] hover:shadow-[0_0_30px_rgba(197,160,89,0.6)] hover:scale-105 transition-all transform active:scale-95 flex items-center gap-2 group"
            >
              <span>{t.hero.ctaShop}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => onNavigate('marmaris')}
              className={`px-6 py-4 rounded-full border border-[rgba(224,216,192,0.3)] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.2em] uppercase backdrop-blur-md transition-all ${
                isLight 
                  ? 'bg-white/80 hover:bg-[#C5A059]/15 text-zinc-900' 
                  : 'bg-[#050B14]/60 hover:bg-white/10 text-[#E0D8C0]'
              }`}
            >
              {t.hero.ctaVisit}
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[rgba(224,216,192,0.15)] max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <div>
              <div className="font-cinzel text-base sm:text-lg font-bold text-[#C5A059]">1990</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider uppercase">Established Heritage</div>
            </div>
            <div>
              <div className="font-cinzel text-base sm:text-lg font-bold text-[#C5A059]">18k & 14k</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider uppercase">Solid Gold Always</div>
            </div>
            <div>
              <div className="font-cinzel text-base sm:text-lg font-bold text-[#C5A059]">Lotus Beach</div>
              <div className="text-[10px] sm:text-xs text-zinc-400 tracking-wider uppercase">Marmaris Boutique</div>
            </div>
          </div>
        </div>

        {/* Right Column: Majestic Gold Framed Emblem & Brand Emblem Centerpiece */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          {/* Subtle Golden Geometric Orbit */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
            <div className="w-80 h-80 relative flex items-center justify-center animate-jewel-rotate">
              <div className="absolute w-64 h-64 border border-[#C5A059]/40 rotate-45 rounded-2xl" />
              <div className="absolute w-64 h-64 border border-[#E0D8C0]/20 rotate-[22.5deg] rounded-2xl" />
              <div className="w-24 h-24 bg-[#C5A059] blur-[40px] opacity-25" />
            </div>
          </div>

          {/* Main Gold Framed Luxury Card - Completely Transparent so Background Video Shines Through */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-[2px] border-2 border-[#C5A059]/75 bg-transparent shadow-[0_0_35px_rgba(197,160,89,0.3)] group">
            <div className="w-full rounded-[22px] overflow-hidden p-6 sm:p-8 flex flex-col items-center text-center relative bg-transparent border border-[#C5A059]/25">
              {/* Corner Diamond Ornaments */}
              <span className="absolute top-3 left-3 text-[#C5A059] text-xs">✦</span>
              <span className="absolute top-3 right-3 text-[#C5A059] text-xs">✦</span>
              <span className="absolute bottom-3 left-3 text-[#C5A059] text-xs">✦</span>
              <span className="absolute bottom-3 right-3 text-[#C5A059] text-xs">✦</span>

              {/* Official 4K Video Logo in Transparent Frame */}
              <div className="py-2 mb-2">
                <AksoyLogo variant="full" transparent={true} />
              </div>

              {/* Sub-details & Heritage */}
              <div className="w-full pt-4 border-t border-[#C5A059]/30 space-y-2">
                <div className="flex items-center justify-center gap-2 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase font-cinzel text-[#C5A059] drop-shadow-md">
                  <span>FINE JEWELLERY</span>
                  <span>•</span>
                  <span>DIAMONDS</span>
                  <span>•</span>
                  <span>SOLID GOLD</span>
                </div>

                <div className="text-[10px] text-[#E0D8C0]/90 tracking-wider drop-shadow-sm font-medium">
                  Lotus Beach Hotel, Marmaris • Established 1990
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

